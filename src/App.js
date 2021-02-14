import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navigation/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import { BrowserRouter, Route } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
    <div className="app-wrapper ">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        {/* exact - отображает страницу только при точном совпадении урла; / на конце не допустим. */}
        <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage}  
                                                       addMessage={props.addMessage} 
                                                       uppdateMessages={props.uppdateMessages}/> }/>  

        <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage} 
                                                       addPost={props.addPost} 
                                                       uppdatePostText={props.uppdatePostText} /> }/>
      </div>
      
    </div>
    </BrowserRouter>
  );
}



export default App;
