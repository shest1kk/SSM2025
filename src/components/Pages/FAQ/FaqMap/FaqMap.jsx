import React, { useState, useRef, useEffect } from "react";
import './FaqMap.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";

const zones = [
  {
    id: 1,
    name: "Ресторан",
    description: "Здесь вы можете позавтракать, пообедать и поужинать.",
    top: "35%",
    left: "45%",
  },
  {
    id: 2,
    name: "Бассейн",
    description: "Открытый бассейн для гостей отеля.",
    top: "60%",
    left: "70%",
  },
  {
    id: 3,
    name: "Ресепшн",
    description: "Здесь вы можете получить любую справочную информацию.",
    top: "20%",
    left: "20%",
  },
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
                          width: 36,
                          height: 36,
                          background: '#82D7E1',
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
                          border: '1px solid #82D7E1',
                          borderRadius: 12,
                          padding: '16px 20px',
                          zIndex: 10,
                          minWidth: 180,
                          boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
                        }}
                      >
                        <div style={{ fontWeight: 'bold', marginBottom: 6 }}>{activeZone.name}</div>
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