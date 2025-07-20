import React from "react";
import './GalaDinnerDresscode.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";
const GalaDinnerDresscode = () => {
    return (
        <div className={'GalaDinnerDresscode_wrapper'}>
        <div className={'GalaDinnerDresscode_image'}>
                <div className={"GalaDinnerDresscode_headerText"}>
                    <img classname={'GalaDinnerDresscode_headerText_img'} 
                    src='/assets/dresscode.svg'
                    alt='123'/>
                </div>
                <img className={'GalaDinnerDresscode_image_img'}
                    src='/assets/logo.svg'
                    alt="123"
                />
            </div>
            <div className={'GalaDinnerDresscode_text'}>
                <div className={"GalaDinnerDresscode_text_wrapper"}>
                <div className={"GalaDinnerDresscode_text_girls"}>
                👩🏼Для девушек отлично подойдут:
                <ul>
                    <li>белые платья/комбезы</li>
                    <li>белые рубашки/футболки</li>
                    <li>белые блузки/топ</li>
                    <li>белые брюки/юбки</li>
                    <li>белые шорты/джинсы</li>
                </ul>
                </div>
                <div className={"GalaDinnerDresscode_text_mans"}>
                👨🏼Мужчины будут прекрасно смотреться в:
                <ul>
                    <li>белые рубашки/футболки/кофты</li>
                    <li>белые шорты/брюки/джинсы</li>
                </ul>
            </div>
            <div className={"GalaDinnerDresscode_text_no"}>
            ❌Лучше воздержаться
                <ul>
                    <li>от принтов на белой одежде</li>
                    <span className={'details'}>всё-таки чистый белый цвет выглядит роскошно🥰</span>
                </ul>
            </div>
            <div className={"GalaDinnerDresscode_text_yes"}>
            ✅Допускаются любого цвета:
                <ul>
                    <li>аксессуары, обувь, ремни, сумки</li>
                    <span className={'details'}>в случае, если они будут не белыми, а цветными, это не будет нарушением дресскода🥂</span>
                </ul>
            </div>
                        <div className={'GalaDinnerDresscode-button'}>
                <Link to='/galadinner'>
                    <Button className={'primary-button'}>Назад</Button>
                </Link>
            </div>
                </div>
            </div>
        </div>
    );
};

export default GalaDinnerDresscode;