import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import Homepage from './components/homepage/Homepage'
import Experience from './components/experience/Experience'
import Games from './components/games/Games'
import Blogs from './components/blogs/Blogs'
import Contact from './components/contact/Contact'

function App() {

  return (
  <main>
    
    <Sidebar/>
    <div className="main-content">
      <Navbar/>
      <Homepage/>
      <Experience/>
      <Games/>
      <Blogs/>
      <Contact/>
    </div>

  </main>
  )
}

export default App