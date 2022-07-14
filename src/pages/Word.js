import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createWordFB, updateWordFB } from '../redux/modules/words';
import { useNavigate, useParams } from 'react-router-dom';

const Word = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wordIdx = useParams().id;
  const wordInfo = useSelector((state) => state.words.list)[wordIdx];

  const wordRef = useRef();
  const pronRef = useRef();
  const meanRef = useRef();
  const exRef = useRef();
  const transRef = useRef();

  useEffect(() => {
    if (wordIdx) {
      wordRef.current.value = wordInfo.word;
      pronRef.current.value = wordInfo.pronunciation;
      meanRef.current.value = wordInfo.meaning;
      exRef.current.value = wordInfo.example;
      transRef.current.value = wordInfo.translation;
    }
  }, []);

  const onClickSubmit = (e) => {
    e.preventDefault();
    let newWord = {
      word: wordRef.current.value,
      pronunciation: pronRef.current.value,
      meaning: meanRef.current.value,
      example: exRef.current.value,
      translation: transRef.current.value,
      checked: wordIdx ? wordInfo.checked : false,
      date: wordIdx ? wordInfo.date : Date.now(),
    };
    if (
      !(
        wordRef.current.value &&
        pronRef.current.value &&
        meanRef.current.value &&
        exRef.current.value &&
        transRef.current.value
      )
    ) {
      return alert('빈 항목을 모두 입력해주세요.');
    } else {
      wordIdx
        ? dispatch(updateWordFB(wordInfo.id, newWord))
        : dispatch(createWordFB(newWord));
      navigate('/');
    }
  };

  return (
    <>
      <h2 hidden>단어 추가 페이지</h2>
      <Form>
        <InputWrapper>
          <label htmlFor="word">단어</label>
          <input type="text" id="word" autoComplete="off" ref={wordRef} />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="pronunciation">발음</label>
          <input
            type="text"
            id="pronunciation"
            autoComplete="off"
            ref={pronRef}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="meaning">의미</label>
          <input type="text" id="meaning" autoComplete="off" ref={meanRef} />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="example">예문</label>
          <input type="text" id="example" autoComplete="off" ref={exRef} />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="translation">해석</label>
          <input
            type="text"
            id="translation"
            autoComplete="off"
            ref={transRef}
          />
        </InputWrapper>
        <Button
          type="button"
          content={wordIdx ? '단어 수정하기' : '단어 추가하기'}
          event={onClickSubmit}
        />
      </Form>
    </>
  );
};

export default Word;

const Form = styled.div`
  margin: auto;
  padding: 50px 40px 30px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.5);
  text-align: center;
  button {
    margin-top: 30px;
    padding: 15px 25px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2px 25px;
  margin-bottom: 17px;
  label {
    font-size: 16px;
    font-weight: 600;
  }
  input {
    width: 210px;
    padding: 12px 20px;
    border: 1px solid transparent;
    outline: none;
    border-radius: 30px;
    font-weight: 700;
    transition: all 0.2s;
    &:focus {
      border-bottom: 1px solid #ddd;
      transform: translateY(3px);
    }
  }
`;
