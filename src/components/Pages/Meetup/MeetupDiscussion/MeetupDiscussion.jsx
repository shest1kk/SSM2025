// import React from "react";
// import './MeetupDiscussion.css';
// import Button from '../../../Buttons/Button';
// import { Link } from "react-router-dom";

// const MeetupDiscussion = () => {
//     return (
//         <div className={'MeetupDiscussion_wrapper'}>
//         <div className={'MeetupDiscussion_image'}>
//         <img className={'MeetupDiscussion_image_img'}
//             src='/assets/11.jpg'
//             alt="123"
//                 />
//         </div>
//         <div className={'MeetupDiscussion_text'}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
//             Dignissimos cumque dolorum totam a enim libero? Deserunt dolorum modi, eius quos atque facilis repellendus. 
//             Accusantium libero perspiciatis voluptate fugiat soluta sint tempora eos.
//         </div>
//             <div className={'MeetupDiscussion-button'}>
//             <Link to='/meetup'>
//             <Button className={'primary-button'}>Назад</Button>
//             </Link>
            
//         </div>
//         </div>
//     );
// };

// export default MeetupDiscussion;

import React from "react";
import './MeetupDiscussion.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";

// Функция для копирования текста и вывода alert через Telegram WebApp

const MeetupDiscussion = () => {
  return (
    <div className={'Feedback_wrapper'}>
      <div className={'Feedback_textt'}>
        <span>Панельная дискуссия</span>
      </div>
      <div className={'Feedback_categories'}>
      {/* <a target='_blank' href="https://t.me/feyhoa779">
          <Button className={'primary-button'}>Телеграм</Button>
        </a>
        <a href="https://wa.me/79969184707">
          <Button className={'primary-button'}>WhatsApp</Button>
        </a>
        <Button className={'primary-button'} onClick={handleCopyText}>Телефон</Button> */}
        <a href="https://forms.yandex.ru/cloud/668ff7fc2530c20ae9c4822f/">
          <Button className={'primary-button'}>Задать вопрос</Button>
        </a>
        <Link to='/meetup'>
          <Button className={'primary-button'}>Назад</Button>
        </Link>
      </div>
    </div>
  );
};

export default MeetupDiscussion;
