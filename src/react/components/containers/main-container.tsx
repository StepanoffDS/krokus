import Cta from '@@/react/sections/home-page/cta';
import Footer from '../ui/footer';
import Header from '../ui/header';
import RunningLine from '../ui/running-line';
import { Outlet } from 'react-router';
import AuthPopup from '@@/react/popups/auth-popups/auth-popup';
import FeedbackPopup from '@@/react/popups/feedback-popup';
import PhotoFeedbackPopup from '@@/react/popups/photo-feedback-popup';

const MainContainer = () => {
  return (
    <>
      <AuthPopup />
      <FeedbackPopup />
      <PhotoFeedbackPopup />
      <RunningLine />
      <Header />
      <div>
        <Outlet />
      </div>
      <Cta />
      <Footer />
    </>
  );
};

export default MainContainer;
