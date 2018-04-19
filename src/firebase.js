import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDaDMplEZ_xDQtGc5_ekkglj8HwC4PcWCc',
  authDomain: 'react-pgs-workshop.firebaseapp.com',
  databaseURL: 'https://react-pgs-workshop.firebaseio.com',
  projectId: 'react-pgs-workshop',
  storageBucket: 'react-pgs-workshop.appspot.com',
  messagingSenderId: '158598496050',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
}

const auth = firebase.auth();

export { auth, firebase };
