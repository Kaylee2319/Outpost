import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import Chatroom from './components/Chatroom';
import DmPage from './components/DmPage';
import ProfilePage from './components/ProfilePage';
import AboutPage from './components/AboutPage';
import PolicyGuide from './components/PolicyGuide';
import VeteranPrograms from './components/VeteranPrograms';
import ContactUs from './components/ContactUsPage';
import Menu from './components/MenuPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/chatroom" component={Chatroom} />
        <Route exact path="/dms" component={DmPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/policy" component={PolicyGuide} />
        <Route exact path="/veteranprograms" component={VeteranPrograms} />
        <Route exact path="/contactus" component={ContactUs} />
        <Route exact path="/menu" component={Menu} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
