import MyCharts from "./components/chart";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { useAuthState } from "react-firebase-hooks";
// import { useCollectionData } from "react-firebase-hooks/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDbKmfKzgG7eJFpLC2mU9KBOqchM_kXYto",
//   authDomain: "pulse-stock-35bd4.firebaseapp.com",
//   projectId: "pulse-stock-35bd4",
//   storageBucket: "pulse-stock-35bd4.appspot.com",
//   messagingSenderId: "454143865054",
//   appId: "1:454143865054:web:d6d41631384c3ece4f124f",
//   measurementId: "G-CKLREDVFHS",
// };
// const auth = firebase.auth();
// const firestore = firebase.firestore();
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <MyCharts />
      <MyCharts />
    </div>
  );
}

export default App;
