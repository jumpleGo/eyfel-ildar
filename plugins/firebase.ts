import { defineNuxtPlugin } from '#app';

import {type FirebaseApp, initializeApp } from 'firebase/app';
import {type Firestore, getFirestore} from "@firebase/firestore";

declare module '#app' {
    interface NuxtApp {
        $firebaseApp: FirebaseApp;
        firebaseDB: Firestore
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    const firebaseConfig = {
        apiKey: "AIzaSyD8Hg8InXe3xIB2K_q9448gnISYARPzOCE",
        authDomain: "eyfel-348ba.firebaseapp.com",
        projectId: "eyfel-348ba",
        storageBucket: "eyfel-348ba.appspot.com",
        messagingSenderId: "888474408466",
        appId: "1:888474408466:web:484786fc3d047fba71eacb"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    nuxtApp.provide('firebaseApp', app);
    nuxtApp.provide('firebaseDB', db);
});