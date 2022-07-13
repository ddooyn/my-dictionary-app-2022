import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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
    height: 100%;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(/img/gradienta-unsplash.jpg) 0%/cover no-repeat;
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
