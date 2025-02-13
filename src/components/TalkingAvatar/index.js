import React from 'react'
import './index.css'

function TalkingAvatar({avatarUrl}) {
  return (
    <div>
      <h3>Here is your Talking Avatar:</h3>
      <video controls>
        <source src={avatarUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default TalkingAvatar
