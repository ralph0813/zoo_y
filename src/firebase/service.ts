import { functions } from './firebase'
import { httpsCallable } from 'firebase/functions'

export const addPosts = httpsCallable(functions, 'addPosts')
export const getPostDetail = httpsCallable(functions, 'getPostDetail')
export const getPosts = httpsCallable(functions, 'getPosts')
