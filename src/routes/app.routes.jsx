import { Routes, Route } from "react-router-dom";

import { Create } from '../pages/Create'
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { Edit } from '../pages/Edit'


export function AppRoutes() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create />} />
      <Route path='/edit/:id' element={<Edit />} />
      <Route path='/details/:id' element={<Details />} />
    </Routes>
  )
  
}