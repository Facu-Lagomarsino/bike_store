import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC06hsxXoqbP5ClYg5EZJ2r0GV4Kcehq5A",
  authDomain: "bike-store-d716b.firebaseapp.com",
  projectId: "bike-store-d716b",
  storageBucket: "bike-store-d716b.appspot.com",
  messagingSenderId: "714838010880",
  appId: "1:714838010880:web:8b0d83ae0d49677c90bce5"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
    return app;
}