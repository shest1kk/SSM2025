import React from "react";
import './Feedback.css';
import Button from '../../Buttons/Button';
import { Link } from "react-router-dom";

const Feedback = () => {
  return (
    <div className={'Feedback_wrapper'}>
    <div className={'Feedback_image'}>
<img className={'Feedback_image_img'}
    src='/assets/logo.svg'
    alt="123"
        />
</div>
<div className={'Feedback_text'}>
    <span>Обратная связь</span>
    </div>
      <div className={'Feedback_categories'}>
        <a href="https://wa.me/qr/3USACWH6VD2AD1">
          <Button className={'primary-button'}>Связь с организатором</Button>
        </a>
        <a href="https://forms.yandex.ru/cloud/66754735eb61465b7d472f3f/">
          <Button className={'primary-button'}>Оставить отзыв</Button>
        </a>
        <Link to='/'>
          <Button className={'primary-button'}>Назад</Button>
        </Link>
      </div>
    </div>
  );
};

export default Feedback;
