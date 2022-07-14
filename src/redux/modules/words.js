import { db } from '../../firebase';
import {
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
  doc,
  deleteDoc,
} from 'firebase/firestore';

// Actions
const LOAD = 'words/LOAD';
const CREATE = 'words/CREATE';
const REMOVE = 'words/REMOVE';

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

export function removeWord(wordId) {
  return { type: REMOVE, wordId };
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
    console.log(wordsList);

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

export const removeWordFB = (wordIdx) => {
  return async function (dispatch, getState) {
    if (!wordIdx) {
      alert('삭제할 단어가 없습니다!');
      return;
    }
    const docRef = doc(db, 'words', wordIdx);
    await deleteDoc(docRef);

    const wordsList = getState().words.list;
    const wordId = wordsList.findIndex((v) => v.id === wordIdx);

    dispatch(removeWord(wordId));
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
        (_, i) => i !== parseInt(action.wordId)
      );
      return { list: newList };
    }
    default:
      return state;
  }
}
