import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

let number;

export default {};
const handleSubmit = (event) => {
  event.preventDefault();

  axios
    .post('/start-game', {})
    .then(function (response) {
      localStorage.setItem('room', response.room);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <div class=' flex items-center max-w-lg mx-auto my-10 bg-gray-100 p-8 rounded-xl justify-center shadow shadow-slate-300'>
      <h1 class='text-4xl font-medium text-center mb-6 text-blue-600'>
        Code breaker
      </h1>
      <form onSubmit={this.handleSubmit}>
        <button
          type='sumbit'
          class='relative bg-blue-500 mx-6 text-white p-6 rounded-xl text-2xl font-bold overflow-hidden'
        >
          start Game
        </button>
      </form>
    </div>
    <div class='max-w-lg mx-auto my-10 bg-gray-100 p-8 rounded-xl shadow shadow-slate-300'>
      <label class='mt-6' for='code'>
        <p class='mt-6 font-bold text-slate-700 pb-2'>Code</p>
        <input
          id='code'
          name='code'
          class='w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow'
          placeholder='Enter your try'
        />
      </label>
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
