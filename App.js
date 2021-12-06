import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
const App = () => {
    return (
        < ChatEngine
            height = "100"
            projectID = "8c193b84-ba08-48bc-a887-79cafdbf99d1"
            userName= "javascriptmastery"
            userSecret = "123123"
            renderChatFeed = {(chatAppProps)=> <ChatFeed { ... chatAppProps } />}
        />
    )

}

export default App; 