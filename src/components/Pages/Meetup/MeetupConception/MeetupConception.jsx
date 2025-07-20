import React from "react";
import './MeetupConception.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";

const MeetupConception = () => {
    return (
        <div className={'MeetupConception_wrapper'}>
        <div className={'MeetupConception_image'}>
        <img className={'MeetupConception_image_img'}
            src='/assets/9.jpg'
            alt="123"
                />
        </div>
        <div className={'MeetupConception_text'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Dignissimos cumque dolorum totam a enim libero? Deserunt dolorum modi, eius quos atque facilis repellendus. 
            Accusantium libero perspiciatis voluptate fugiat soluta sint tempora eos.
        </div>
            <div className={'MeetupConception-button'}>
            <Link to='/meetup'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
            
        </div>
        </div>
    );
};

export default MeetupConception;