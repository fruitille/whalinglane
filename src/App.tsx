import React, { useContext, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Swal from 'sweetalert2';
import Header from './components/organisms/Header';
import Footer from './components/atoms/Footer';
import MainPage from './components/pages/MainPage';
import ResultPage from './components/pages/ResultPage';
import { AnotherContext } from './contexts';

function App() {


  const announceViewed = Boolean(window.localStorage.getItem("a_v"))

  const { lang, result } = useContext(AnotherContext)
  const message = require(`./language/${lang}.json`)

  useEffect(() => {
    if(!announceViewed) {
      window.localStorage.removeItem("a_v_2")
      Swal.fire({
        title: 'Update - JAP 2.11.60 ex',
        html: '자장의 창술사 추가<br>Add 1 Character',
        icon: 'success',
      }).then(() => {
        window.localStorage.setItem("a_v", "true")
      })
    }
  }, [announceViewed])

  return (
    <IntlProvider messages={message} locale={lang} defaultLocale='ko'>
      <Router basename="/anothercharcheck">
        <Header/>
        <Routes>
          <Route path="/" element={result ? <ResultPage/> : <MainPage />} />
        </Routes>
        <Footer/>
      </Router>
    </IntlProvider>
  );
}

export default App;