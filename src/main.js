import { createApp } from 'vue'
import App from './App.vue'


// ----------------  파이어스토어  ----------------
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


var firebaseConfig = {
//   apiKey: "AIzaSyD4Jbqd9RgZd_AHeLNX-n",
  authDomain: "vm11mind-8e78f.firebaseapp.com",
  projectId: "vm11mind-8e78f",
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();




createApp(App).mount('#app')
