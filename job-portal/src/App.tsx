import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createTheme, MantineProvider, } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import Homepage from './Pages/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindJobs from './Pages/FindJobs';

import SignUpPage from './Pages/SignUpPage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Notifications } from '@mantine/notifications';
import ApplyJobPage from './Pages/ApplyJobPage';
import JobDescPage from './Pages/JobDescPage';
import { MockTest } from './Pages/MockTest';
import { About } from './Components/Header/About';
import { Contact } from './Components/Header/Contact';

function App() {
  const theme = createTheme({
    focusRing: "never",
    fontFamily: 'Poppins,sans-serif',
    primaryColor: 'brightsun',
    primaryShade: 4,
    colors: {
      mineshaft: ['#f6f6f6',
        '#e7e7e7',
        '#d1d1d1',
        '#b0b0b0',
        '#888888',
        '#6d6d6d',
        '#5d5d5d',
        '#4f4f4f',
        '#454545',
        '#3d3d3d',
        '#2d2d2d'],
      brightsun: ['#fffbeb',
        '#fff3c6',
        '#ffe588',
        '#ffd149',
        '#ffbd20',
        '#f99b07',
        '#dd7302',
        '#b75006',
        '#943c0c',
        '#7a330d',
        '#461902'
      ]
    }
  })
  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <Notifications position="top-center" zIndex={1000} />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/find-jobs' element={<FindJobs />} />
          <Route path='/jobs' element={<JobDescPage />} />
          <Route path='/apply-job' element={<ApplyJobPage />} />
          <Route path='/mocktest' element={<MockTest />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<SignUpPage />} />
          <Route path='*' element={<Homepage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
