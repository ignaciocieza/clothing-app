import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export async function authSignUp({ email, password }) {
    console.log({ email, password })
    await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            console.log('User account created!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

            console.error(error);
        });
}

export async function authSignIn({ email, password }) {
    console.log({ email, password })
    const ref = await auth().signInWithEmailAndPassword(email, password);
    return { email: ref.user.email, uid: ref.user.uid };
    // .then((ref) => {
    //     console.log('signed in!', ref);
    //     return ref;
    // })
    // .catch(error => {
    //     if (error.code === 'auth/email-already-in-use') {
    //         console.log('That email address is already in use!');
    //     }
    //     if (error.code === 'auth/invalid-email') {
    //         console.log('That email address is invalid!');
    //     }
    //     console.error(error);
    // });
}

export async function authSignOut() {
    await auth()
        .signOut()
        .then(() => console.log('User signed out!'));
}

export async function createCollection() {
    const usersCollection = firestore().collection('Users');
}
