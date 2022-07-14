import { db } from '../../firebase';
import {
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
  doc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';

// Actions
const LOAD = 'words/LOAD';
const CREATE = 'words/CREATE';
const REMOVE = 'words/REMOVE';
const TOGGLE = 'words/TOGGLE';
const UPDATE = 'words/UPDATE';

const initialState = {
  list: [],
};

// Action Creators
export function loadWords(wordsList) {
  return { type: LOAD, wordsList };
}

export function createWord(wordData) {
  return { type: CREATE, wordData };
}

export function removeWord(wordIdx) {
  return { type: REMOVE, wordIdx };
}

export function toggleCheck(wordIdx, check) {
  return { type: TOGGLE, wordIdx, check };
}

export function updateWord(wordIdx, wordData) {
  return { type: UPDATE, wordIdx, wordData };
}

// Middlewares
export const loadWordsFB = () => {
  return async function (dispatch) {
    const wordsRef = collection(db, 'words');
    const q = query(wordsRef, orderBy('date', 'desc'));
    const words = await getDocs(q);

    let wordsList = [];
    words.forEach((doc) => {
      wordsList.push({ id: doc.id, ...doc.data() });
    });
    dispatch(loadWords(wordsList));
  };
};

export const createWordFB = (word) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, 'words'), word);
    const wordData = { id: docRef.id, ...word };
    dispatch(createWord(wordData));
  };
};

export const removeWordFB = (wordId) => {
  return async function (dispatch, getState) {
    if (!wordId) {
      alert('삭제할 단어가 없습니다!');
      return;
    }
    const docRef = doc(db, 'words', wordId);
    await deleteDoc(docRef);

    const wordsList = getState().words.list;
    const wordIdx = wordsList.findIndex((v) => v.id === wordId);
    dispatch(removeWord(wordIdx));
  };
};

export const toggleCheckFB = (wordId, check) => {
  return async function (dispatch, getState) {
    if (!wordId) {
      alert('단어가 없습니다!');
      return;
    }
    const docRef = doc(db, 'words', wordId);
    await updateDoc(docRef, { checked: !check });

    const wordsList = getState().words.list;
    const wordIdx = wordsList.findIndex((v) => v.id === wordId);
    dispatch(toggleCheck(wordIdx, check));
  };
};

export const updateWordFB = (wordId, word) => {
  return async function (dispatch) {
    const docRef = doc(db, 'words', wordId);
    await updateDoc(docRef, { ...word });
    dispatch(updateWord(wordId, word));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'words/LOAD': {
      return { list: action.wordsList };
    }
    case 'words/REMOVE': {
      const newList = state.list.filter(
        (_, i) => i !== parseInt(action.wordIdx)
      );
      return { list: newList };
    }
    case 'words/TOGGLE': {
      const newList = state.list.map((v, i) => {
        if (i === parseInt(action.wordIdx)) {
          return { ...v, checked: !action.check };
        } else {
          return v;
        }
      });
      return { list: newList };
    }
    case 'words/UPDATE': {
      const newList = state.list.map((v, i) => {
        if (i === parseInt(action.wordIdx)) {
          return { id: v.id, ...action.word };
        } else {
          return v;
        }
      });
      return { list: newList };
    }
    default:
      return state;
  }
}
