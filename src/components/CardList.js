import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const CardList = () => {
  const words = {
    list: [
      {
        word: 'grin',
        pronunciation: 'grin',
        meaning: '웃다, 미소',
        example: 'grin with delight',
        translation: '기뻐서 방긋 웃다',
        checked: true,
      },
      {
        word: 'bloom',
        pronunciation: 'bluːm',
        meaning: '1.꽃 2.꽃을 피우다 3.혈색이 돌다',
        example: 'Most roses will begin to bloom from late May.',
        translation: '5월 말부터 대부분의 장미가 꽃을 피우기 시작한다.',
        checked: false,
      },
      {
        word: 'adorable',
        pronunciation: 'əˈdɔːrəbl',
        meaning: '사랑스러운',
        example: "You're adorable when you smile.",
        translation: '너는 웃을 때가 귀엽다',
        checked: false,
      },
    ],
  };
  return (
    <>
      <ListTitle>{`📚 ${words.list.length}개의 단어가 있습니다.`}</ListTitle>
      <Cards>
        {words.list
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
        {words.list.length % 2 ? <Empty /> : null}
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
