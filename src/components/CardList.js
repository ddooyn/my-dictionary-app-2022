import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loadWordsFB, loadNextWordsFB } from '../redux/modules/words';

import Card from './Card';

const CardList = () => {
  const dispatch = useDispatch();
  const {
    list: words,
    length: total,
    last,
  } = useSelector((state) => state.words);

  useEffect(() => {
    dispatch(loadWordsFB());
  }, []);

  const [fetching, setFetching] = useState(false);
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && fetching === false) {
      if (words.length !== total) {
        setFetching(true);
        dispatch(loadNextWordsFB(last));
        setFetching(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <ListTitle>{`📚 ${total ?? 0}개의 단어가 있습니다.`}</ListTitle>
      <Cards>
        {words.map((v, i) => (
          <Card
            key={v.id}
            id={v.id}
            idx={i}
            word={v.word}
            pron={v.pronunciation}
            mean={v.meaning}
            ex={v.example}
            trans={v.translation}
            check={v.checked}
          />
        ))}
        {words.length % 3 === 1 ? (
          <>
            <Empty />
            <Empty />
          </>
        ) : (
          <Empty />
        )}
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
