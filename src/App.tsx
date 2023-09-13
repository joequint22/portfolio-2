import { useState, useEffect } from 'react'
import './App.css'
import Nav from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

// type Data = {
//   [key: string]: unknown;
// }

function App() {

  
  // const [githubData, setGithubData] = useState<Data[]>([])
  // const [githubUser, setGithubUser] = useState<string>("joequint22")
  // const [projects, setProjects] = useState<object[]>([])

  // const fetchData = () => {
  //       fetch(`http://api.github.com/users/${githubUser}`)
  //       .then(res => res.json())
  //       .then(data => setGithubData(data))            
  //     }

  //     useEffect(() => {
  //         fetchData()
  //     }, [])
  

  //     const repos = githubData.public_repos
  
  //     console.log(repos)
 
  
  return (
    <>
        <div className="App px-10 bg-slate-400 min-h-screen">
            <Nav />
            <Main />
            <Footer />
        </div>
    </>
  )
}

export default App
