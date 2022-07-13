import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Bazzi';
    src: url(/assets/font/Bazzi.woff) format('woff');
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
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
    display: none;
    }
  }
  body {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(assets/img/gradienta-unsplash.jpg);
    background-size: cover;
  }
  h1 {
    font-family: 'Bazzi' !important;
  }
  a {
    text-decoration : none;
    color : inherit;
  }
  button {
    border : none;
    cursor : pointer;
  }
  li {
    list-style: none;
  }
`;
