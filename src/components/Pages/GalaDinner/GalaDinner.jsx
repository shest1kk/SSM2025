import React from "react";
import './GalaDinner.css';
import Button from '../../Buttons/Button';
import { Link } from "react-router-dom";
const GalaDinner = () => {
    const handleClick = () => {
        alert('Скоро будет');
    };
    const whereClick = () => {
        alert('Речной павильон\n(на карте номер 50)');
    };
    const timingClick = () => {
        alert('Встреча гостей с 19:00\nСтарт гала-ужина в 19:30');
    };
    return (
        <div className={'GalaDinner_wrapper'}>
            <div className={'GalaDinner_image'}>
            <img className={'GalaDinner_image_img'}
            src='/assets/logo.svg'
            alt="123"
                />
            </div>
        <div className={'GalaDinner_text'}>
            <span>Гала-ужин</span>
        </div>
        <div className={'GalaDinner_categories'}>
            <Link to="dresscode">
            <Button className={'primary-button'}>Дресс-код</Button>
            </Link>
            {/* <Link to='timing'> */}
            <Button onClick={timingClick}className={'primary-button'}>Тайминги</Button>
            {/* </Link> */}
            <Link to='/gala/sit'>
            <Button className={'primary-button'}>Рассадка</Button>
            </Link>
            <Link to='/gala/map'>
            <Button onClick={whereClick} className={'primary-button'}>Где находится</Button>
            </Link>
            <Link to='/sections'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
        </div>
        </div>
    );
};

export default GalaDinner;