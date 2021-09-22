import React from 'react';
import globalStyles from '../app/app.module.scss';

function SiteNav() {
  return (
    <ul className={globalStyles.ul}>
      <li><a href="/">Услуги</a></li>
      <li><a href="/">Рассчитать кредит</a></li>
      <li><a href="/">Конвертер валют</a></li>
      <li><a href="/">Контакты</a></li>
      <li><a href="/">Задать вопрос</a></li>
    </ul>
  );
}

export default SiteNav;
