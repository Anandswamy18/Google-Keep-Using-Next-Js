"use client"
import React from 'react'
import Sidebar from '../Component/Header/Sidebar/Sidebar'
import NotesContainer from '../Component/notes/NoteContainer'



const Dashboard = () => {
  
  return (
    <div>
       
        <Sidebar/>
        <NotesContainer/>
    </div>
  )
}

export default Dashboard