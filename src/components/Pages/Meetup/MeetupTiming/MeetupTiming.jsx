import React, { useState, useRef, useEffect } from "react";
import "./MeetupTiming.css";
import Button from "../../../Buttons/Button";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const MeetupTiming = () => {
    const [currentDay, setCurrentDay] = useState(1);
    const [modalData, setModalData] = useState(null);
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const bottomSpacerRef = useRef(null);
    const [isSticky, setIsSticky] = useState(true);
    const [showBackButton, setShowBackButton] = useState(true); // Button visibility state
    const [isModalOpen, setIsModalOpen] = useState(false); // New state for modal visibility
  
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
        alert('Чтобы узнать подробнее про спикеров - просто нажмите на них :)');
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  const timingDataDay1 = [
    {
      id: 1,
      time: "14:30",
      topic:
        "\nИнтро<hr>Почему Эй Кей лучше, чем другие.<hr>Чем похожи <u>ЭЙ</u> Кей и <u>ЭЙ</u>нштейн?\n\n",
      speakers: [
        { id: 101, name: "\nЧижов Алексей\n\n" },
        { id: 102, name: "\nТкачева Светлана\n\n" },
      ],
    },
    {
      id: 2,
      time: "15:00",
      topic:
        "\nPROMO - Как расти дальше?<hr>Простых решений больше нет.<hr>БОНУС\n↓↓↓\n\nФин Дир расскажет, куда тратятся деньги, которые мы зарабатываем.\n\n",
      speakers: [
        { id: 103, name: "\nАнтипанова Серафима\n\n" },
        { id: 104, name: "\nКудряшов Дмитрий\n\n" },
      ],
    },
    {
      id: 3,
      time: "15:30",
      topic: "Перерыв",
      speakers: [],
    },
    {
        id: 4,
        time: "15:35",
        topic: "\nВыступление Маркета Сушко.\n\nСоздаем возможности сами!\n\n",
        speakers: [
            { id: 105, name: "Сушко Павел"}
        ],
      },
      {
        id: 5,
        time: "15:45",
        topic: "\nТиньков, мат и вера в себя.<hr>Как успешно пройти ассес-\nмент на ТУ не с первого раза.\n\n",
        speakers: [
            { id: 106, name: "Железова Людмила"}
        ],
      },
      {
        id: 6,
        time: "16:05",
        topic: "\nНевероятная Астрахань: как все время расти в ТО против тренда.\n\n",
        speakers: [
            { id: 107, name: "\nЛепская Екатерина\n\n"},
            { id: 108, name: "\nБолдырева Алия\n\n"}
        ],
      },
      {
        id: 7,
        time: "16:25",
        topic: "\nКак небольшие и простые идеи могут давать хороший результат.<hr>Делай, что можешь, для своих людей.<hr>Укрепление HR бренда в г. Рязань.\n\n",
        speakers: [
            { id: 109, name: "\nМария Прокофьева\n\n"},
            { id: 110, name: "\nМихеева Елена\n\n"}
        ],
      },
      {
        id: 8,
        time: "16:50",
        topic: "\nЗаложи базу. Потом - выжимай максимум.<hr>Как ставить рекорды по выручке.\n\n",
        speakers: [
            { id: 111, name: "Хромов Роман"},
        ],
      },
      {
        id: 9,
        time: "17:15",
        topic: "\nУспешные практики в г. Ярославль.\n\n",
        speakers: [
            { id: 112, name: "\nВиноградова Валентина\n\n"},
            { id: 113, name: "\nБаранов Иван\n\n"}
        ],
      },
      {
        id: 10,
        time: "17:40",
        topic: "\nПерерыв\n\n",
        speakers: [
            
        ],
      },
      {
        id: 11,
        time: "17:55",
        topic: "\nЛивы и газели.\nОхота как стиль жизни и работы.<hr>Как можно выполнить план по ТО.\n\n",
        speakers: [
            { id: 114, name: "Ткачева Светлана"}
        ],
      },
      {
        id: 12,
        time: "18:25",
        topic: "\nНовые технологии стремительно меняют мир.<hr>То, что казалось нереальным - уже в Эй Кей.\n\n",
        speakers: [
            { id: 115, name: "Кунаков Иван"}
        ],
      },
      {
        id: 13,
        time: "19:10",
        topic: "\nОкончание 1го дня конференции.\n\n",
        speakers: [
            
        ],
      },
    // Add more entries as needed
  ];

  const timingDataDay2 = [
    {
      id: 14,
      time: "10:00",
      topic: "HR  + People.",
      speakers: [
        { id: 116, name: "\nHR\n\n" },
        { id: 117, name: "\nГригорян Наталья\n\n"}
      ],
    },
    {
      id: 15,
      time: "11:30",
      topic: "Перерыв",
      speakers: [],
    },
    {
      id: 16,
      time: "11:40",
      topic: "Квиз",
      speakers: [],
    },
    {
        id: 17,
        time: "11:55",
        topic: "\nВступление маркета Кравченко.\nВопреки…\n\n",
        speakers: [
            { id: 118, name: "\nКравченко Ксения\n\n" },
        ],
      },
      {
        id: 18,
        time: "12:05",
        topic: "\nВопреки внешним обстоятельств.\n\n",
        speakers: [
            { id: 119, name: "\nЕгоров Александр" },
            { id: 120, name: "\nДёмин Владислав" },
            { id: 121, name: "\nФионина Ольга\n\n" },
        ],
      },
      {
        id: 19,
        time: "12:25",
        topic: "\nВопреки рынку труда.\n\n",
        speakers: [
            { id: 122, name: "\nБурыкина Анастасия\n\n" },
            { id: 123, name: "\nЮдин Сергей\n\n" },
            { id: 124, name: "\nПодлегаева Дарья\n\n" },
            { id: 125, name: "\nЛеваков Александр\n\n"}
        ],
      },
      {
        id: 20,
        time: "12:55",
        topic: "\nВопреки комфорту\n\n<hr>\nЛичная история развития от Директора до ВТУ.\n\n",
        speakers: [
            { id: 126, name: "\nМальцева Ирина\n\n" },
        ],
      },
      {
        id: 21,
        time: "13:10",
        topic: "\nВопрекия установкам.<hr>Аналитика в Product.\n\n",
        speakers: [
            { id: 127, name: "\nГорельков Александр\n\n" },
        ],
      },
      {
        id: 22,
        time: "13:25",
        topic: "\nВопреки ручного труда<hr>Автоматизация профиля ресторана.\n\n",
        speakers: [
            { id: 128, name: "\nКававина Любовь\n\n" },
        ],
      },
      {
        id: 23,
        time: "13:40",
        topic: "\nОбед\n\n",
        speakers: [

        ],
      },
      {
        id: 24,
        time: "14:40",
        topic: "\nКак я нахожу себе проблемы и решаю их на пользу всем. :)<hr>Сломанные преграды в доставке и COL.\n\n",
        speakers: [
            { id: 129, name: "\nВиноградова Екатерина\n\n" },
        ],
      },
      {
        id: 25,
        time: "15:00",
        topic: "\nКак закалялся QA.\n\n",
        speakers: [
            { id: 130, name: "\nЕвдокимов Илья\n\n" },
            { id: 131, name: "\nВишняков Антон\n\n" },
        ],
      },
      {
        id: 26,
        time: "15:30",
        topic: "\nКак у меня дела?\n\n",
        speakers: [
            { id: 132, name: "\nФедорова Татьяна\n\n" },
        ],
      },
      {
        id: 27,
        time: "15:50",
        topic: "\nБудущее Эй Кей.<hr>Хотим менять, а не меняться.\n\n",
        speakers: [
            { id: 133, name: "\nЧижов Алексей\n\n" },
        ],
      },
      {
        id: 28,
        time: "16:50",
        topic: "\nПерерыв\n\n",
        speakers: [

        ],
      },
      {
        id: 29,
        time: "17:00",
        topic: "\nПанельная дискуссия\n\n",
        speakers: [
            {id: 134, name: "LT"}
        ],
      },
      {
        id: 30,
        time: "17:30",
        topic: "\nОкончание конференции\n\n",
        speakers: [

        ],
      },
      {
        id: 31,
        time: "19:30",
        topic: "\nГала-ужин\n\n",
        speakers: [

        ],
      },

    // Add more entries as needed
  ];

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

  const openModal = (speakerId) => {
    if (speakersData.hasOwnProperty(speakerId)) {
      setModalData(speakersData[speakerId]);
      setShowBackButton(false);
      setShowScrollToTop(false); // Hide "Back" button when modal is opened
    } else {
      console.error(`Speaker with id ${speakerId} not found in speakersData`);
    }
  };

  const closeModal = () => {

    // Add a delay to ensure fadeOut animation completes before resetting modalData
    setTimeout(() => {
      setModalData(null);
      setShowBackButton(true); // Show "Back" button when modal is closed
    }, 700); // Match animation duration in milliseconds

    // Add fadeOut class to initiate fadeOut animation
    const modalOverlay = document.querySelector(".modal-overlay");
    if (modalOverlay) {
      modalOverlay.classList.add("fadeOut");
    }
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
          onClick={(e) => {
            e.preventDefault();
            openModal(speaker.id);
          }}
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


  let timingData;
  let dateLabel;
  if (currentDay === 1) {
    timingData = timingDataDay1;
    dateLabel = "22.07";
  } else if (currentDay === 2) {
    timingData = timingDataDay2;
    dateLabel = "23.07";
  } else {
    // Handle other days if needed
  }

  return (
    <div className={"MeetupTiming_wrapper"}>
      {modalData && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className={'modal-image'}><img className={'modal-image-img'} src={modalData.image} alt='123'/></div>
            <div className={'modal-text'} dangerouslySetInnerHTML={{ __html: modalData.text.replace(/\n/g, '<br/>') }}></div>
            <div className={'modal-close'}><button onClick={closeModal}>Назад</button></div>
          </div>
        </div>
      )}
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
        <div className="slider">
          {currentDay > 1 && (
            <button onClick={() => setCurrentDay(currentDay - 1)}>
              <FaArrowLeft /> {currentDay === 2 ? "" : ""}
            </button>
          )}
          <span>{dateLabel}</span>
          {currentDay < 3 && (
            <button onClick={() => setCurrentDay(currentDay + 1)}>
              {currentDay === 2 ? "" : ""} <FaArrowRight />
            </button>
          )}
        </div>
        {currentDay === 3 ? (
          <div className="departure-note">ВЫЕЗД ДО 12:00</div>
        ) : (
          <div className="MeetupTiming_table">
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
        )}
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
