import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const Add = () => {
  return (
    <>
      <h2 hidden>단어 추가 페이지</h2>
      <Form>
        <InputWrapper>
          <label htmlFor="word">단어</label>
          <input type="text" id="word" autoComplete="off" />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="pronunciation">발음</label>
          <input type="text" id="pronunciation" autoComplete="off" />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="meaning">의미</label>
          <input type="text" id="meaning" autoComplete="off" />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="example">예문</label>
          <input type="text" id="example" autoComplete="off" />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="translation">해석</label>
          <input type="text" id="translation" autoComplete="off" />
        </InputWrapper>
        <Button content="단어 추가하기" url="/word/add" />
      </Form>
    </>
  );
};

export default Add;

const Form = styled.form`
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
