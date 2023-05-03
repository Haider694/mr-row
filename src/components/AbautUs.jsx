import React from 'react'
import { NavLink, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function AbautUs() {
    <Route path='/signin' element={<SignIn />} />
  return (
    <div>
        <NavLink to='/signin'><p className='text-lg'>Sign In</p></NavLink>
    </div>
  )
}
