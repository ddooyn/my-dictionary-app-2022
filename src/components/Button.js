import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Button = ({ content, url, event }) => {
  const navigate = useNavigate();
  return (
    <>
      {url ? (
        <Btn onClick={() => navigate(url)}>{content}</Btn>
      ) : (
        <Btn onClick={event}>{content}</Btn>
      )}
    </>
  );
};

export default Button;

const Btn = styled.button`
  padding: 10px 15px;
  border-radius: 20px;
  background: #111;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  transition: background 0.2s ease-in;
  &:hover {
    background: #444;
  }
`;
