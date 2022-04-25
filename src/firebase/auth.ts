import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  setPersistence,
  signOut,
  browserSessionPersistence
} from 'firebase/auth'
import { auth } from './firebase'

export async function signUp(email: string, password: string) {
  await createUserWithEmailAndPassword(auth, email, password)
  console.log(auth.currentUser)
  if (auth.currentUser) {
    await sendEmailVerification(auth.currentUser)
  }
  return true
}

export async function signIn(email: string, password: string) {

  await setPersistence(auth, browserSessionPersistence)
  return await signInWithEmailAndPassword(auth, email, password)
}

export async function logOut() {
  return await signOut(auth)
}

export async function updateUser(data: { displayName?: string, photoURL?: string }) {
  if (auth.currentUser) {
    return await updateProfile(auth.currentUser, data)
  }
}
