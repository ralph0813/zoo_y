import { functions } from './firebase'
import { httpsCallable } from 'firebase/functions'

export const addPosts = httpsCallable(functions, 'addPosts')
export const getPostDetail = httpsCallable(functions, 'getPostDetail')
export const getPosts = httpsCallable(functions, 'getPosts')

export const getUserDetail = httpsCallable(functions, 'getUserDetail')
export const setUserDetail = httpsCallable(functions, 'setUserDetail')
export const allowPost = httpsCallable(functions, 'allowPost')
export const addThreads = httpsCallable(functions, 'addThreads')
export const getThreadsDetail = httpsCallable(functions, 'getThreadsDetail')
export const doThumbUp = httpsCallable(functions, 'thumbUp')
export const getAllPosts = httpsCallable(functions, 'getAllPosts')
export const getUnCheckedPosts = httpsCallable(functions, 'getUnCheckedPosts')
export const getAllUsers = httpsCallable(functions, 'getAllUsers')
