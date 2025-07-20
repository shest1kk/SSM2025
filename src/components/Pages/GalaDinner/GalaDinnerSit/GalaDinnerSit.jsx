import React, { useState, useEffect, useRef } from "react";
import './GalaDinnerSit.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa'; // Импортируем иконку поиска

const GalaDinnerSit = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [highlightedRow, setHighlightedRow] = useState(null); // Изменяем состояние на хранение ID строки
    const bottomSpacerRef = useRef(null);
    const [isSticky, setIsSticky] = useState(true);
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const [showBackButton, setShowBackButton] = useState(true); // Состояние для видимости кнопки "Назад"
    const inputRef = useRef(null); // Ref для поля ввода

    const guestData = [
        { id: 1, names: ["Сморода Роман", "Кушкин Алексей", "Столярова Софья", "Прокофьева Виктория", "Сисеналиева Сауле", "Евдокимов Илья", "Вишняков Антон", "Михалёв Ярослав", "Романов Роман", "Полянская Светлана"] },
        { id: 2, names: ["Григорян Наталья", "Шарова Кристина", "Ильин Артём", "Пилосян Меликсет", "Калинина Лилия", "Трифонова Екатерина", "Смельцова Ксения", "Танделова Диана", "Синёва Евгения", "Джафарова Камила", "Мохортов Игорь"] },
        { id: 3, names: ["Семенин Михаил", "Гулямов Фархад", "Жабинский Михаил", "Мельникова Татьяна", "Языкова Елена", "Лазутина Ирина", "Подрезов Никита", "Домовитова Елизавета", "Волкова Елена", "Сорокин Юрий", "Тимонченко Юлия"] },
        { id: 4, names: ["Горельков Александр", "Дударева Оксана", "Пряхина Надежда", "Артёмова Мария", "Молдованова Олеся", "Лукина Замира", "Васенева Катрина", "Фионина Ольга", "Мохова Галина", "Масленникова Алина"] },
        { id: 5, names: ["Виноградова Валентина", "Заботкина Виктория", "Тункина Елена", "Чистяков Даниил", "Маклакова Олеся", "Кокорская Ирина", "Маслакова Инна", "Баранов Иван", "Корнилова Екатерина", "Круглова Юлия"] },
        { id: 6, names: ["Владыкина Диана", "Елсаков Алексей", "Михеева Елена", "Горбунова Ольга", "Лапшин Артём", "Гусейнов Рауф", "Красавина Виктория", "Михеева Анна", "Лукина Александра", "Николаева Светлана"] },
        { id: 7, names: ["Болдырева Алия", "Нурмуханов Аят", "Нурмуханова Айгуль", "Лепская Екатерина", "Войнов Роман", "Алиев Рифгат", "Кабиева Диана", "Гужвина Наталья", "Королёва Ольга", "Уханова Оксана"] },
        { id: 8, names: ["Тулина Мария", "Ким Мария", "Палкина Полина", "Кудинова Любовь", "Баранова Анастасия", "Баткаев Алмаз", "Мезей Алёна", "Сидорова Анастасия", "Костерина Дарья", "Богданов Максим"]},
        { id: 9, names: ["Чижов Алексей", "Низамутдинова Нелли", "Ткачёва Светлана", "Сушко Павел", "Кравченко Ксения", "Виноградова Екатерина", "Фёдорова Татьяна", "Кудряшов Дмитрий", "Кондраков Кирилл", "Мальцева Ирина"] },
        { id: 10, names: ["Павлов Андрей", "Попов Илья", "Мусин Ринат", "Кузин Михаил", "Леунин Александр", "Ситцов Евгений", "Пахарев Егор", "Лаптев Евгений", "Забежайлов Максим"] },
        { id: 11, names: ["Антипанова Серафима", "Хромов Роман", "Демьянова Анастасия", "Корнеева Елена", "Еремин Станислав", "Савельева Анна", "Юсипов Дмитрий", "Василенко Максим", "Муза Юрий", "Ахметвалеев Артур"] },
        { id: 12, names: ["Кававина Любовь", "Лебедев Дмитрий", "Бабушкин Михаил", "Анисимова Марина", "Андриянова Анастасия", "Павлова Анастасия", "Леваков Александр", "Мильниченко Анастасия", "Прудникова Светлана", "Ахмедов Роман"] },
        { id: 13, names: ["Егоров Александр", "Костенко Никита", "Мишкевич Эдуард", "Мокрова Анастасия", "Дмитриева Лариса", "Тугузов Роман", "Павлюк Сильвия", "Юсупова Кристина", "Денисова Анна", "Познаева Лилит"] },
        { id: 14, names: ["Дёмин Владислав", "Салихова Анна", "Подлегаева Дарья", "Шичкина Екатерина", "Власова Анна", "Садовская Екатерина", "Копылов Максим", "Бурыкина Анастасия", "Васина Анастасия", "Васина Елизавета"] },
        { id: 15, names: ["Шелудякова Виктория", "Трошкина Екатерина", "Юдин Сергей", "Ярмухамедов Тимур", "Шатилов Николай", "Маркелова Арина", "Власов Иван", "Щукин Александр", "Дауткулова Майя", "Железова Людмила"] },
        { id: 16, names: ["Митина Елена", "Павлова Дарья", "Бабина Светлана", "Максакова Ольга", "Смирнова Анна", "Красавина Галина", "Гаврилова Светлана", "Базина Ольга", "Зайцева Юлия"] },
        { id: 17, names: ["Алышев Максим", "Герасимов Владислав", "Романов Иван", "Доброхотов Леонид", "Матвеев Евгений", "Куликов Максим", "Захаревич Александр", "Кунаков Иван", "Касаткина Екатерина", "Мясникова Елена"] },
        { id: 18, names: ["Вилонина Юлия", "Чернышова Елена", "Селезнёва Екатерина", "Шакирова Анна", "Пирогова Нина", "Канаева Мария", "Белова Ирина", "Пугачёва Алла", "Галузина Тамара", "Уткина Анна"] },
            ];


     const scrollToRow = (row) => {
        if (row) {
            const rowTop = row.offsetTop;
            const rowHeight = row.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollToPosition = rowTop + rowHeight / 2 - windowHeight / 2;

            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });

            setTimeout(() => {
                setShowBackButton(true); // Показываем кнопку "Назад" с задержкой
            }, 3500); // Задержка в 1000 миллисекунд (1 секунда)
        }
    };

    const handleSearch = () => {
        const rows = document.querySelectorAll('tbody tr');
        let found = false; // Флаг для проверки наличия результатов поиска

        rows.forEach(row => {
            const names = row.cells[1].querySelectorAll('div');

            names.forEach(nameDiv => {
                const name = nameDiv.innerText;
                if (name.toLowerCase().includes(searchQuery.toLowerCase())) {
                    setHighlightedRow(row.getAttribute('data-id')); // Устанавливаем ID строки для подсветки
                    setTimeout(() => {
                        setHighlightedRow(null); // Через 3 секунды сбрасываем подсветку
                    }, 3000);
                    scrollToRow(row);
                    found = true;
                }
            });
        });

        setSearchQuery('');
        inputRef.current.blur(); // Скрыть клавиатуру

        setShowBackButton(false); // Скрываем кнопку "Назад" при начале поиска
        if (!found) {
            setShowBackButton(true); // Показываем кнопку "Назад", если результаты поиска не найдены
        }
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleScroll = () => {
        const rows = document.querySelectorAll('tbody tr');
        const seventhRow = rows[1];

        if (seventhRow) {
            const seventhRowTop = seventhRow.offsetTop;
            const windowHeight = window.innerHeight;
            const scrolled = window.scrollY;

            if (scrolled > seventhRowTop) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        }

        const bottomSpacerTop = bottomSpacerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (bottomSpacerTop <= windowHeight) {
            setIsSticky(false);
        } else {
            setIsSticky(true);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={'GalaDinnerSit_wrapper'}>
            {/* <div className={'GalaDinnerSit_image'}>
                <div className={"GalaDinnerSit_headerText"}>
                    <img className={'GalaDinnerSit_headerText_img'} 
                         src='/assets/living.svg'
                         alt='123'/>
                </div>
                <img className={'GalaDinnerSit_image_img'}
                     src='/assets/logo.svg'
                     alt="123"/>
            </div> */}
            <div className={'GalaDinnerSit_text'}>
                <div className="search-container">
                    <div className="search-input-container">
                        <input 
                            type="text" 
                            placeholder="Поиск по фамилии..." 
                            value={searchQuery} 
                            onChange={handleInputChange} 
                            onKeyPress={handleKeyPress}
                            className="search-input"
                            ref={inputRef} // Присваиваем ref
                        />
                        <FaSearch className="search-icon" onClick={handleSearch} />
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Стол</th><th>Гости</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guestData.map((guest) => (
                            <tr key={guest.id} data-id={guest.id} className={highlightedRow == guest.id ? 'highlighted' : ''}>
                                <td>{guest.id}</td>
                                <td>
                                    {guest.names.map((name, idx) => (
                                        <div key={idx}>{name}</div>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className={`scroll-to-top ${showScrollToTop ? 'show' : ''}`} onClick={scrollToTop}>
                    <img src="/assets/arrow-up.svg" alt="Scroll to Top" />
                </div>
                <div className={isSticky ? 'sticky-button' : 'normal-button'}>
                    {showBackButton && (
                        <Link to='/galadinner'>
                            <Button className={'primary-button'}>Назад</Button>
                        </Link>
                    )}
                </div>
                <div className="bottom-spacer" ref={bottomSpacerRef}></div>
            </div>
        </div>
    );
};

export default GalaDinnerSit;