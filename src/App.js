import React, { Component } from 'react';
import Header from '../src/components/Header';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import firebase from 'firebase';
class App extends Component {
  constructor(props){
  super(props);
  var config = {
    apiKey: "AIzaSyDfIjCEQdFcw6-U5_Bb-rHgvjpimcQ_BvU",
    authDomain: "your-project-26818.firebaseapp.com",
    databaseURL: "https://your-project-26818.firebaseio.com",
    projectId: "your-project-26818",
    storageBucket: "your-project-26818.appspot.com",
    messagingSenderId: "78670169256"
  };
  firebase.initializeApp(config);
}
render() {
  return (
    
    <div className="container">
      <script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js"></script>
      <Header title="Simple Firebase App" />
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageList db={firebase} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageBox db={firebase} />
        </div>
      </div>
    </div>
  );
 }
}
export default App;