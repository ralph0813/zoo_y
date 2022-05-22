import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import {auth, firestore} from 'firebase-admin'
import {CallableContext} from 'firebase-functions/lib/common/providers/https'
import UserRecord = auth.UserRecord
import Timestamp = firestore.Timestamp

admin.initializeApp()
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info('Hello logs!', { structuredData: true })
//   response.send('Hello from Firebase!')
// })

exports.newUserSignUp = functions.auth.user()
  .onCreate((user: UserRecord) => {
    admin.firestore()
      .collection('users')
      .doc(user.uid)
      .set({
        uname: user.email?.split('@')[0],
        email: user.email,
        isAdmin: false,
        avatar: '',
        about: '',
      })
  })

exports.UserDeleted = functions.auth.user()
  .onDelete((user: UserRecord) => {
    const doc = admin.firestore()
      .collection('users')
      .doc(user.uid)
    doc.delete()
  })

// this function handle add new posts
// it will add the post to the posts collection
// and add the post docID to the author's doc key:posts
export interface PostData {
  title: string,
  body: string,
  bodyRich: string,
  createTime: string,
}

exports.addPosts = functions.https
  .onCall(async (data: PostData, context: CallableContext) => {
    if (!context.auth) {
      throw new functions.https.HttpsError('unauthenticated',
        'only authenticated user can send posts')
    } else {
      const postAddRes = await admin.firestore()
        .collection('posts')
        .add({
          uid: context.auth.uid,
          title: data.title,
          body: data.body,
          bodyRich: data.bodyRich,
          // Timestamp to Date => t.toDate();
          createTime: Timestamp.fromDate(new Date(data.createTime)),
          follows: [],
          likes: 0,
          passed: false,
          checked: false,
        })
      const postId = postAddRes.id
      const userDocRef = admin.firestore()
        .collection('users')
        .doc(context.auth.uid)
      const userDoc = await userDocRef.get()
      const docData = userDoc.data()
      const posts = docData?.posts ? [...docData.posts] : []
      posts.push(postId)
      await userDocRef.set({'posts': posts}, {merge: true})
      return postId
    }
  })

exports.addThreads = functions.https
  .onCall(async (data: any, context: CallableContext) => {
    if (!context.auth) {
      throw new functions.https.HttpsError('unauthenticated',
        'only authenticated user can send posts')
    } else {
      const postAddRes = await admin.firestore()
        .collection('threads')
        .add({
          uid: context.auth.uid,
          body: data.body,
          bodyRich: data.bodyRich,
          // Timestamp to Date => t.toDate();
          createTime: Timestamp.fromDate(new Date(data.createTime)),
          likes: 0,
          passed: false,
          checked: false,
        })
      const postId = postAddRes.id
      const userDocRef = admin.firestore()
        .collection('users')
        .doc(context.auth.uid)
      const userDoc = await userDocRef.get()
      const docData = userDoc.data()
      const threads = docData?.threads ? [...docData.threads] : []
      threads.push(postId)
      await userDocRef.set({'threads': threads}, {merge: true})

      const postDocRef = admin.firestore()
        .collection('posts')
        .doc(data.pid)
      const postDoc = await postDocRef.get()
      const postData = postDoc.data() as any
      const follows = postData?.follows ? [...postData.follows] : []
      follows.push(postId)
      await postDocRef.set({'follows': follows}, {merge: true})

      return postId
    }
  })


exports.getUserDetail = functions.https
  .onCall(async ({uid}: { uid: string }, context: CallableContext) => {
    const postDocRef = admin.firestore()
      .collection('users')
      .doc(uid)
    const postDoc = await postDocRef.get()
    return postDoc.data()
  })

exports.setUserDetail = functions.https
  .onCall(async ({
    uid,
    data,
  }: { uid: string, data: any }, context: CallableContext) => {
    const postDocRef = admin.firestore()
      .collection('users')
      .doc(uid)
    await postDocRef.set(data, {merge: true})
    return true
  })

exports.allowPost = functions.https
  .onCall(async ({
    pid,
    passed,
  }: { pid: string, passed: boolean }, context: CallableContext) => {
    const postDocRef = admin.firestore()
      .collection('posts')
      .doc(pid)
    await postDocRef.set({
      passed: passed,
      checked: true,
    }, {merge: true})
    return true
  })


exports.getPostDetail = functions.https
  .onCall(async ({postId}: { postId: string }, context: CallableContext) => {
    const postDocRef = admin.firestore()
      .collection('posts')
      .doc(postId)
    const postDoc = await postDocRef.get()
    const data = postDoc.data() as any
    data.createTime = data.createTime.toDate()
      .toISOString()
    const uid = data['uid']
    let newData = data
    const userDoc = admin.firestore()
      .collection('users')
      .doc(uid)
    const userInfo = await userDoc.get()
    const userData = userInfo.data() as any
    newData = {
      ...newData,
      uname: userData['uname'],
      avatar: userData['avatar'],
      about: userData['about'],
    }
    return newData
  })

exports.getPosts = functions.https
  .onCall(async (data, context: CallableContext) => {
    const postDocRef = admin.firestore()
      .collection('posts')
      .where('passed', '==', true)
      // .orderBy('createTime')
      .limit(100)
    const snapshot = await postDocRef.get()
    const list: { id: string; data: firestore.DocumentData }[] = []
    snapshot.forEach((doc) => {
      list.push({
        id: doc.id,
        data: doc.data(),
      })
    })
    const newList = list.map(async (data) => {
      const uid = data.data['uid']
      let newData = data.data
      const userDoc = admin.firestore()
        .collection('users')
        .doc(uid)
      const userInfo = await userDoc.get()
      const userData = userInfo.data() as any
      newData = {
        ...newData,
        uname: userData['uname'],
        avatar: userData['avatar'],
        about: userData['about'],
        createTime: newData.createTime.toDate()
          .toISOString(),
      }
      return {
        id: data.id,
        data: newData,
      }
    })
    return await Promise.all(newList)
      .then((res) => {
        return res
      })
  })


exports.getThreadsDetail = functions.https
  .onCall(async ({pid}, context: CallableContext) => {
    const postDocRef = admin.firestore()
      .collection('threads')
      .doc(pid)
    const postDoc = await postDocRef.get()
    const data = postDoc.data() as any
    data.createTime = data.createTime.toDate()
      .toISOString()
    const uid = data['uid']
    let newData = data
    const userDoc = admin.firestore()
      .collection('users')
      .doc(uid)
    const userInfo = await userDoc.get()
    const userData = userInfo.data() as any
    newData = {
      ...newData,
      uname: userData['uname'],
      avatar: userData['avatar'],
      about: userData['about'],
    }
    return newData
  })
