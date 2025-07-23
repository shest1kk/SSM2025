import React from "react";
import './FAQ.css';
import Button from '../../Buttons/Button';
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'
const FAQ = () => {
    const handleClick = () => {
        alert('Скоро будет');
    };
    return (
        <div className={'FAQ_wrapper'}>
        <div className={'FAQ_image'}>
        <img className={'Faq_image_img'}
            src="/assets/logo.png"
            alt="123"
                />
        </div>
        <div className={'FAQ_text'}>
            <span>Общая информация</span>
            </div>
        <div className={'FAQ_categories'}>
            <Link to='about'>
            <Button className={'primary-button'}>Что входит в проживание</Button>
            </Link>
            <Link to='living'>
            <Button className={'primary-button'}>Проживание</Button>
            </Link>
            {/* <Link to='activnosti'>
            <Button className={'primary-button'}>Активности</Button>
            </Link> */}
            <Link to='map'>
            <Button className={'primary-button'}>Территория отеля</Button>
            </Link>

            <Link to='/sections'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
        
        </div>
        <div className="powered_by">
                <a href="https://t.me/imdbll" target="_blank" rel="noopener noreferrer">
                    powered by @imdbll
                </a>
            </div>
        </div> 
    );
};

export default FAQ;