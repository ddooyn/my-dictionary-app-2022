import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { useDispatch } from 'react-redux';
import { createWordFB } from '../redux/modules/words';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const wordRef = useRef();
  const pronRef = useRef();
  const meanRef = useRef();
  const exRef = useRef();
  const transRef = useRef();

  const onClickSubmit = (e) => {
    e.preventDefault();
    if (
      wordRef.current.value &&
      pronRef.current.value &&
      meanRef.current.value &&
      exRef.current.value &&
      transRef.current.value
    ) {
      dispatch(
        createWordFB({
          word: wordRef.current.value,
          pronunciation: pronRef.current.value,
          meaning: meanRef.current.value,
          example: exRef.current.value,
          translation: transRef.current.value,
          checked: false,
          date: Date.now(),
        })
      );
      navigate('/');
    } else {
      return alert('빈 항목을 모두 입력해주세요.');
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
        <Button type="button" content="단어 추가하기" event={onClickSubmit} />
      </Form>
    </>
  );
};

export default Add;

const Form = styled.div`
  width: 350px;
  height: 480px;
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
  margin-bottom: 17px;
  label {
    margin-right: 25px;
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
