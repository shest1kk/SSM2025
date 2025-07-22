import React from "react";
import './FaqActivnosti.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";
import logo from '../../../../assets/logo.png';

const FaqActivnosti = () => {
    return (
        <div className={'FaqAbout_wrapper'}>
            <div className={'FaqAbout_text'}>
                <div className="FaqAbout_text_wrapper">
                    <span className={'details-timing'}>❗<u>20:00 - 23:00</u>❗</span>
                <div className="FaqAbout_text_Eating">
                ⚽ Арендованное футбольное поле<br/>
                    <span className={'details'}>на карте 15</span>
                </div>
                <div className="FaqAbout_text_Eating">
                🎾 Теннисный корт - для любителей поиграть в большой теннис<br/>
                    <span className={'details'}>на карте 37</span>
                </div>
                <div className="FaqAbout_text_Eating">
                🏐 Пляжный волейбол - кто не прочь поиграть на песочке<br/>
                    <span className={'details'}>на карте 39</span>
                </div>
                <div className="FaqAbout_text_Eating">
                🎱 Бильярд - 2 арендованных стола для Эй Кей и 2 свободных от отеля<br/>
                    <span className={'details'}>в главном корпусе последний этаж</span>
                </div>
                <div className="FaqAbout_text_Eating">
                🎤 Караоке - мы арендовали зал для любителей попеть вечерочком,<br/>может быть кто-то захочет провести командный батл, присоединяйтесь<br/>
                    <span className={'details'}>банкетный зал в главном корпусе, вход через шведскую линию</span>
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

export default FaqActivnosti;
