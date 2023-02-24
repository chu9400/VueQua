import { createApp } from 'vue'
import App from './App.vue'

//부트스트랩
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//vuex
import store from './store.js'

//firebase
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAWsY5uoJG66-KuEyXi9wkYjlTSSICgrPY",
    authDomain: "vuequa-12ce4.firebaseapp.com",
    projectId: "vuequa-12ce4",
    storageBucket: "vuequa-12ce4.appspot.com",
    messagingSenderId: "245442856642",
    appId: "1:245442856642:web:5d01b35d8e934170f0dd5b"
  };

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

createApp(App).use(store).mount('#app')