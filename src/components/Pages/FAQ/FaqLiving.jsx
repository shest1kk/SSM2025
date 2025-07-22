import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../UI/Button";

const FaqLiving = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isInputFocused, setIsInputFocused] = useState(false);
    const inputRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);
    const [showBackButton, setShowBackButton] = useState(true);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            // Handle search logic here
            console.log("Searching for:", searchQuery);
        }
    };

    // Оставляем только нужную логику sticky, если потребуется
    // Можно добавить useEffect для sticky, если нужно

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