import React from 'react';
import globalStyles from './app.module.scss';
import Header from '../header/header';
import Promo from '../promo/promo';
import Converter from '../converter/converter';
import History from '../history/history';
import Footer from '../footer/footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <h1 className={globalStyles['visually-hidden']}>
          Страница сайта Лига Банка с конвертером валют
        </h1>
        <Promo />
        <Converter />
        <History />
      </main>
      <Footer />
    </>
  );
}

export default App;
