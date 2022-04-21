import React, { useEffect, useState } from 'react'
import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from '@firebase/firestore'
import { db } from './firebase'

interface User {
  uname: string
  age: number
}

interface User_id extends User {
  id: string
}

function App() {
  const [users, setUsers] = useState<User_id[] | null>(null)
  const [newName, setNewName] = useState('')
  const [newAge, setNewAge] = useState('')

  const useCollectionRef = collection(db, 'users')

  const createUser = async () => {
    const newUser: User = {
      uname: newName,
      age: Number(newAge)
    }
    await addDoc(useCollectionRef, newUser)
  }

  const updateUser = async (id: string, age: number) => {
    const userDoc = doc(db, 'users', id)
    await updateDoc(userDoc, { age: age + 1 })
  }

  const delUser = async (id: string) => {
    const userDoc = doc(db, 'users', id)
    await deleteDoc(userDoc)
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(useCollectionRef)
      setUsers(data.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      })) as User_id[])
    }
    getUsers()
  }, [])

  return (
    <div className="p-20">
      <div className="space-x-2">
        <input
          className="outline-blue-700 outline mx-1"
          type="text"
          value={newName}
          onChange={(e) => {
            setNewName(e.target.value)
          }}
        />
        <input
          className="outline-blue-700 outline mx-1"
          type="number"
          value={newAge}
          onChange={(e) => {
            setNewAge(e.target.value)
          }}
        />
        <button className="btn" onClick={createUser}>create</button>
      </div>
      <div className="py-5">
        {users && users.map((user) => (
          <div key={user.id} className="flex space-x-2">
            <div>{user.uname}</div>
            <div>{user.age}</div>
            <button onClick={() => {
              updateUser(user.id, user.age)
            }}>
              update
            </button>

            <button onClick={() => {
              delUser(user.id)
            }}>
              del
            </button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default App
