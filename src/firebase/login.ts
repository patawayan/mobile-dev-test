import { useFirestore } from 'vuefire'
import { collection, query, where, addDoc, getDocs } from "firebase/firestore";
import { useUserStore } from '@/stores/user';
import { getAuth, signInWithPopup, getRedirectResult, signInWithRedirect, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import type { AuthProvider} from 'firebase/auth'

const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();

const db = useFirestore();

const {setLoginUser, setLoginUserFirebase} = useUserStore();

export interface LoginResultInterface {
  success: boolean;
  message?: string;
}

export const staticLogin = async (username: string, password: string):Promise<LoginResultInterface> => {
  const loginResult:LoginResultInterface = {success: false};
  try {
    const usersRef = collection(db, "users");

    const q = query(usersRef, where("username", "==", username));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      if (querySnapshot.docs.filter(doc => doc.data().password === password).length > 0) {
        setLoginUser(username)
        loginResult.success = true;
      } else {
        loginResult.message = 'Wrong Password.'
      }
    } else {
      const docRef = await addDoc(collection(db, "users"), {
        username,
        password
      });
      console.log("user added with ID: ", docRef.id);
      setLoginUser(username)
      loginResult.success = true;
    }
  } catch (e) {
    loginResult.message = 'Something went wrong with adding user: ' + e;
  }

  return loginResult;
};

// export const doAuthLogin = async (provider: AuthProvider) => {
//   const retVal:LoginResultInterface = {success: false};
//   const auth = getAuth();
//   try {
//     const result = await signInWithPopup(auth, provider);
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     // const token = credential.accessToken;
//     setLoginUserFirebase(result.user);
//     retVal.success = true;
//   } catch (e:any) {
//     retVal.message = `${e.code}: ${e.message}`;
//     // const credential = GoogleAuthProvider.credentialFromError(error);
//   }

//   return retVal;
// }

export const signInWithRedirectLabel = 'signInWithRedirect';

export const doAuthLogin = async (provider: AuthProvider) => {
  const auth = getAuth();
  localStorage.setItem(signInWithRedirectLabel, 'true');
  return signInWithRedirect(auth, provider).then(() => {
    return postRedirectSignIn();
  })

}

export const postRedirectSignIn = async () => {
  const retVal:LoginResultInterface = {success: false};
  const auth = getAuth();

  try {
    const result = (await getRedirectResult(auth));
    if (result){
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      setLoginUserFirebase(result.user);
      retVal.success = true;
    } else {
      retVal.message = `There was an arror getting user credentials.`;
    }
  } catch (e:any) {
    retVal.message = `${e.code}: ${e.message}`;
    // const credential = GoogleAuthProvider.credentialFromError(error);
  }

  return retVal;
}


export const googleLogin = ():Promise<LoginResultInterface> => {
  return doAuthLogin(googleProvider);
}

export const fbLogin = ():Promise<LoginResultInterface> => {
  return doAuthLogin(fbProvider);
}


// export const googleLogin = () => {
//   doAuthLogin(googleProvider);
// }

// export const fbLogin = () => {
//   doAuthLogin(fbProvider);
// }

