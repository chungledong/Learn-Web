import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserTitle from './components/UserTitle.jsx'
import GitHubUser from './components/GitHubUser.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>User Profile</h1>
        <UserTitle/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className='App'>
        <GitHubUser />
      </div>
    </>
  )
}

export default App
