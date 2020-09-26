import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navdar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import s from "./components/Profile/Profile.module.css";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <main className='app-wrapper-content'>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                </main>
            </div>
        </BrowserRouter>
    )
}


/*
const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path ={"/hello"} render={()=><HelloMessage message={"Hello"} />}/>
                <Route path ={"/bye"} render={()=><ByeMessage message={"Bye"} />}/>
            </div>
        </BrowserRouter>
    )
}
type MessageType = {
    message: string
}

function HelloMessage(props: MessageType) {
    return <h1>{props.message}</h1>
}

const ByeMessage: React.FC<MessageType> = (props) => {
    return <h1>{props.message}</h1>
}*/

export default App;
