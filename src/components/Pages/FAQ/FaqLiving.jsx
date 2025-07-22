import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../UI/Button";

const FaqLiving = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isSticky, setIsSticky] = useState(false);
    const inputRef = useRef(null);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            // Handle search logic here
            console.log("Searching for:", searchQuery);
        }
    };

    const [showBackButton, setShowBackButton] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (inputRef.current && window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (inputRef.current && window.innerWidth < 768) {
                setShowBackButton(false);
            } else {
                setShowBackButton(true);
            }
        };

        handleResize(); // Set initial value
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="faq-living-container">
            <h1>FAQ Жилье</h1>
            <div className={isInputFocused ? 'normal-button' : isSticky ? 'sticky-button' : 'normal-button'}>
                {showBackButton && (
                    <Link to='/faq'>
                        <Button className={'primary-button'}>Назад</Button>
                    </Link>
                )}
            </div>
            <input 
                type="text" 
                placeholder="Поиск по фамилии..." 
                value={searchQuery} 
                onChange={handleInputChange} 
                onKeyPress={handleKeyPress}
                className="search-input"
                ref={inputRef}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
            />
            {/* Add other FAQ content here */}
        </div>
    );
};

export default FaqLiving; 