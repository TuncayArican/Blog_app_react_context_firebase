import React from 'react'
import {useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>

          {currentUser?.displayName}
      <h1> {currentUser?.email}</h1>
      </div>
  )
}

export default Profile