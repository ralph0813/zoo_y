import * as React from 'react'
import { useState } from 'react'
import { useUserInfoContext } from '../../context/userContext'
import { setUserDetail } from '../../firebase/service'

// import UseGetUserInfo from '../../hooks/useGetUserInfo'
// import { changeUserInfo, userLogout } from '../../service/commonApi'
// import AvatarUploader from '../../components/uploader/AvatarUploader'

const Profile = () => {
  // const [userInfo] = UseGetUserInfo()
  const {
    state: userInfo,
    dispatch: userInfoDispatch
  } = useUserInfoContext()
  // const userInfo = {
  //   avatar: '',
  //   name: '',
  //   email: '',
  //   about: '',
  //   organization: ''
  // }
  const [modified, setModified] = useState({
    about: {
      modified: false,
      data: ''
    },
    name: {
      modified: false,
      data: ''
    },
    password: {
      modified: false,
      data: '',
      data_: ''
    }
  })
  const [name, setName] = useState(userInfo.uname)
  const [about, setAbout] = useState(userInfo.about)

  const [avatarUrl, setAvatarUrl] = useState(userInfo?.avatar)

  const handleSave = async (k: 'uname' | 'about', v: string) => {
    const keyItem = {} as any
    keyItem[k] = v
    console.log(keyItem)
    await setUserDetail({
      uid: userInfo.uid,
      data: keyItem
    })
    userInfoDispatch({
      type: 'UPDATE',
      data: keyItem
    })
  }

  return (
    <div className="divide-y divide-gray-200 lg:col-span-9 max-w-6xl mx-auto w-full">
      <div className="py-6 px-4 sm:p-6 lg:pb-8">
        <div>
          <h2 className="text-lg leading-6 font-medium text-gray-900">Profile</h2>
          <p className="mt-1 text-sm text-gray-500">
            This information will be displayed publicly so be careful what you share.
          </p>
        </div>

        {/* <div className="mt-6 flex flex-col lg:flex-row"> */}
        {/*   <div className="flex-grow space-y-6"> */}
        {/*     <div> */}
        {/*       <label htmlFor="username" className="block text-sm font-medium text-gray-700"> */}
        {/*         Email */}
        {/*       </label> */}
        {/*       <div className="mt-1 shadow-sm flex"> */}
        {/*         <input */}
        {/*           disabled */}
        {/*           type="email" */}
        {/*           name="email" */}
        {/*           autoComplete="email" */}
        {/*           className="focus:ring-sky-500 focus:border-sky-500 flex-grow block w-full min-w-0 rounded-md sm:text-sm border-gray-300 cursor-not-allowed focus:outline-none focus:ring-brand-light focus:ring-brand-light" */}
        {/*           defaultValue={userInfo?.email} */}
        {/*         /> */}
        {/*       </div> */}
        {/*     </div> */}
        {/*   </div> */}
        {/*   /!* <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0"> *!/ */}
        {/*   /!*   <p className="text-sm font-medium text-gray-700" aria-hidden="true"> *!/ */}
        {/*   /!*     Photo *!/ */}
        {/*   /!*   </p> *!/ */}
        {/*   /!*   /!* <AvatarUploader avatarUrl={avatarUrl} setAvatarUrl={setAvatarUrl} /> *!/ *!/ */}
        {/*   /!* </div> *!/ */}
        {/* </div> */}

        <div className="mt-6 grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              disabled
              type="text"
              name="name"
              autoComplete="given-name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-sky-500 focus:border-sky-500 sm:text-sm focus:outline-none focus:ring-brand-light focus:ring-brand-light cursor-not-allowed"
              defaultValue={userInfo?.userEmail}
            />
          </div>
          <div className="col-span-10 sm:col-span-5">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              autoComplete="given-name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-sky-500 focus:border-sky-500 sm:text-sm focus:outline-none focus:ring-brand-light focus:ring-brand-light"
              defaultValue={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
          </div>
          <div className="col-span-1 sm:col-span-1 pt-6">
            <button className="btn-secondary" onClick={() => {
              handleSave('uname', name)
            }}>
              Save
            </button>
          </div>

          {/* <div className="col-span-12 sm:col-span-6"> */}
          {/*   <label htmlFor="organization" className="block text-sm font-medium text-gray-700"> */}
          {/*     Organization */}
          {/*   </label> */}
          {/*   <input */}
          {/*     type="text" */}
          {/*     name="organization" */}
          {/*     autoComplete="organization" */}
          {/*     className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm focus:outline-none focus:ring-brand-light focus:ring-brand-light" */}
          {/*     defaultValue={userInfo?.organization} */}
          {/*     onChange={(e) => { */}
          {/*       const newVal = { */}
          {/*         modified: true, */}
          {/*         data: e.target.value */}
          {/*       } */}
          {/*       setModified((val) => ({ */}
          {/*         ...val, */}
          {/*         organization: newVal */}
          {/*       })) */}
          {/*     }} */}
          {/*   /> */}
          {/* </div> */}
          {/* <form className="col-span-12 sm:col-span-6"> */}
          {/*   <label htmlFor="last-name" className="block text-sm font-medium text-gray-700"> */}
          {/*     Password */}
          {/*   </label> */}
          {/*   <input */}
          {/*     type="password" */}
          {/*     name="password" */}
          {/*     id="password" */}
          {/*     autoComplete="new-password" */}
          {/*     className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm focus:outline-none focus:ring-brand-light focus:ring-brand-light" */}
          {/*     onChange={(e) => { */}
          {/*       setModified((val) => { */}
          {/*         const newVal = { */}
          {/*           modified: true, */}
          {/*           data: e.target.value, */}
          {/*           data_: val.password.data_ */}
          {/*         } */}
          {/*         return { */}
          {/*           ...val, */}
          {/*           password: newVal */}
          {/*         } */}
          {/*       }) */}
          {/*     }} */}
          {/*   /> */}
          {/* </form> */}

          <form className="col-span-12 sm:col-span-6" hidden={!modified.password.modified}>
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="password_"
              id="password_"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm focus:outline-none focus:ring-brand-light focus:ring-brand-light"
              autoComplete="new-password"
              onChange={(e) => {
                setModified((val) => {
                  const newVal = {
                    modified: true,
                    data_: e.target.value,
                    data: val.password.data
                  }
                  return {
                    ...val,
                    password: newVal
                  }
                })
              }}
            />
          </form>

        </div>
        <div className="pt-6">
          <label htmlFor="about" className="block text-sm font-medium text-gray-700">
            About
          </label>
          <div className="mt-1">
            <textarea
              id="about"
              name="about"
              rows={3}
              className="shadow-sm focus:ring-sky-500 focus:border-sky-500 mt-1 block w-full sm:text-sm border
                    border-gray-300 rounded-md focus:outline-none focus:ring-brand-light focus:ring-brand-light"
              defaultValue={userInfo?.about}
              onChange={(e) => {
                setAbout(e.target.value)
                // const newAbout = {
                //   modified: true,
                //   data: e.target.value
                // }
                // setModified((val) => ({
                //   ...val,
                //   about: newAbout
                // }))
              }}
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Brief description for your profile.
          </p>
        </div>
        <div className="pt-6 flex justify-center">
          <button
            className="btn-primary w-full flex justify-center"
            onClick={() => {
              handleSave('about', about)
            }}
          >
            Save About
          </button>

        </div>
      </div>
    </div>
  )
}

export default Profile
