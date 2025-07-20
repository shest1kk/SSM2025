import React, { useState, useRef, useEffect } from "react";
import './FaqMap.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";

const zones = [
    { id: 1, name: "Детская площадка", top: "20%", left: "19%" },
    { id: 2, name: "", description: "", top: "12%", left: "22%" },
    { id: 3, name: "", description: "", top: "16%", left: "30%" },
    { id: 4, name: "", description: "", top: "18%", left: "38%" },
    { id: 5, name: "", description: "", top: "20%", left: "45%" },
    { id: 6, name: "", description: "", top: "22%", left: "53%" },
    { id: 7, name: "", description: "", top: "25%", left: "60%" },
    { id: 8, name: "", description: "", top: "28%", left: "68%" },
    { id: 9, name: "", description: "", top: "32%", left: "75%" },
    { id: 10, name: "", description: "", top: "36%", left: "82%" },
    { id: 11, name: "", description: "", top: "40%", left: "88%" },
    { id: 12, name: "", description: "", top: "45%", left: "92%" },
    { id: 13, name: "", description: "", top: "50%", left: "85%" },
    { id: 14, name: "", description: "", top: "55%", left: "78%" },
    { id: 15, name: "", description: "", top: "60%", left: "70%" },
    { id: 16, name: "", description: "", top: "65%", left: "62%" },
    { id: 17, name: "", description: "", top: "70%", left: "54%" },
    { id: 18, name: "", description: "", top: "75%", left: "46%" },
    { id: 19, name: "", description: "", top: "80%", left: "38%" },
    { id: 20, name: "", description: "", top: "85%", left: "30%" },
    { id: 21, name: "", description: "", top: "90%", left: "22%" },
    { id: 22, name: "", description: "", top: "95%", left: "15%" },
    { id: 23, name: "", description: "", top: "98%", left: "8%" },
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