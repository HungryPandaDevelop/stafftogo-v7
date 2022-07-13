import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from 'blocks/Header';
import PrivateRoute from 'blocks/header/PrivateRouter';
import Footer from 'blocks/Footer';

import MainPage from 'pages/MainPage';


import Authorization from 'pages/cabinet/auth/Authorization';
import ForgotPassword from 'pages/cabinet/auth/ForgotPassword';
import Registration from 'pages/cabinet/auth/Registration';


import Account from 'pages/cabinet/Account';


// Страницы кабинет Нанимателя

import Vacancies from 'pages/cabinet/employers/vacancies/Vacancies';
import VacanciesNew from 'pages/cabinet/employers/vacancies/VacanciesNew';
import VacanciesEdit from 'pages/cabinet/employers/vacancies/VacanciesEdit';
// Страницы кабинет Нанимателя

// Страницы кабинет Соискателя
import Resume from 'pages/cabinet/applicants/resume/Resume';
import ResumeNew from 'pages/cabinet/applicants/resume/ResumeNew';
import ResumeEdit from 'pages/cabinet/applicants/resume/ResumeEdit';
// Страницы кабинет Соискателя

import Liked from 'pages/cabinet/default/Liked';
import Invited from 'pages/cabinet/default/Invited';
import MeInvited from 'pages/cabinet/default/MeInvited';

// Страницы Елементов Вакансии\ Резюме
import Catalog from 'pages/catalog/Catalog';
import CardsDetail from 'pages/catalog/CardsDetail';
// Страницы Елементов Вакансии\ Резюме



import Map from 'pages/catalog/MapGo';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes> 
          <Route path='/' exept element={<MainPage/>} ></Route>
          <Route path='/authorization'  element={<Authorization/>} ></Route>
          <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
          <Route path='/registration'  element={<Registration/>} ></Route>

        

          {/*  Страницы кабинет  */}
            <Route path='/cabinet' element={<PrivateRoute/>}>
              <Route path='/cabinet' element={<Account/>}></Route>
              <Route path='/cabinet/vacancies' element={<Vacancies/>}></Route>
              <Route path='/cabinet/vacancies-new' element={<VacanciesNew/>}></Route>
              <Route path='/cabinet/vacancies-edit/:elementId' element={<VacanciesEdit/>}></Route>

              <Route path='/cabinet/resume' element={<Resume/>}></Route>
              <Route path='/cabinet/resume-new' element={<ResumeNew/>}></Route>
              <Route path='/cabinet/resume-edit/:elementId' element={<ResumeEdit/>}></Route>


              <Route path='/cabinet/liked/' element={<Liked/>}></Route>
              <Route path='/cabinet/Invited/' element={<Invited/>}></Route>
              <Route path='/cabinet/MeInvited/' element={<MeInvited/>}></Route>

            </Route>
          {/*  Страницы кабинет  */}

        


{/*  Страницы временные  */}
          {/* <Route path='/catalog' element={<Catalog/>}></Route> */}
          {/* <Route path='/catalog/:catagoryName' element={<ListOld/>}></Route> */}
          {/* <Route path='/catalog/:catagoryName/:elementId' element={<Detail/>}></Route> */}
{/*  Страницы временные  */}


          <Route path='/catalog' element={<Catalog/>}></Route>
          <Route path='/map' element={<Map/>}></Route>
          <Route path='/catalog/:catagoryName/:elementId' element={<CardsDetail/>}></Route>


        </Routes>
        <Footer/>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
    </>
  );
}

export default App;
