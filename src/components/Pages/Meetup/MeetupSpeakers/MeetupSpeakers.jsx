import React from "react";
import './MeetupSpeakers.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";

const MeetupSpeakers = () => {
    return (
        <div className={'MeetupSpeakers_wrapper'}>
        <div className={'MeetupSpeakers_image'}>
        <img className={'MeetupSpeakers_image_img'}
            src='/assets/10.jpg'
            alt="123"
                />
        </div>
        <div className={'MeetupSpeakers_text'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Dignissimos cumque dolorum totam a enim libero? Deserunt dolorum modi, eius quos atque facilis repellendus. 
            Accusantium libero perspiciatis voluptate fugiat soluta sint tempora eos.
        </div>
            <div className={'MeetupSpeakers-button'}>
            <Link to='/meetup'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
            
        </div>
        </div>
    );
};

export default MeetupSpeakers;