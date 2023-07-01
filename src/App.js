// install
// @ant-design/icons 
//axios
// react-chat-engine
import {ChatEngine} from 'react-chat-engine';
// import App.css file
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';



// functional component
const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>


    return (
        <ChatEngine
        
        height = "100vh"  //props
        projectID = "b2d7a32e-cde3-45b0-8da6-446b98035450" //details from ChatEngine.io
        userName = {localStorage.getItem('username')}     //details from ChatEngine.io Weston
        userSecret ={localStorage.getItem('password')}    //details from ChatEngine.io Admin
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} /> } 
        
        />
    );
}

export default App;