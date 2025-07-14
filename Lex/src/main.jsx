import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Editor from './Components/Editor/Editor.jsx'
import Submission from './Components/Submission/Submission.jsx'
import Ethical from './Components/Ethical/Ethical.jsx'
import Indexing from './Components/Indexing/Indexing.jsx'
import About from './Components/About/About.jsx'
import Archives from './Components/Archives/Archives.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='archives' element={<Archives/>}/>
      <Route path='editorial-board' element={<Editor/>}/>
      <Route path='submission-guidelines' element={<Submission/>}/>
      <Route path='ethical' element={<Ethical/>}/>
      <Route path='indexing' element={<Indexing/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
