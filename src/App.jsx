import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Container from './Components/Container/Container'
import Posts from './Pages/Posts/Posts'
import Layout from './Components/Layout/Layout'
import CreatePost from './Pages/CreatePost/CreatePost'
import { createContext, useState } from 'react'
import Theme from './Components/Theme/Theme'

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState(false)

  return (
    <div className={theme ? 'dark' : ''}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Container>
          <BrowserRouter>
            <Routes>
              <Route path={'/'} element={<Layout />}>
                <Route path={'/'} element={<Posts />} />
                <Route path={'/create-post'} element={<CreatePost />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <Theme />
        </Container>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
