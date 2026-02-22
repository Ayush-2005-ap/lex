import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import ChatBotContainer from './Components/Chatbot/ChatBotContainer.jsx'


const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* <ChatBotContainer /> */}
    </>
  )
}

export default Layout
