import React, { useState, useRef, useEffect } from "react";
import "./MeetupTiming.css";
import Button from "../../../Buttons/Button";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const MeetupTiming = () => {
    // Удаляем состояние currentDay и связанные с ним переменные
    // const [currentDay, setCurrentDay] = useState(1);
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const bottomSpacerRef = useRef(null);
    const [isSticky, setIsSticky] = useState(true);
    const [showBackButton, setShowBackButton] = useState(true); // Button visibility state
  
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
        // alert('Чтобы узнать подробнее про спикеров - просто нажмите на них :)');
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  const timingData = [
    {
      id: 1,
      time: "10:30",
      topic:
        "\nВстреча участников конференции<hr>Кофе-брейк\n\n",
      speakers: [
        { id: 101, name: "\n\n" },
      ],
    },
    {
      id: 2,
      time: "11:00",
      topic:
        "\nINTRO<hr>Почему трансформация\n\n",
      speakers: [
        { id: 103, name: "\n" },
      ],
    },
    {
      id: 3,
      time: "11:05",
      topic: "\nИтоги полугодия<hr>Реализация стратегии 2025\n\n",
      speakers: [
        {id: 103, name:"Кудряшов Дмитрий"}
      ],
    },
    {
        id: 4,
        time: "11:25",
        topic: "\nТрансформация OPS\n\n",
        speakers: [
            { id: 105, name: "Ткачева Светлана"}
        ],
      },
      {
        id: 5,
        time: "",
        topic: "Place",
        speakers: [
            { id: 106, name: "Щукин Александр"}
        ],
      },
      {
        id: 6,
        time: "",
        topic: "Promo",
        speakers: [
            { id: 107, name: "Корнеева Елена"},
        ],
      },
      {
        id: 7,
        time: "",
        topic: "Product",
        speakers: [
            { id: 109, name: "Горельков Александр"},
        ],
      },
      {
        id: 8,
        time: "",
        topic: "People",
        speakers: [
            { id: 111, name: "Григорян Наталья"},
        ],
      },
      {
        id: 9,
        time: "",
        topic: "Проекты",
        speakers: [
            { id: 112, name: "Виноградова Екатерина"},
        ],
      },
      {
        id: 10,
        time: "12:45",
        topic: "QA",
        speakers: [
          { name: "\nЕвдокимов Илья"},
          {name: "Вишняков Антон\n\n"}
      ],
      },
      {
        id: 11,
        time: "13:00",
        topic: "Перерыв",
        speakers: [
        ],
      },
      {
        id: 12,
        time: "13:15",
        topic: "Трансформация 2025",
        speakers: [
            { id: 115, name: "Низамутдинова Нелли"}
        ],
      },
      {
        id: 13,
        time: "13:40",
        topic: "Цели 2ого полугодия",
        speakers: [
            {name: "LT"}
        ],
      },
      {
        id: 14,
        time: "14:05",
        topic: "Обед",
        speakers: [
            {name: ""}
        ],
      },
      {
        id: 15,
        time: "14:50",
        topic: "Деловая игра",
        speakers: [
            {name: ""}
        ],
      },
      {
        id: 16,
        time: "17:35",
        topic: "Заселение",
        speakers: [
            {name: ""}
        ],
      },
    // Add more entries as needed
  ];
  ;

  const speakersData = {
    101: {
      id: 101,
      name: "Чижов Алексей",
      image: "/assets/1.png",
      text: "CEO, Алексей Чижов поделится секретом успеха ЭйКей и что позволяет Компании быть лучшими.\n\nА так же расскажет, почему Эйнштейн стал нашим выбором для SSM в этом году, и что общего между выдающимся физиком и нашей Компанией?",
    },
    102: {
      id: 102,
      name: "Ткачева Светлана",
      image: "/assets/1.png",
      text: "CEO, Алексей Чижов поделится секретом успеха ЭйКей и что позволяет Компании быть лучшими.\n\nА так же расскажет, почему Эйнштейн стал нашим выбором для SSM в этом году, и что общего между выдающимся физиком и нашей Компанией?",
    },
    103: {
      id: 103,
      name: "Антипанова Серафима",
      image: "/assets/2.png",
      text: "Лидер Промо, Серафима Антипанова подведет итоги 1го полугодия.\nОтветит на вопросы<hr>Как расти в товарообороте дальше?<hr>В чем будет заключаться новый подход в блоке Promo?<hr>Что мы ждем от команды директоров для достижения целей?",
    },
    104: {
      id: 104,
      name: "Кудряшов Дмитрий",
      image: "/assets/2.png",
      text: "Лидер Промо, Серафима Антипанова подведет итоги 1го полугодия.\nОтветит на вопросы:<hr>Как расти в товарообороте дальше?<hr>В чем будет заключаться новый подход в блоке Promo?<hr>Что мы ждем от команды директоров для достижения целей?",
    },
    105: {
      id: 105,
      name: "Сушко Павел",
      image: "/assets/3.png",
      text: "Маркет Менеджер,\nПавел Сушко расскажет про построение работы через поддержку инициативы команды своего маркета, как важна поддержка идеи команды, вера в них.\n\nНе ждать, а давать возможность пробовать здесь и сейчас. ",
    },
    106: {
        id: 106,
        name: "Железова Людмила",
        image: "/assets/4.png",
        text: "Людмила Железова расскажет про свой опыт прохождения Ассессмент центра в ЭйКей, и как важно иметь внутреннюю мотивацию.",
      },
      107: {
        id: 107,
        name: "Лепская Екатерина",
        image: "/assets/5.png",
        text: "Алия Болдырева и Екатерина Лепская на примере города Астрахань покажут, как важно не останавливаться на достигнутом, уметь находить нешаблонные решения. Почему очень важно намерения и в чем сила мечты.",
      },
      108: {
        id: 108,
        name: "Болдырева Алия",
        image: "/assets/5.png",
        text: "Алия Болдырева и Екатерина Лепская на примере города Астрахань покажут, как важно не останавливаться на достигнутом, уметь находить нешаблонные решения. Почему очень важно намерения и в чем сила мечты.",
      },
      109: {
        id: 109,
        name: "Мария Прокофьева",
        image: "/assets/6.png",
        text: "Елена Михеева и Мария Прокофьева расскажут, как небольшие и простые идеи могут давать крутой результат.\n\nКак простая инициатива одного человека влияет на укрепление  HR бренда  целого города. ",
      },
      110: {
        id: 110,
        name: "Михеева Елена",
        image: "/assets/6.png",
        text: "Елена Михеева и Мария Прокофьева расскажут, как небольшие и простые идеи могут давать крутой результат.\n\nКак простая инициатива одного человека влияет на укрепление  HR бренда  целого города. ",
      },
      111: {
        id: 111,
        name: "Хромов Роман",
        image: "/assets/7.png",
        text: 'Роман Хромов расскажет, про выведенную на своем опыте формулу достижения рекордной выручки на самом сложном ресторане.<hr>"Заложи базу.\nПотом - выжимай максимум."',
      },
      112: {
        id: 112,
        name: "Виноградова Валентина",
        image: "/assets/8.png",
        text: 'Валя Виноградова и Иван Баранов поделятся лучшими практиками Ярославля, а так же  расскажут, почему большого результата не бывает без совершения  маленьких шагов.',
      },
      113: {
        id: 113,
        name: "Баранов Иван",
        image: "/assets/8.png",
        text: 'Валя Виноградова и Иван Баранов поделятся лучшими практиками Ярославля, а так же  расскажут, почему большого результата не бывает без совершения  маленьких шагов.',
      },
      114: {
        id: 114,
        name: "Ткачева Светлана",
        image: "/assets/9.png",
        text: 'Светалана Ткачева расскажет о том, в чем она видит силу победителя.\nКак это отображается в ее подходе к работе, и как это поможет в выполнении плана товарооборота.',
      },
      115: {
        id: 115,
        name: "Кунаков Иван",
        image: "/assets/10.png",
        text: 'Иван Кунаков покажет, как важно следить за развитием технологий в нашем Бизнесе, расскажет про собственные инновационные проекты в Эй\nКей.\nА так же покажет, как искуственный интелект может помочь в рутине директора.',
      },
      116: {
        id: 116,
        name: "HR",
        image: "/assets/11.png",
        text: 'Выступление HR директора, Руководителя отдела подбора, Менеджера по корп.культура, Лидер PEOPLE и секретный гость.',
      },
      117: {
        id: 117,
        name: "Григорян Наталья",
        image: "/assets/12.png",
        text: 'Выступление HR директора, Руководителя отдела подбора, Менеджера по корп.культура, Лидер PEOPLE и секретный гость.',
      },
      118: {
        id: 118,
        name: "Кравченко Ксения",
        image: "/assets/13.png",
        text: 'Ксения Кравченко и команда расскажут про нестандартный подход, про то, как можно и нужно ломать барьеры, нестандартно мыслить и действовать вопреки реалиям.',
      },
      119: {
        id: 119,
        name: "Егоров Александр",
        image: "/assets/14.png",
        text: 'Александр Егоров, Владислав Дёмин и Ольга Фионина поделятся своим опытом работы в нестандартных ситуациях, когда невозможно заглянуть в инструкцию и найти там ответ.<hr>Как неординарные решения влияют на бизнес.',
      },
      120: {
        id: 120,
        name: "Дёмин Владислав",
        image: "/assets/14.png",
        text: 'Александр Егоров, Владислав Дёмин и Ольга Фионина поделятся своим опытом работы в нестандартных ситуациях, когда невозможно заглянуть в инструкцию и найти там ответ.<hr>Как неординарные решения влияют на бизнес.',
      },
      121: {
        id: 121,
        name: "Фионина Ольга",
        image: "/assets/14.png",
        text: 'Александр Егоров, Владислав Дёмин и Ольга Фионина поделятся своим опытом работы в нестандартных ситуациях, когда невозможно заглянуть в инструкцию и найти там ответ.<hr>Как неординарные решения влияют на бизнес.',
      },
      122: {
        id: 122,
        name: "Бурыкина Анастасия",
        image: "/assets/15.png",
        text: 'Команда People Маркета, Сергей Юдин, Анастасия Бурыкина и Дарья Подлегаева расскажут, что делать в условиях падения рынка труда?<hr>Чем мотивировать и делать сотрудников счастливее.<hr>И как одна маленькая идея стала основным направлением HR Бренда Компании. ',
      },
      123: {
        id: 123,
        name: "Юдин Сергей",
        image: "/assets/15.png",
        text: 'Команда People Маркета, Сергей Юдин, Анастасия Бурыкина и Дарья Подлегаева расскажут, что делать в условиях падения рынка труда?<hr>Чем мотивировать и делать сотрудников счастливее.<hr>И как одна маленькая идея стала основным направлением HR Бренда Компании. ',
      },
      124: {
        id: 124,
        name: "Подлегаева Дарья",
        image: "/assets/15.png",
        text: 'Команда People Маркета, Сергей Юдин, Анастасия Бурыкина и Дарья Подлегаева расскажут, что делать в условиях падения рынка труда?<hr>Чем мотивировать и делать сотрудников счастливее.<hr>И как одна маленькая идея стала основным направлением HR Бренда Компании. ',
      },
      125: {
        id: 125,
        name: "Лекаков Александр",
        image: "/assets/15.png",
        text: 'Команда People Маркета, Сергей Юдин, Анастасия Бурыкина и Дарья Подлегаева расскажут, что делать в условиях падения рынка труда?<hr>Чем мотивировать и делать сотрудников счастливее.<hr>И как одна маленькая идея стала основным направлением HR Бренда Компании. ',
      },
      126: {
        id: 126,
        name: "Мальцева Ирина",
        image: "/assets/16.png",
        text: 'Ведущий территориальный управляющий, Ирина Мальцева, поделится, как строился ее рост в Компании, какой перед ней стоял выбор.',
      },
      127: {
        id: 127,
        name: "Горельков Александр",
        image: "/assets/17.png",
        text: 'Александр Горельков, лидер Product, развеет устаявшееся мнение о том, что ресторану невозможно повлиять на нормативные списания.<hr>Как магия анализа и немного ИТ станет инструментом влияния на EBITDA.',
      },
      128: {
        id: 128,
        name: "Кававина Любовь",
        image: "/assets/18.png",
        text: 'Любовь Кававина расскажет, как автоматизация Профиля ресторана сократит время ручного труда директора на ХХ часов в год.',
      },
      129: {
        id: 129,
        name: "Виноградова Екатерина",
        image: "/assets/19.png",
        text: 'Катя Виноградова: "Как я нахожу проблемы и решаю их на благо всем".',
      },
      130: {
        id: 130,
        name: "Евдокимов Илья",
        image: "/assets/20.png",
        text: 'Илья Евдокимов и Антон Вишняков откровенно о Роспотребнадзоре, и чем наш QA отличается от других.',
      },
      131: {
        id: 131,
        name: "Вишняков Антон",
        image: "/assets/20.png",
        text: 'Илья Евдокимов и Антон Вишняков откровенно о Роспотребнадзоре, и чем наш QA отличается от других.',
      },
      132: {
        id: 132,
        name: "Федорова Татьяна",
        image: "/assets/logo.svg",
        text: 'Узнаете на конференции :)',
      },
      133: {
        id: 133,
        name: "Чижов Алексей",
        image: "/assets/21.png",
        text: 'Выступление Генерального директора.',
      },
    // Add more entries as needed
  };

  const formatText = (text) => {
    return text.replace(/\n/g, "<br/>").replace(/<hr>/g, "<hr>");
  };
  
  const formatSpeakers = (speakers) => {
    return speakers.map((speaker, index) => (
      <React.Fragment key={index}>
        {index > 0 && <hr />}
        <div
          dangerouslySetInnerHTML={{ __html: formatText(speaker.name) }}
          // onClick={(e) => {
          //   e.preventDefault();
          //   openModal(speaker.id);
          // }}
        >
        </div>
      </React.Fragment>
    ));
  };

  const formatTopic = (topic) => {
    return {
      __html: topic.replace(/\n/g, "<br/>").replace(/<hr>/g, "<hr>"),
    };
  };


  // let timingData;
  // let dateLabel;
  // if (currentDay === 1) {
  //   timingData = timingDataDay1;
  //   dateLabel = "22.07";
  // } else if (currentDay === 2) {
  //   timingData = timingDataDay2;
  //   dateLabel = "23.07";
  // } else {
  //   // Handle other days if needed
  // }

  return (
    <div className={"MeetupTiming_wrapper"}>
      {/* <div className={"MeetupTiming_image"}>
        <div className={"MeetupTiming_headerText"}>
          <img
            className={"MeetupTiming_headerText_img"}
            src="/assets/living.svg"
            alt="123"
          />
        </div>
        <img
          className={"MeetupTiming_image_img"}
          src="/assets/logo.svg"
          alt="123"
        />
      </div> */}
      <div className={"MeetupTiming_text"}>
        <span style={{fontWeight: 'bold', fontSize: '20px', marginBottom: '20px', marginTop: '20px', display: 'block'}}>Тайминги</span>
        <div className="MeetupTiming_table table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Время</th>
                  <th>Тема</th>
                  <th>Спикер</th>
                </tr>
              </thead>
              <tbody>
                {timingData.map((event, index) => (
                  <tr key={index}>
                    <td>{event.time}</td>
                    <td dangerouslySetInnerHTML={formatTopic(event.topic)}></td>
                    <td>{formatSpeakers(event.speakers)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={`scroll-to-top ${showScrollToTop ? 'show' : ''}`} onClick={scrollToTop}>
            <img src="/assets/arrow-up.svg" alt="Scroll to Top" />
          </div>
          <div className={isSticky ? 'sticky-button' : 'normal-button'}>
            {showBackButton && (
              <Link to='/meetup'>
                <Button className={'primary-button'}>Назад</Button>
              </Link>
            )}
          </div>
          <div className="bottom-spacer" ref={bottomSpacerRef}></div>
        </div>
      </div>
    );
};

export default MeetupTiming;
