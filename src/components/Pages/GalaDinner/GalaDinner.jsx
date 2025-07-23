import React, { useState } from "react";
import './GalaDinner.css';
import Button from '../../Buttons/Button';
import { Link } from "react-router-dom";
const GalaDinner = () => {
    const [showDresscodeModal, setShowDresscodeModal] = useState(false);
    const [showTimingModal, setShowTimingModal] = useState(false);
    const [showSeatingModal, setShowSeatingModal] = useState(false);

    const handleDresscodeClick = () => {
        setShowDresscodeModal(true);
    };
    const handleTimingClick = () => {
        setShowTimingModal(true);
    };
    const handleSeatingClick = () => {
        setShowSeatingModal(true);
    };
    const closeDresscodeModal = () => {
        setShowDresscodeModal(false);
    };
    const closeTimingModal = () => {
        setShowTimingModal(false);
    };
    const closeSeatingModal = () => {
        setShowSeatingModal(false);
    };

    return (
        <div className={'GalaDinner_wrapper'}>
            <div className={'GalaDinner_image'}>
            <img className={'GalaDinner_image_img'}
            src='/assets/logo.png'
            alt="123"
                />
            </div>
        <div className={'GalaDinner_text'}>
            <span>Гала-ужин</span>
        </div>
        <div className={'GalaDinner_categories'}>

            <Button onClick={handleDresscodeClick} className={'primary-button'}>Дресс-код</Button>

            {/* Модалка с картинкой для дресс-кода */}
            {showDresscodeModal && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 9999
                }}
                onClick={closeDresscodeModal}
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
                        alignItems: 'center'
                    }}
                    onClick={e => e.stopPropagation()}
                    >
                        <img
                            src="/assets/dresscode.jpg"
                            alt="Дресс-код"
                            style={{maxWidth: '80vw', maxHeight: '60vh', borderRadius: '8px'}}
                        />
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
                            onClick={closeDresscodeModal}
                        >
                            Закрыть
                        </button>
                    </div>
                </div>
            )}

            <Button onClick={handleTimingClick} className={'primary-button'}>Тайминги</Button>
            {/* Модалка с картинкой для таймингов */}
            {showTimingModal && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 9999
                }}
                onClick={closeTimingModal}
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
                            <div style={{fontSize: '20px', fontWeight: 'bold'}}>19:30 Welcome</div>
                            <hr style={{width: '100%', border: 'none', borderTop: '1px solid #eee', margin: '8px 0'}} />
                            <div style={{fontSize: '20px', fontWeight: 'bold'}}>20:00 Начало</div>
                            <hr style={{width: '100%', border: 'none', borderTop: '1px solid #eee', margin: '8px 0'}} />
                            <div style={{fontSize: '20px', fontWeight: 'bold'}}>23:30 Переход в клуб "Куршавель"</div>
                            <hr style={{width: '100%', border: 'none', borderTop: '1px solid #eee', margin: '8px 0'}} />
                            <div style={{fontSize: '20px', fontWeight: 'bold'}}>04:00 Конец</div>
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
                            onClick={closeTimingModal}
                        >
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
            <Button onClick={handleSeatingClick} className={'primary-button'}>Рассадка</Button>
            {/* Модалка с картинкой для рассадки */}
            {showSeatingModal && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 9999
                }}
                onClick={closeSeatingModal}
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
                        alignItems: 'center'
                    }}
                    onClick={e => e.stopPropagation()}
                    >
                        <img
                            src="/assets/gala-dinner-seat.png"
                            alt="Рассадка"
                            style={{maxWidth: '80vw', maxHeight: '60vh', borderRadius: '8px'}}
                        />
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
                            onClick={closeSeatingModal}
                        >
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
            <Link to='/sections'>
            <Button className={'primary-button'}>Назад</Button>
            </Link>
            
        </div>
        <div className="powered_by">
                <a href="https://t.me/imdbll" target="_blank" rel="noopener noreferrer">
                    powered by @imdbll
                </a>
            </div>
        </div>
    );
};

export default GalaDinner;