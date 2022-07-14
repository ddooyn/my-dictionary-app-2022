import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './pages/Home';
import Word from './pages/Word';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/word/add" element={<Word />} />
            <Route path="/word/edit/:id" element={<Word />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
