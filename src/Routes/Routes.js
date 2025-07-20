import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import StartPage from '../components/Pages/StartPage/StartPage';
import AllSection from '../components/Pages/AllSection/AllSection';
import FAQ from '../components/Pages/FAQ/FAQ';
import FaqAbout from '../components/Pages/FAQ/FaqAbout/FaqAbout';
import FaqMap from '../components/Pages/FAQ/FaqMap/FaqMap';
import FaqLiving from '../components/Pages/FAQ/FaqLiving/FaqLiving';
import FaqActivnosti from '../components/Pages/FAQ/FaqActivnosti/FaqActivnosti';
import FaqMapForGala from '../components/Pages/FAQ/FaqMapForGala/FaqMapForGala';
import GalaDinner from '../components/Pages/GalaDinner/GalaDinner';
import GalaDinnerConception from '../components/Pages/GalaDinner/GalaDinnerConception/GalaDinnerConception';
import GalaDinnerDresscode from '../components/Pages/GalaDinner/GalaDinnerDresscode/GalaDinnerDresscode';
import GalaDinnerTiming from '../components/Pages/GalaDinner/GalaDinnerTiming/GalaDinnerTiming';
import GalaDinnerSit from '../components/Pages/GalaDinner/GalaDinnerSit/GalaDinnerSit';
import Meetup from '../components/Pages/Meetup/Meetup';
import MeetupConception from '../components/Pages/Meetup/MeetupConception/MeetupConception';
import MeetupDiscussion from '../components/Pages/Meetup/MeetupDiscussion/MeetupDiscussion';
import MeetupSpeakers from '../components/Pages/Meetup/MeetupSpeakers/MeetupSpeakers';
import MeetupTiming from '../components/Pages/Meetup/MeetupTiming/MeetupTiming';
import Feedback from '../components/Pages/Feedback/Feedback';
import React from 'react';

const AppRoutes = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<StartPageWithAnimation />} />
          <Route path="/sections" element={<AllSectionWithAnimation />} />
          <Route path="/faq" element={<FAQWithAnimation />} />
          <Route path="/faq/about" element={<FaqAbout/>} />
          <Route path="/faq/map" element={<FaqMap/>} />
          <Route path="/gala/map" element={<FaqMapForGala />} />
          <Route path="/faq/activnosti" element={<FaqActivnosti />} />
          <Route path="/faq/living" element={<FaqLiving/>} />
          <Route path="/galadinner" element={<GalaDinnerWithAnimation />} />
          <Route path="/galadinner/conception" element={<GalaDinnerConceptionWithAnimation />} />
          <Route path="/galadinner/dresscode" element={<GalaDinnerDresscode/>} />
          <Route path="/galadinner/timing" element={<GalaDinnerTimingWithAnimation />} />
          <Route path="/gala/sit" element={<GalaDinnerSit />} />
          <Route path="/meetup" element={<MeetupWithAnimation />} />
          <Route path="/meetup/conception" element={<MeetupConceptionWithAnimation />} />
          <Route path="/meetup/discussion" element={<MeetupDiscussionWithAnimation />} />
          <Route path="/meetup/speakers" element={<MeetupSpeakersWithAnimation />} />
          <Route path="/meetup/timing" element={<MeetupTiming />} />
          <Route path="/feedback" element={<FeedbackWithAnimation />} />
        </Routes>
      </Router>
    );
  }
  
  const motionVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      display: 'flex',
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.66,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.66,
      },
    },
  };
  
  const AnimatedComponent = ({ children, keyName }) => {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={keyName}
          variants={motionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    );
  };
  
  // Используем AnimatedComponent для каждой страницы
  const StartPageWithAnimation = () => {
    return <AnimatedComponent keyName="start-page"><StartPage /></AnimatedComponent>;
  };
  
  const AllSectionWithAnimation = () => {
    return <AnimatedComponent keyName="all-section"><AllSection /></AnimatedComponent>;
  };
  
  const FAQWithAnimation = () => {
    return <AnimatedComponent keyName="faq"><FAQ /></AnimatedComponent>;
  };
  
  const FaqAboutWithAnimation = () => {
    return <AnimatedComponent keyName="faq-about"><FaqAbout /></AnimatedComponent>;
  };
  
  const FaqMapWithAnimation = () => {
    return <AnimatedComponent keyName="faq-map"><FaqMap /></AnimatedComponent>;
  };
  
  const FaqLivingWithAnimation = () => {
    return <AnimatedComponent keyName="faq-living"><FaqLiving /></AnimatedComponent>;
  };
  
  const GalaDinnerWithAnimation = () => {
    return <AnimatedComponent keyName="gala-dinner"><GalaDinner /></AnimatedComponent>;
  };
  
  const GalaDinnerConceptionWithAnimation = () => {
    return <AnimatedComponent keyName="gala-dinner-conception"><GalaDinnerConception /></AnimatedComponent>;
  };
  
  const GalaDinnerDresscodeWithAnimation = () => {
    return <AnimatedComponent keyName="gala-dinner-dresscode"><GalaDinnerDresscode /></AnimatedComponent>;
  };
  
  const GalaDinnerTimingWithAnimation = () => {
    return <AnimatedComponent keyName="gala-dinner-timing"><GalaDinnerTiming /></AnimatedComponent>;
  };
  
  const MeetupConceptionWithAnimation = () => {
    return <AnimatedComponent keyName="meetup-conception"><MeetupConception /></AnimatedComponent>;
  };
  
  const MeetupDiscussionWithAnimation = () => {
    return <AnimatedComponent keyName="meetup-discussion"><MeetupDiscussion /></AnimatedComponent>;
  };
  
  const MeetupWithAnimation = () => {
    return <AnimatedComponent keyName="meetup"><Meetup /></AnimatedComponent>;
  };
  
  const MeetupSpeakersWithAnimation = () => {
    return <AnimatedComponent keyName="meetup-speakers"><MeetupSpeakers /></AnimatedComponent>;
  };
  
  const MeetupTimingWithAnimation = () => {
    return <AnimatedComponent keyName="meetup-timing"><MeetupTiming /></AnimatedComponent>;
  };
  
  const FeedbackWithAnimation = () => {
    return <AnimatedComponent keyName="feedback"><Feedback /></AnimatedComponent>;
  };
  
  export default AppRoutes;