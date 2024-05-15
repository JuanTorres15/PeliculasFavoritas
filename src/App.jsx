import { useState } from 'react'
import './App.css'
import {MyRoutes} from "./routers/routes"

function App() {

  return (
    <div>
      <header>
          <h1>🍿Peliculas Favoritas</h1>
          <p>Juan Torres</p>
      </header>
      <MyRoutes/>
      <footer>
        <h6>Juan Torres, derechos reservados para practicar ReactJS</h6>
      </footer>
    </div>

  )
}

export default App
