import { createGlobalStyle } from 'styled-components';
import bgImg from '../assets/img/gradienta-unsplash.jpg';
import BazziFont from '../assets/font/Bazzi.woff';

export default createGlobalStyle`
  @font-face {
    font-family: 'Bazzi';
    src: url(${BazziFont}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

 * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: inherit;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
    'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    sans-serif !important;
  }
  html, body, #root {
    width: 100%;
  }
  body {
    height: 100%;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5)) 100%, url(${bgImg});
    background-size: cover;
  }
  a {
    text-decoration : none;
    color : inherit;
  }
  button {
    border : none;
    background: none;
    color: inherit;
    cursor : pointer;
  }
  li {
    list-style: none;
  }
  [hidden] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  &::-moz-selection {
    background: #3cb371;
    color: #fff;
  }
  &::selection {
    background: #3cb371;
    color: #fff;
  }
`;
