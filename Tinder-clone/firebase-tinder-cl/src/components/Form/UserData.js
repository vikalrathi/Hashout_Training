import React, { useState } from 'react'
import db from '../../firebase'
import './UserData.css'
const UserData = () => {
  const [UserName, setUserName] = useState('')
  const [ImgUrl, setImgUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    db.collection('people').add({
      name: UserName,
      url: ImgUrl,
    })
    console.log('e :: ', UserName, 'vvv ::: ', ImgUrl)
    setUserName('')
    setImgUrl('')
  }

  return (
    <div className="container">
      <label>Enter the name:</label>
      <input
        type="text"
        value={UserName}
        required
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <label>Enter the image path:</label>
      <input
        type="text"
        value={ImgUrl}
        required
        onChange={(e) => setImgUrl(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default UserData
