import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const LOAD = 'words/LOAD';

const initialState = {
  list: [],
};

export function loadWords(wordsList) {
  return { type: LOAD, wordsList };
}

export const loadWordsFB = () => {
  return async function (dispatch) {
    const wordsData = await getDocs(collection(db, 'words'));

    let wordsList = [];
    wordsData.forEach((doc) => {
      wordsList.push({ id: doc.id, ...doc.data() });
    });
    console.log(wordsList);

    dispatch(loadWords(wordsList));
  };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'words/LOAD': {
      return { list: action.wordsList };
    }
    default:
      return state;
  }
}
