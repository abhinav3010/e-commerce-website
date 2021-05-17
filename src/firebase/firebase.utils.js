import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCIzSI3Bl_-_HSCVZIa0-1qeYrolXXByvY',
  authDomain: 'crown-db-62a1a.firebaseapp.com',
  projectId: 'crown-db-62a1a',
  storageBucket: 'crown-db-62a1a.appspot.com',
  messagingSenderId: '417660543220',
  appId: '1:417660543220:web:c860ec9759e592030bfea1',
  measurementId: 'G-MFMR6MZTT5',
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const storeUserToDb = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    try {
      await userRef.set({
        displayName: userAuth.displayName,
        email: userAuth.email,
        createdAt: new Date(),
        ...additionalData,
      });
    } catch (err) {
      console.error('Unable to save data to db ', err.message);
    }
  }
  return userRef;
};
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
