import React from "react";
import './AllSection.css';
import Button from '../../Buttons/Button';
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg'
const tg = Telegram.WebApp


const AllSection = () => {
    const handleClick = () => {
        alert('Скоро будет');
    };
    return (
        <div className={'categories_wrapper'}>
            <div className="categories_image">
                
                <img
                    className="categories_image_img"
                    src={logo}
                    alt="Логотип ЭйКей"
                />
            </div>
        <div className={'categories_text'}>
            <span>Выбери раздел</span>
            </div>
            <div className={'categories_button'}>
            <Link to="/faq">
            <Button className={'primary-button'}>Общая информация</Button>
            </Link>
            <Link to='/galadinner'>
            <Button className={'primary-button'}>Гала-ужин</Button>
            </Link>
            <Link to='/meetup'>
            <Button className={'primary-button'}>Конференция</Button>
            </Link>
            <Link to='/feedback'>
            <Button className={'primary-button'}>Обратная связь</Button>
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

export default AllSection;