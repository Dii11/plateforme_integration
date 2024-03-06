import React from 'react';
import '../../Style/pub.scss';

function Comment({
    profil,
    username,
    contenu,
}) {
  return (
    <div className='commentContainer'>
          <img src={profil} alt="pdp" />
          <div className="comment">
              <span>{username}</span>
              <div>{contenu}</div>
          </div>
    </div>
  )
}

export default Comment
