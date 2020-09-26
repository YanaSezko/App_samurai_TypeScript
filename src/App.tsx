import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navdar";
import Profile from "./components/Profile/Profile";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Profile/>

        </div>
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
