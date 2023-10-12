import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

function App() {
    const [post, setPost] = useState(null);
    useEffect(() => {
        const getPost = async () => {
            try {
                setPost("Please wait")
                const response = await client.get('/ping');
                setPost(response.data);
            } catch (e) {
                console.error(e)
            }
        };
        getPost();
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <p>The New message is {post?.message}</p>
            </header>
        </div>
    );
}

export default App;
