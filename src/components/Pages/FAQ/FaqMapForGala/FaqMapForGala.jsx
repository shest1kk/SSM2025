import React from "react";
import './FaqMapForGala.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";

const FaqMapForGala = () => {
    return (
        <div className={'FaqMap_wrapper'}>
            <div className="FaqMap-pdf-container">
                <div className="FaqMap-image">
                    <img src="/assets/hotel.jpg" alt="123"></img>
                </div>
            </div>
            {/* <div className={'FaqMap_image'}>
                <div className={"FaqMap_headerText"}>
                    <img className={'FaqMap_headerText_img'} 
                         src='/assets/living.svg'
                         alt='123'/>
                </div>
                <img className={'FaqMap_image_img'}
                     src='/assets/logo.svg'
                     alt="123"/>
            </div> */}
            <div className={'FaqMap_text'}>
                        <Link to='/galadinner'>
                            <Button className={'primary-button'}>Назад</Button>
                        </Link>
            </div>
        </div>
    );
};

export default FaqMapForGala;