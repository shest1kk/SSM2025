import React from "react";
import './GalaDinnerConception.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";
const GalaDinnerConception = () => {
    return (
        <div className={'GalaDinnerConception_wrapper'}>
            <div className={'GalaDinnerConception_image'}>
            <img className={'GalaDinnerConception_image_img'}
            src='/assets/5.jpg'
            alt="123"
                />
        </div>
        <div className={'GalaDinnerConception_text'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Dignissimos cumque dolorum totam a enim libero? Deserunt dolorum modi, eius quos atque facilis repellendus. 
            Accusantium libero perspiciatis voluptate fugiat soluta sint tempora eos.
        </div>
            <div className={'GalaDinnerConception-button'}>
            <Link to='/galadinner'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
            
        </div>
        </div>
    );
};

export default GalaDinnerConception;