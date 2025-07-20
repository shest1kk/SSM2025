import React from "react";
import './FaqAbout.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";

const FaqAbout = () => {
    return (
        <div className={'FaqAbout_wrapper'}>
            <div className={'FaqAbout_image'}>
                <div className="FaqAbout_headerText">
                    <img classname={'FaqAbout_headerText_img'} 
                    src='/assets/testimfonts.svg'
                    alt='123'/>
                </div>
                <img className={'FaqAbout_image_img'}
                    src='/assets/logo.svg'
                    alt="123"
                />
            </div>
            <div className={'FaqAbout_text'}>
                <div className="FaqAbout_text_wrapper">
                <div className="FaqAbout_text_Eating">
                🍽️ Питание:
                <ul>
                    <li>завтрак</li>
                    <span className={'details'}>с 8:00 - 10:00</span>
                    <li>обед</li>
                    <span className={'details'}>с 13:00 - 15:00</span>
                    <li>ужин 22.07</li>
                    <span className={'details'}>с 18:00 - 21:00</span>
                </ul>
                </div>
                {/* <div className="FaqAbout_text_Gym">
                🏋 Тренажерный зал<br />
                <span className={'details'}>круглосуточно</span>
                </div>
                <div className="FaqAbout_text_Games">
                💪 Спортивные игры:
                <ul>
                    <li>Бильярд - американский пул с профессиональным маркером</li>
                    <span className={'details'}>круглосуточно</span>
                    <li>Настольный теннис</li>
                    <li>Пляжный волейбол</li>
                </ul>
            </div> */}
            <div className="FaqAbout_text_show">
            🎭 Анимационные и шоу-программы
            </div>
            <div className="FaqAbout_text_streams">
            🍿 Трансляция спортивных событий и кино
            <ul>
            <span className={'details'}>в спорт баре</span>
            </ul>
               
            </div>
            <div className="FaqAbout_text_parking">
            🅿 Парковка
                <ul>
                    <li>Парковка у КПП</li>
                    <span className={"details-back"}>Въезд на территорию по ФИО</span>
                    {/* <span className={'details-blue'}>кодовое слово Эй Кей/КФС/Эй Кей Раша</span>
                    <span className={'details'}>первый час бесплатно, дальше 100р/час</span> */}
                </ul>
            </div>
            <div className="FaqAbout_text_bbq">
            🔥 Мангальные площадки на территории
                <ul>
                    <li>Уголь/дрова</li>
                    <li>Розжиг</li>
                    <li>Шампура/решетка</li>
                    <span className={'details'}>перечисленные выше услуги оплачиваются отдельно</span>
                </ul>
                
            </div>
            <div className="FaqAbout_text_wifi">
            📶 Wi-Fi
            </div>
            <div className={'FaqAbout-button'}>
                <Link to='/faq'>
                    <Button className={'primary-button'}>Назад</Button>
                </Link>
            </div>
                </div>
            </div>
            
        </div>
    );
};

export default FaqAbout;
