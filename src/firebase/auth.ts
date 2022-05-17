import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  setPersistence,
  signOut,
  browserSessionPersistence
} from 'firebase/auth'
import { auth } from './firebase'

export async function signUp(email: string, password: string) {
  await createUserWithEmailAndPassword(auth, email, password)
  if (auth.currentUser) {
    await sendEmailVerification(auth.currentUser)
  }
  return true
}

export async function signIn(email: string, password: string) {
  // save cookies for staying logged in
  await setPersistence(auth, browserSessionPersistence)

  return await signInWithEmailAndPassword(auth, email, password)
}

export async function logOut() {
  return await signOut(auth)
}
