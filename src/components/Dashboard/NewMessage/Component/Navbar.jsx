import React from 'react'
// import {signOut} from "firebase/auth"
import { auth } from '../../../../Firebse/firebase'
// import { AuthContext } from '../Context/AuthContext'

const Navbar = () => {
//   const {currentUser} = useContext(AuthContext)
const currentUser = auth.currentUser;

  return (
    <div className='navbar'>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        {console.log(currentUser,"fnjshfjsadhfl asdfhjlsakdhf sdhfsadjkfh sadlih fsdif")}
        {/* <button onClick={()=>signOut(auth)}>logout</button> */}
      </div>
    </div>
  )
}

export default Navbar

