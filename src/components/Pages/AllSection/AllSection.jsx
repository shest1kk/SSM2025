import React from "react";
import './AllSection.css';
import Button from '../../Buttons/Button';
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'
const tg = Telegram.WebApp


const AllSection = () => {
    const [showJuly25Modal, setShowJuly25Modal] = React.useState(false);
    const handleClick = () => {
        setShowJuly25Modal(true);
    };
    const closeJuly25Modal = () => {
        setShowJuly25Modal(false);
    };
    return (
        <div className={'categories_wrapper'}>
            <div className="categories_image">
                
                <img
                    className="categories_image_img"
                    src="/assets/logo.png"
                    alt="Логотип ЭйКей"
                />
            </div>
        <div className={'categories_text'}>
            <span>Выбери раздел</span>
            </div>
            <div className={'categories_button'}>
            <Link to="/faq">
            <Button className={'primary-button'}>Общая информация</Button>
            </Link>
            <Link to='/meetup'>
            <Button className={'primary-button'}>Конференция</Button>
            </Link>
            <Link to='/galadinner'>
            <Button className={'primary-button'}>Гала-ужин</Button>
            </Link>
            <Button className={'primary-button'} onClick={handleClick}>25 июля</Button>
            {/* Модалка для 25 июля */}
            {showJuly25Modal && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 9999
                }}
                onClick={closeJuly25Modal}
                >
                    <div style={{
                        background: '#fff',
                        borderRadius: '12px',
                        padding: '20px',
                        boxShadow: '0 2px 16px rgba(0,0,0,0.2)',
                        maxWidth: '90vw',
                        maxHeight: '80vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        fontFamily: 'Montserrat'
                    }}
                    onClick={e => e.stopPropagation()}
                    >
                        <div style={{textAlign: 'center'}}>
                            <div style={{fontSize: '20px', fontWeight: 'bold'}}>8:00 - 10:00 Завтрак</div>
                            <hr style={{width: '100%', border: 'none', borderTop: '1px solid #eee', margin: '8px 0'}} />
                            <div style={{fontSize: '20px', fontWeight: 'bold'}}>10:00 - 13:00 Свободное время</div>
                            <hr style={{width: '100%', border: 'none', borderTop: '1px solid #eee', margin: '8px 0'}} />
                            <div style={{fontSize: '20px', fontWeight: 'bold'}}>13:30 Первый трансфер (30 мест ранний выезд)</div>
                            <hr style={{width: '100%', border: 'none', borderTop: '1px solid #eee', margin: '8px 0'}} />
                            <div style={{fontSize: '20px', fontWeight: 'bold'}}>13:00 - 15:00 Обед</div>
                            <hr style={{width: '100%', border: 'none', borderTop: '1px solid #eee', margin: '8px 0'}} />
                            <div style={{fontSize: '20px', fontWeight: 'bold'}}>до 15:00 - Выезд из отеля.</div>
                            <hr style={{width: '100%', border: 'none', borderTop: '1px solid #eee', margin: '8px 0'}} />
                            <div style={{fontSize: '20px', fontWeight: 'bold'}}>15:30 - Трансфер до офиса. Парковка отеля</div>
                        </div>
                        <button
                            style={{
                                marginTop: '16px',
                                padding: '8px 24px',
                                borderRadius: '8px',
                                border: 'none',
                                background: '#ed1c29',
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                cursor: 'pointer'
                            }}
                            onClick={closeJuly25Modal}
                        >
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
            </div>
        <div className="powered_by">
                <a href="https://t.me/imdbll" target="_blank" rel="noopener noreferrer">
                    powered by @imdbll
                </a>
            </div>
        </div>
    );
};

export default AllSection;