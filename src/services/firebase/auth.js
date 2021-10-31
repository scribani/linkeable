import "./initialize";
import {
  getAuth,
  signInWithPopup,
  signInAnonymously,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const loginWithGoogle = () =>
  signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    return { token, user };
  });

export const loginAnonymously = () =>
  signInAnonymously(auth).then((response) => {
    const user = response.user;
    const token = user.accessToken;
    return { token, user };
  });

export const logOut = () => signOut(auth);
