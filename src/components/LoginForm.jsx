import { useState } from "react";
import axios from 'axios';

const LoginForm = () => {
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "b2d7a32e-cde3-45b0-8da6-446b98035450", 'User-Name': username, 'User-Secret': password}
        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

            
        } catch (error) {
            setError('Incorrect Usernmae/Password')
            
        }
    }
    return(
       <div className="wrapper">
            <div className="form">
                <h1 className="title">
                    Chat Application
                </h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value = {username} onChange = {(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value = {password} onChange = {(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align = "center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>

                        </button>
                        <h2 className="Error">
                            {error}
                        </h2>
                    </div>
                </form>

            </div>

       </div> 

    );

}
export default LoginForm;