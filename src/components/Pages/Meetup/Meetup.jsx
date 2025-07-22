import React from "react";
import './Meetup.css';
import Button from '../../Buttons/Button';
import { Link } from "react-router-dom";
const Meetup = () => {
    const handleClick = () => {
        alert('Скоро будет');
    };
    return (
        <div className={'Meetup_wrapper'}>
            <div className={'Meetup_image'}>
        <img className={'Meetup_image_img'}
            src='/assets/logo.png'
            alt="123"
                />
        </div>
        <div className={'Meetup_text'}>
            <span>Конференция</span>
            </div>
        <div className={'Meetup_categories'}>
            <Link to='#'>
            <Button onClick={handleClick} className={'primary-button'}>AGENDA</Button>
            </Link>
            {/* <Link to='speakers'> */}
            {/* <Button onClick={handleClick} className={'primary-button'}>Спикеры</Button> */}
            {/* </Link> */}
            {/* <Link to='discussion'>
            <Button className={'primary-button'}>Панельная дискуссия</Button>
            </Link> */}
            {/* <Link to='conception'> */}
            {/* <Button onClick={handleClick} className={'primary-button'}>Концепция</Button> */}
            {/* </Link> */}
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

export default Meetup;