import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { addPost, del } from './Redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

export const Render = (state) =>{
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App data={state.data} names={state.names} messages={state.messages} addPost={addPost} del={del}/>        
            </BrowserRouter>
          </React.StrictMode>
    );
}

reportWebVitals();
