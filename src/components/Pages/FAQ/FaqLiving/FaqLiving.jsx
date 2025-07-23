import React, { useState, useEffect, useRef } from "react";
import './FaqLiving.css';
import Button from '../../../Buttons/Button';
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa'; // Импортируем иконку поиска
import logo from '../../../../assets/logo.png'

const FaqLiving = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [highlightedRow, setHighlightedRow] = useState(null); // Изменяем состояние на хранение ID строки
    const bottomSpacerRef = useRef(null);
    const [isSticky, setIsSticky] = useState(true);
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const [showBackButton, setShowBackButton] = useState(true); // Состояние для видимости кнопки "Назад"
    const inputRef = useRef(null); // Ref для поля ввода
    const [selectedDate, setSelectedDate] = useState(null); // null — ничего не выбрано

    // Формируем guestData автоматически, по два человека в каждом номере
    const people = {
        1: "Алышев Максим",
        2: "Герасимов Владислав",
        3: "Трифонова Екатерина",
        4: "Мальцева Ирина",
        5: "Артемова Мария",
        6: "Молдаванова Олеся",
        7: "Афанасьева Любовь",
        8: "Шакирова Анна",
        9: "Мусин Ринат",
        10: "Сморода Роман",
        11: "Белова Алена",
        12: "Лазутина Ирина",
        13: "Белова Ирина",
        14: "Галузина Тамара",
        15: "Богданов Максим",
        16: "Баткаев Алмаз",
        17: "Болдырева Алия",
        18: "Кабиева Диана",
        19: "Бурыкина Анастасия",
        20: "Садовская Екатерина",
        21: "Василенко Максим",
        22: "Муза Юрий",
        23: "Виноградова Екатерина",
        24: "Григорян Наталья",
        25: "Вишняков Антон",
        26: "Евдокимов Илья",
        27: "Власов Иван",
        28: "Тугузов Роман",
        29: "Гаврилова Светлана",
        30: "Ишмухаметова Минсылу",
        31: "Головкина Елена",
        32: "Червен Анна",
        34: "Дёмин Владислав",
        35: "Мишкевич Эдуард",
        36: "Демьянова Анастасия",
        37: "Яхина Анна",
        38: "Джафарова Камила",
        39: "Танделова Диана",
        40: "Волкова Галина",
        41: "Волкова Елена",
        42: "Доброхотов Леонид",
        43: "Романов Иван",
        44: "Дударева Оксана",
        45: "Пескова Елизавета",
        46: "Горбунова Ольга",
        47: "Булатова Мадина",
        48: "Егоров Александр",
        49: "Горельков Александр",
        50: "Елсаков Алексей",
        51: "Лапшин Артём",
        52: "Климова Ольга",
        53: "Фербер Маргарита",
        54: "Кокорская Ирина",
        55: "Прокофьева Виктория",
        56: "Копылова Екатерина",
        57: "Шичкина Екатерина",
        58: "Кораблева Виктория",
        59: "Николенко Карина",
        60: "Корнеева Елена",
        61: "Синёва Евгения",
        62: "Корнилова Екатерина",
        63: "Круглова Юлия",
        64: "Королева Ольга",
        65: "Новосельцева Дарья",
        66: "Костенко Никита",
        67: "Леваков Александр",
        68: "Костерина Дарья",
        69: "Сидорова Анастасия",
        70: "Кудинова Любовь",
        71: "Куломзина Полина",
        72: "Кузнецова Полина",
        73: "Столярова Софья",
        74: "Куликов Максим",
        75: "Матвеев Евгений",
        76: "Лаптев Евгений",
        77: "Ситцов Евгений",
        78: "Кузин Михаил",
        79: "Алешин Сергей",
        80: "Левченко Владимир",
        81: "Медведев Александр",
        82: "Лекарева Мария",
        83: "Шарова Кристина",
        84: "Леунин Александр",
        85: "Попов Илья",
        86: "Ложкина Екатерина",
        87: "Медведева Эльвира",
        88: "Малявкина Наталия",
        89: "Магомедова Джаният",
        90: "Мансуров Богдан",
        91: "Пилосян Меликсет",
        92: "Тулина Мария",
        93: "Мезей Алёна",
        94: "Маслакова Инна",
        95: "Москаленко Наталья",
        96: "Митина Елена",
        97: "Бабина Светлана",
        98: "Фионина Ольга",
        99: "Мохова Галина",
        100: "Минухина Евгения",
        101: 'Парчина Анастасия',
        102: 'Мокрова Анастасия',
        103: 'Подлегаева Дарья',
        104: 'Назарова Юлия',
        105: 'Власова Анна',
        106: 'Нилова Наталья',
        107: 'Котлярова Анжелика',
        108: 'Орлова Оксана',
        109: 'Железова Людмила',
        110: 'Павлюк Сильвия',
        111: 'Трошкина Екатерина',
        112: 'Селезнева Екатерина',
        113: 'Чернышова Елена',
        114: 'Смирнова Анна',
        115: 'Сипягина Ирина',
        116: 'Суслова Ружена',
        117: 'Уткина Анна',
        118: 'Урусова Клавдия',
        119: 'Пугачёва Алла',
        120: 'Хакимов Фаридун',
        121: 'Кунаков Иван',
        122: 'Юсупова Кристина',
        123: 'Ярославцева Анна',
        124: 'Павлов Андрей',
        125: 'Пахарев Егор',
        126: 'Никита Фотограф',
        127: 'Кирилл Видеограф',
        128: 'Жабинский Михаил',
        129: 'Ануфриев Евгений',
        130: 'Ахмедов Роман',
        131: 'Ципин Евгений',
        132: 'Шатилов Николай',
        133: 'Ярмухамедов Тимур',
        134: 'Лебедев Дмитрий',
        135: 'Очкасов Николай',
        136: 'Коновалова Юлия',
        137: 'Миханова Людмила',
        138: 'Хромов Роман',
        139: 'Юдин Сергей',
        140: 'Мартина Елена',
        141: 'Красавина Екатерина',
        142: 'Анисимова Марина',
        143: 'Каплиева Марина',
        144: 'Забежайлов Максим',
        145: 'Захаревич Александр',
        146: 'Гулямов Фархад',
        147: 'Щукин Александр',
        148: 'Павлова Дарья',
        149: 'Денисова Анна',
        150: 'Алексеев Николай',
        151: 'Очилов Нумон',
        152: 'Семенин Михаил',
        153: 'Коненков Алексей',
        154: 'Тункина Елена',
        155: 'Салманова Диана',
        156: 'Гуляев Сергей',
        157: 'Гусейнов Рауф',
        158: 'Гужвина Наталья',
        159: 'Малышева Анна',
        160: 'Михайлина Кристина',
        161: 'Галимова Резеда',
        162: 'Зайцева Юлия',
        163: 'Галицкова Светалана',
        164: 'Калинина Лилия',
        165: 'Мукашева Лилия',
        166: 'Заботкина Виктория',
        167: 'Виноградова Валентина',
        168: 'Мясникова Елена',
        169: 'Касаткина Екатерина',
        170: 'Романова Анастасия',
        171: 'Красавина Виктория',
        172: 'Юсипов Дмитрий',
        173: 'Еремин Станислав',
        174: 'Канаева Мария',
        175: 'Пирогова Нина',
        176: 'Антипанова Серафима',
        177: 'Владыкина Диана',
        178: 'Маклакова Олеся',
        179: 'Михеева Елена',
        180: 'Воронцова Дарья',
        181: 'Глушко Дарья',
    };

    const people23 = {
        1: "Артемова Мария",
        2: "Молдаванова Олеся",
        3: "Белова Алена",
        4: "---------",
        5: "Болдырева Алия",
        6: "Кабиева Диана",
        7: "Бурыкина Анастасия",
        8: "Садовская Екатерина",
        9: "Дёмин Владислав",
        10: "Мишкевич Эдуард",
        11: "Волкова Галина",
        12: "Волкова Елена",
        13: "Дударева Оксана",
        14: "Пескова Елизавета",
        15: "Горбунова Ольга",
        16: "Владыкина Диана",
        17: "Егоров Александр",
        18: "Горельков Александр",
        19: "Елсаков Алексей",
        20: "Лапшин Артём",
        21: "Климова Ольга",
        22: "Фербер Маргарита",
        23: "Кокорская Ирина",
        24: "Прокофьева Виктория",
        25: "Копылова Екатерина",
        26: "Шичкина Екатерина",
        27: "Корнилова Екатерина",
        28: "Круглова Юлия",
        29: "Костенко Никита",
        30: "Леваков Александр",
        31: "Тункина Елена",
        32: "Столярова Софья",
        33: "Левченко Владимир",
        34: "Медведев Александр",
        35: "Леунин Александр",
        36: "Попов Илья",
        37: "Маслакова Инна",
        38: "Москаленко Наталья",
        39: "Минухина Евгения",
        40: "Парчина Анастасия",
        41: "Мокрова Анастасия",
        42: "Подлегаева Дарья",
        43: "Назарова Юлия",
        44: "Глушко Дарья",
        45: "Нилова Наталья",
        46: "Котлярова Анжелика",
        47: "Смирнова Анна",
        48: "Сипягина Ирина",
        49: "Канаева Мария",
        50: "Пирогова Нина",
        51: "Лебедев Дмитрий",
        52: "Очкасов Николай",
        53: "Мартина Елена",
        54: "Красавина Екатерина",
        55: "Анисимова Марина",
        56: "Каплиева Марина",
        57: "Семенин Михаил",
        58: "Мусин Ринат",
        59: "Коновалова Юлия",
        60: "Гужвина Наталья",
        61: "Заботкина Виктория",
        62: "Виноградова Валентина",
        63: "Романова Анастасия",
        64: "Красавина Виктория",
        65: "Маклакова Олеся",
        66: "Михеева Елена",
        67: "Сидорова Анастасия",
        68: "Костерина Дарья",
        69: "Кузин Михаил",
        70: "Ситцов Евгений",
        71: "Матвеев Евгений",
        72: "Герасимов Владислав",
        73: "Ануфриев Евгений",
        74: "Сморода Роман",
        75: "Салманова Диана",
        78: "Тулина Мария",
        79: "Гусейнов Рауф",
        80: "Коненков Алексей",
        81: "Мукашева Лилия",
        82: "Мальцева Ирина",

    };

    // Формируем guestData: каждый номер (id) содержит двух гостей (names)
    const guestData = [];
    const peopleKeys = Object.keys(people).map(Number).sort((a, b) => a - b);
    for (let i = 0; i < peopleKeys.length; i += 2) {
        const id = (i / 2) + 1;
        const name1 = people[peopleKeys[i]] || '';
        const name2 = people[peopleKeys[i + 1]] || '';
        guestData.push({ id, names: [name1, name2] });
    }

    // Формируем guests23 аналогично guestData
    const guests23 = [];
    const people23Keys = Object.keys(people23).map(Number).sort((a, b) => a - b);
    for (let i = 0; i < people23Keys.length; i += 2) {
        const id = (i / 2) + 1;
        const name1 = people23[people23Keys[i]] || '';
        const name2 = people23[people23Keys[i + 1]] || '';
        guests23.push({ id, names: [name1, name2] });
    }

    const guests24 = guestData;
    const guestsToShow = selectedDate === '23' ? guests23 : selectedDate === '24' ? guests24 : [];


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
            // Получаем текст из обеих ячеек
            const name1 = row.cells[0]?.innerText || '';
            const name2 = row.cells[1]?.innerText || '';
            if (
                name1.toLowerCase().includes(searchQuery.toLowerCase()) ||
                name2.toLowerCase().includes(searchQuery.toLowerCase())
            ) {
                setHighlightedRow(row.getAttribute('data-id')); // Устанавливаем ID строки для подсветки
                setTimeout(() => {
                    setHighlightedRow(null); // Через 3 секунды сбрасываем подсветку
                }, 3000);
                scrollToRow(row);
                found = true;
            }
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
        const seventhRow = rows[6];

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
        <div className={'FaqLiving_wrapper'}>
            <div className={'FaqLiving_image'}>
                <div className={"FaqLiving_headerText"}>
                    <img className={'FaqLiving_headerText_img'} 
                         src='/assets/living.svg'
                         alt='123'/>
                </div>
                <img className={'FaqLiving_image_img'}
                     src="/assets/logo.png"
                     alt="123"/>
            </div>
            <div className={'FaqLiving_text'}>
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
                {/* Блок с датами */}
                <div className="FaqLiving_date-tabs">
                    <button
                        className={`date-tab-btn${selectedDate === '23' ? ' active' : ''}`}
                        onClick={() => setSelectedDate('23')}
                    >
                        23 июля
                    </button>
                    <button
                        className={`date-tab-btn${selectedDate === '24' ? ' active' : ''}`}
                        onClick={() => setSelectedDate('24')}
                    >
                        24 июля
                    </button>
                </div>
                {selectedDate && (
                    <table>
                        <thead>
                            <tr>
                                <th>Гость 1</th><th>Гость 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {guestsToShow.map((guest) => (
                                <tr key={guest.id} data-id={guest.id} className={highlightedRow == guest.id ? 'highlighted' : ''}>
                                    <td>{guest.names[0]}</td>
                                    <td>{guest.names[1]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                <div className={`scroll-to-top ${showScrollToTop ? 'show' : ''}`} onClick={scrollToTop}>
                    <img src="/assets/arrow-up.svg" alt="Scroll to Top" />
                </div>
                <div className={isSticky ? 'sticky-button' : 'normal-button'}>
                    {showBackButton && (
                        <Link to='/faq'>
                            <Button className={'primary-button'}>Назад</Button>
                        </Link>
                    )}
                </div>
                <div className="bottom-spacer" ref={bottomSpacerRef}></div>
            </div>
        </div>
    );
};

export default FaqLiving;