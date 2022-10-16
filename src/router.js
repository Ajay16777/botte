import React, {lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Loading from 'components/common/Loading';
import { ScrollToTop } from 'react-router-scroll-to-top';

const CommonLayout = lazy(() =>
  import('components/layouts/CommonLayout')
);

const Auth = lazy(() => import('components/Auth'));
const Dashboard = lazy(() => import('components/Dashboard'));
const HomePage = lazy(() => import('components/Home'));
// const Post = lazy(() => import('components/Post'));
// import PostDetails from './PostDetails';
const PostDetails = lazy(() => import('components/Post/PostDetails'));
const About = lazy(() => import('components/static/About'));
const Working = lazy(() => import('components/static/HowitWorks'));
const Faq = lazy(() => import('components/static/Faq'));
const Contact = lazy(() => import('components/static/Contact'));
const Privacy = lazy(() => import('components/static/PrivacyPolicy'));
const Disclaimer = lazy(() => import('components/static/Disclaimer'));
const Transaction = lazy(()=> import('components/Dashboard/NewMessage/Transaction'));
const Message = lazy(() => import('components/Dashboard/NewMessage/Home'));
// const 
const Conditions = lazy(() =>
  import('components/static/TermCondition')
);

const ForgotPassword = lazy(() =>
  import('components/Auth/ForgotPassword')
);
const ResetPassword = lazy(() =>
  import('components/Auth/ResetPassword')
);
// const ConfirmMail = lazy(() => import('components/Auth/ConfirmMail'));

const Router = () => {
  const token = sessionStorage.getItem("Auth Token")
  // if (tpken) return <Loading />;

  return (
    <Suspense fallback={<Loading />}>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<CommonLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<About />} />
          <Route path='working' element={<Working />} />
          <Route path='faq' element={<Faq />} />
          <Route path='posts/:id' element={<PostDetails />} />
          <Route path='disclaimer' element={<Disclaimer />} />
          <Route path='privacy' element={<Privacy />} />
          <Route path='conditions' element={<Conditions />} />
          <Route path='contact' element={<Contact />} /> 
          {token && (
            <>
              <Route path='dashboard/' element={<Dashboard />} />
              <Route path='dashboard/:tab' element={<Dashboard />} />
              <Route path='transaction' element={<Transaction />} />
              <Route path='dashboard/Message' element={<Message />} />

            </>
          )}
          <Route path='forgotPassword' element={<ForgotPassword />} />
          <Route
            path='resetPassword/:token'
            element={<ResetPassword />} 
          />
          {/* <Route
            path='confirmMail/:token'
            element={<ConfirmMail />}
          /> */}
          <Route path='auth' element={<Auth />} />
          <Route path='auth/:tab' element={<Auth />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
