import React, { useEffect } from "react";
import './StartPage.css';
import { useTelegram } from "../../../hooks/useTelegram";
import Button from "../../Buttons/Button";
import { Link } from "react-router-dom";

import logo from '../../../assets/logo.svg'
import logo_asset_green from '../../../assets/logo_asset_green.svg'
import logo_asset_orange from '../../../assets/logo_asset_orange.svg'

const StartPage = () => {
    const { user, tg } = useTelegram();

    useEffect((tg) => {
                
        // Динамическое добавление скрипта для предварительной загрузки
        const script = document.createElement("script");
        script.src = "/preload.js"; // Убедитесь, что файл находится в публичной директории
        script.defer = true;
        document.body.appendChild(script);

        // Очистка эффекта
        return () => {
            document.body.removeChild(script);
        };
    }, [tg]);

    return (
        <div className="StartPage_wrapper">
            <div className="StartPage_image">
            <div className='StartPage_image_asset_green'>
                <img
                    className="StartPage_image_img_asset_green"
                    src={logo_asset_orange}
                    alt="Логотип ЭйКей"
                />
                </div>
                
                <img
                    className="StartPage_image_img"
                    src={logo}
                    alt="Логотип ЭйКей"
                />
                <div className='StartPage_image_asset_orange'>
                <img
                    className="StartPage_image_img_asset_orange"
                    src={logo_asset_green}
                    alt="Логотип ЭйКей"
                />
                </div>
            </div>
            <div className="StartPage_text_wrapper">
                <div className="StartPage_username">
                    <b>Привет,<br />{user?.first_name}!<br /></b>
                    {/* Спасибо, что были с нами! */}
                </div>
                <div className="StartPage_description">
                    Здесь ты можешь узнать подробную информацию о мероприятии SSM2024
                    <div className='StartPage_image_assets'>
                </div>
                </div>
    
                <Link to="/sections">
                    <Button className={'primary-button'}>
                        Тыкни на меня
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default StartPage;
