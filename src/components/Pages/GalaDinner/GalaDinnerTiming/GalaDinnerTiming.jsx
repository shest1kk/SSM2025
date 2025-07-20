import React from "react";
import './GalaDinnerTiming.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";
const GalaDinnerTiming = () => {
    return (
        <div className={'GalaDinnerTiming_wrapper'}>
        <div className={'GalaDinnerTiming_image'}>
        <img className={'GalaDinnerTiming_image_img'}
            src='/assets/7.jpg'
            alt="123"
                />
        </div>
        <div className={'GalaDinnerTiming_text'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Dignissimos cumque dolorum totam a enim libero? Deserunt dolorum modi, eius quos atque facilis repellendus. 
            Accusantium libero perspiciatis voluptate fugiat soluta sint tempora eos.
        </div>
            <div className={'GalaDinnerTiming-button'}>
            <Link to='/galadinner'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
            
        </div>
        </div>
    );
};

export default GalaDinnerTiming;