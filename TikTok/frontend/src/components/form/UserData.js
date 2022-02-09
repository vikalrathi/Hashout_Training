import React, { useState } from 'react'

import './UserData.css'
const UserData = () => {
  const [Url, setUrl] = useState('')
  const [Channel, setChannel] = useState('')
  const [Description, setDescription] = useState('')
  const [Song, setSong] = useState('')
  const [Likes, setLikes] = useState('')
  const [Shares, setShares] = useState('')
  const [Messages, setMessages] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let databody = {
      url: Url,
      channel: Channel,
      description: Description,
      song: Song,
      likes: Likes,
      shares: Shares,
      messages: Messages,
    }

    fetch('https://tiktok-back-end-hashout.herokuapp.com/v2/posts', {
      method: 'POST',
      body: JSON.stringify(databody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log('data :::: ', data))
    setUrl('')
    setChannel('')
    setDescription('')
    setSong('')
    setLikes('')
    setShares('')
    setMessages('')
  }
  return (
    <div className="container">
      <label>Enter the url:</label>
      <input
        type="text"
        value={Url}
        required
        onChange={(e) => setUrl(e.target.value)}
      />
      <br />
      <label>Enter the Channel :</label>
      <input
        type="text"
        value={Channel}
        required
        onChange={(e) => setChannel(e.target.value)}
      />
      <br />
      <label>Enter the Description :</label>
      <input
        type="text"
        value={Description}
        required
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <label>Enter the Song :</label>
      <input
        type="text"
        value={Song}
        required
        onChange={(e) => setSong(e.target.value)}
      />
      <br />
      <label>Enter the Likes :</label>
      <input
        type="text"
        value={Likes}
        required
        onChange={(e) => setLikes(e.target.value)}
      />
      <br />
      <label>Enter the Shares :</label>
      <input
        type="text"
        value={Shares}
        required
        onChange={(e) => setShares(e.target.value)}
      />
      <br />
      <label>Enter the Messages :</label>
      <input
        type="text"
        value={Messages}
        required
        onChange={(e) => setMessages(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default UserData
