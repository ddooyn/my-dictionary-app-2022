import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loadWordsFB } from '../redux/modules/words';

import Card from './Card';

const CardList = () => {
  const dispatch = useDispatch();
  const words = useSelector((state) => state.words.list);
  useEffect(() => {
    dispatch(loadWordsFB());
  }, []);
  return (
    <>
      <ListTitle>{`📚 ${words.length}개의 단어가 있습니다.`}</ListTitle>
      <Cards>
        {words
          .slice()
          .reverse()
          .map((v, i) => (
            <Card
              key={i}
              word={v.word}
              pron={v.pronunciation}
              mean={v.meaning}
              ex={v.example}
              trans={v.translation}
              check={v.checked}
            />
          ))}
        {words.length % 2 ? <Empty /> : null}
      </Cards>
    </>
  );
};

export default CardList;

const ListTitle = styled.h3`
  font-family: 'Bazzi' !important;
  margin: 0 auto 20px;
  font-size: 1.3em;
  font-weight: 400;
`;

const Cards = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

const Empty = styled.li`
  flex: 1 310px;
`;
