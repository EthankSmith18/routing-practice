import React from 'react'
import Home from './components/Home'
import { Link, Routes, Route } from "react-router-dom";
import Input from './components/Input'
import Colors from './components/Colors'

function App() {
  return (
<Routes>
  <Route path="/Home"  element={<Home />}/>
  <Route path="/:Input"  element={<Input />}/>
  <Route path="/:Word/:Color1/:Color2" element={<Colors />}/>
</Routes>
  )
}

export default App