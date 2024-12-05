import { useState, useEffect } from 'react'
import AppContext from './components/AppContext'
import { User } from './lib/types'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  const [user, setUser] = useState<User>(new User())

  useEffect(() => {
    const user = {
      USERID: 1234,
      USERNAME: 'Tarun Kumar',
      USERFULLNAME: 'Tarun Kumar',
      USEREMAIL: 'tkumar@gmail.com',
      USERPHONE_1: '978-631-6852',
      USERPHONE_MOBILE: '978-631-6852',
      DATECREATED: new Date(),
      AVATAR: ''
    }
    setUser(user)
  },[])

  return (
    <AppContext.Provider value={
      {
        userData: user
      }
    }>
      <div className="flex flex-col w-full">
        <NavBar />
        <div className="h-screen flex flex-col">
          <div className='m-2 md:mx-4'>
            <Outlet />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App
