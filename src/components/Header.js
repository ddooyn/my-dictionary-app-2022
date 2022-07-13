import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GiFlowerPot } from 'react-icons/gi';

const Header = () => {
  const navigate = useNavigate();
  const [scrollPos, setScrollPos] = useState(0);
  const updateScroll = () => {
    setScrollPos(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  }, []);

  return (
    <HeaderComponent scroll={scrollPos}>
      <Wrapper>
        <Link to="/">
          <Flower />
        </Link>
        <Title>다채로운 사전</Title>
        <button onClick={() => navigate('/word/add')}>단어 추가</button>
      </Wrapper>
    </HeaderComponent>
  );
};

export default Header;

const HeaderComponent = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px 0;
  border-bottom: 1px solid #9da3ba;
  color: #111;
  text-align: center;
  word-break: keep-all;
  background: ${(props) =>
    props.scroll < 80 ? 'transparent' : 'rgba(255, 255, 255, 0.9)'};
  transition: background 0.5s ease-in-out;
  z-index: 100;
  
  button {
    padding: 10px 15px;
    margin: 0 15px 0 -10px;
    border-radius: 20px;
    background-color: #111;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: auto;
`;

const Title = styled.h1`
  font-family: 'Bazzi' !important;
  margin-right: -10px;
  font-size: 1.8em;
`;

const Flower = styled(GiFlowerPot)`
  margin-left: 30px;
  font-size: 2.2em;
`;
