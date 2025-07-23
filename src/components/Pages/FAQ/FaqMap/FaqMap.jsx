import React, { useState, useRef, useEffect } from "react";
import './FaqMap.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";

const zones = [
    // { name: "123", top: "20%", left: "19%" },
    // { name: "", description: "", top: "12%", left: "22%" },
    // { name: "", description: "", top: "16%", left: "30%" },
    { name: "Спортивные площадки", description: "", top: "13%", left: "34%" },
    { name: 'СПА-центр "Каринтия"', description: "", top: "20%", left: "44%" },
    { name: 'Клуб "Куршевель"', description: "", top: "38%", left: "53%" },
    { name: "Главный вход/Респешн", description: "", top: "40%", left: "57%" },
    { name: 'Конференц-зал "Дунай"', description: "", top: "37%", left: "62%" },
    // { name: "", description: "", top: "32%", left: "75%" },
    // { name: "", description: "", top: "36%", left: "82%" },
    { name: "Шатер", description: "", top: "49%", left: "89%" },
    { name: "Парковка", description: "", top: "64%", left: "92%" },
    // { name: "", description: "", top: "50%", left: "85%" },
    { name: "КПП-1", description: "", top: "82%", left: "82%" },
    // { name: "", description: "", top: "60%", left: "70%" },
    // { name: "", description: "", top: "65%", left: "62%" },
    // { name: "", description: "", top: "70%", left: "54%" },
    // { name: "", description: "", top: "75%", left: "46%" },
    // { name: "", description: "", top: "80%", left: "38%" },
    // { name: "", description: "", top: "85%", left: "30%" },
    // { name: "", description: "", top: "90%", left: "22%" },
    // { name: "", description: "", top: "95%", left: "15%" },
    // { name: "", description: "", top: "98%", left: "8%" },
  ];

const FaqMap = () => {
    const [activeZone, setActiveZone] = useState(null);
    const popupRef = useRef(null);

    useEffect(() => {
      if (!activeZone) return;
      const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
          setActiveZone(null);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [activeZone]);

    return (
        <div className={'FaqMap_wrapper'}>
            <div className="FaqMap-pdf-container">
                <div className="FaqMap-image" style={{ position: 'relative' }}>
                    <img src="/assets/map-summer.webp" alt="123" style={{ display: 'block' }} />
                    {zones.map(zone => (
                      <button
                        key={zone.id}
                        className="map-zone-btn"
                        style={{
                          position: 'absolute',
                          top: zone.top,
                          left: zone.left,
                          transform: 'translate(-50%, -50%)',
                          zIndex: 2,
                          borderRadius: '50%',
                          width: '12px',
                          height: '12px',
                          // minWidth: 20,
                          // minHeight: 20,
                          // maxWidth: 40,
                          // maxHeight: 40,
                          fontSize: '18px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: 0,
                          background: '#ed1c29',
                          border: '2px solid #fff',
                          cursor: 'pointer',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveZone(zone);
                        }}
                        title={zone.name}
                      >
                        {zone.id}
                      </button>
                    ))}
                    {activeZone && (
                      <div
                        ref={popupRef}
                        className="zone-popup"
                        style={{
                          position: 'absolute',
                          top: activeZone.top,
                          left: activeZone.left,
                          transform: 'translate(-50%, -120%)',
                          background: '#fff',
                          border: '1px solid #ed1c29',
                          borderRadius: 12,
                          padding: '4px 8px',
                          zIndex: 10,
                          // minWidth: 180,
                          boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
                        }}
                      >
                        <div style={{ fontWeight: '500', fontFamily: "Montserrat", fontSize: "8px" }}>{activeZone.name}</div>
                        <div>{activeZone.description}</div>
                      </div>
                    )}
                </div>
            </div>
            <div className={'FaqMap_text'}>
                        <Link to='/faq'>
                            <Button className={'primary-button'}>Назад</Button>
                        </Link>
            </div>
        </div>
    );
};

export default FaqMap;