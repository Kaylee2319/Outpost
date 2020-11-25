import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import SecureRoute from './components/SecureRoute';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import Chatroom from './components/Chatroom';
import ProfilePage from './components/ProfilePage';
import ProfileEdit from './components/ProfileEdit';
import AboutPage from './components/AboutPage';
import PolicyGuide from './components/PolicyGuide';
import VeteranPrograms from './components/VeteranPrograms';
import ContactUs from './components/ContactUsPage';
import Menu from './components/MenuPage';
import Events from './components/Events';
import './App.css';
function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/policy" component={PolicyGuide} />
          <Route exact path="/veteranprograms" component={VeteranPrograms} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/event" component={Events} />
          <SecureRoute exact path="/chatroom" component={Chatroom} />
          <SecureRoute exact path="/dms" component={DmPage} />
          <SecureRoute exact path="/profile" component={ProfilePage} />
          <SecureRoute exact path="/profileedit" component={ProfileEdit} />

        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
