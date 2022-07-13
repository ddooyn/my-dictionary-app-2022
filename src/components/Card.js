import React from 'react';
import styled from 'styled-components';
import { BsCheckCircle, BsCheckCircleFill } from 'react-icons/bs';
import { FaRegEdit } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const Card = ({ word, pron, mean, ex, trans, check }) => {
  return (
    <CardComponent check={check}>
      <strong>{word}</strong>
      <span>{pron}</span>
      <em>{mean}</em>
      <p>{ex}</p>
      <p>{trans}</p>
      <Icons>
        <li>
          <button>{check ? <BsCheckCircleFill /> : <BsCheckCircle />}</button>
        </li>
        <li>
          <button>
            <FaRegEdit />
          </button>
        </li>
        <li>
          <button>
            <IoClose />
          </button>
        </li>
      </Icons>
    </CardComponent>
  );
};

export default Card;

const CardComponent = styled.li`
  position: relative;
  flex: 1 310px;
  padding: 30px;
  border-radius: 10px;
  -webkit-box-shadow: 10px 12px 8px -6px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 10px 12px 8px -6px rgba(0, 0, 0, 0.05);
  box-shadow: 10px 12px 8px -6px rgba(0, 0, 0, 0.05);
  background: ${({ check }) =>
    check ? 'rgba(17, 17, 17, 0.54)' : 'rgba(255, 255, 255, 0.4)'};
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-5px);
    -webkit-box-shadow: 14px 24px 15px -10px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 14px 24px 15px -10px rgba(0, 0, 0, 0.05);
    box-shadow: 14px 24px 15px -10px rgba(0, 0, 0, 0.05);
    background: ${({ check }) =>
      check ? 'rgba(17, 17, 17, 0.7)' : 'rgba(255, 255, 255, 0.7)'};
  }

  strong {
    color: ${({ check }) => (check ? '#fff' : '#111')};
    font-size: 22px;
  }

  span {
    margin-left: 5px;
    color: ${({ check }) => (check ? '#ddd' : '#333')};
    font-size: 14px;
    font-weight: 300;
    &::before {
      content: '[';
    }
    &::after {
      content: ']';
    }
  }

  em {
    display: block;
    margin: 3px 0 10px;
    color: ${({ check }) => (check ? '#eee' : '#222')};
    font-size: 18px;
  }

  p {
    color: ${({ check }) => (check ? '#a4c8f6' : '#0754ae')};
    font-size: 15px;
    &:last-child {
      color: ${({ check }) => (check ? '#cddbe2' : '#6d7a89')};
      letter-spacing: -1px;
    }
  }

  & ul li button {
    margin-bottom: 2px;
    color: ${({ check }) => (check ? '#fff' : '#111')};
  }
`;

const Icons = styled.ul`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  & li:nth-child(2) {
    font-size: 17px;
    margin: 1px -3px 0 0;
  }
  & li:last-child {
    font-size: 22px;
  }
`;
