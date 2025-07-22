import React from "react";
import './FaqAbout.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";
import logo from '../../../../assets/logo.png';
import sauna from '../../../../assets/emoji.png'

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
                    src={logo}
                    alt="123"
                />
            </div>
            <div className={'FaqAbout_text'}>
                <div className="FaqAbout_text_wrapper">
                <div className="FaqAbout_text_Eating">
                🍽️ Питание
                <ul>
                    <li>завтрак</li>
                    <span className={'details'}>с 8:00 - 10:00</span>
                    <li>обед</li>
                    <span className={'details'}>с 13:00 - 15:00</span>
                </ul>
                </div>
            <div className="FaqAbout_text_parking">
            🅿 Парковка
                <ul>
                    <li>Парковка у КПП</li>
                    <span className={"details-back"}>Вход на территорию по кодовому слову
                    ЭйКей (ЭйКей Rostic`s)</span>
                </ul>
            </div>
            
            <div className="FaqAbout_text_Sauna">
                <div className="FaqAbout_sauna_title">
                    <img src={sauna} alt="123" className="emojik" />
                    <span>7 видов саун и бань</span>
                </div>
                <ul>
                    <li>Корейская сауна</li>
                    <li>Сауна с розовой солью Сэнто</li>
                    <li>Травяная сауна</li>
                    <li>"Расул"</li>
                    <li>Финская сауна с пихтой</li>
                    <li>Инфракрасная кабина</li>
                    <li>Сауна с галькой Фурако</li>
                </ul>
            </div>

            <div className="FaqAbout_text_Sauna">
                <div className="FaqAbout_sauna_title">
                    <img src={sauna} alt="123" className="emojik" />
                    <span>Панорамный бассейн</span>
                </div>
                <ul>
                    <li>Крытый бассейн площадью 312 м² - идеальное место для уединения, перезагрузки и отдыха</li>
                </ul>
            </div>

            <div className="FaqAbout_text_Sauna">
                <div className="FaqAbout_sauna_title">
                    <img src={sauna} alt="123" className="emojik" />
                    <span>Эко-парк</span>
                </div>
                <ul>
                    <li>На территории Отеля есть эко-парк, где можно покормить животных</li>
                </ul>
            </div>

            <div className="FaqAbout_text_Sauna">
                <div className="FaqAbout_sauna_title">
                    <img src={sauna} alt="123" className="emojik" />
                    <span>Теннисный корт и многое другое</span>
                </div>
                <ul>
                    <li>Каждый сможет найти активности себе по душе</li>
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
