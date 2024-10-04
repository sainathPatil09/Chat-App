import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import { useAuth } from './context/AuthProvider'
import Left from './LeftPart/Left'
import Right from './RightPart/Right'
import { Navigate, Route, Routes } from 'react-router-dom'
import  { Toaster } from 'react-hot-toast';

function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)
  return (
    <>
      {/* <div className='flex h-screen'>

    <Left/>
    <Right/>
    </div> */}

      <Routes>
        <Route path='/' element={
          authUser ? (
            <div className='flex h-screen'>

              <Left />
              <Right />
              {/* <Loading/> */}
            </div>
          ) : (
            <Navigate to={'/login'} />
          )
        }
        />

        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
      </Routes>

      <Toaster />


      {/* <Signup /> */}
      {/* <Login/> */}
    </>
  )
}

export default App
