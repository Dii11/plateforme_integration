import React, { useState } from 'react'
import '../../Style/input.scss'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function InputText({
  password,
  placeholder,
  error = '',
  onFocus = ()=>{},
  ...props
}) {
  const [hidePwd, setHidePwd] = useState(false);
  const [focused, setFocused] = useState(false);
  return (
    <div className='inputView'>
      <div className='inputcontent' style={{borderWidth: 1, borderColor:  error ? '#ff3434' : focused ? '#0059ff':'transparent'}} >
        <input
          type={password ? !hidePwd ? 'password' : 'text' : 'text'}
          placeholder={placeholder}
          style={{ width: password ? '88%' : '100%' }}
          onFocus={() => {
            setFocused(true)
            onFocus()
          }}
          onBlur={() => {
            setFocused(false)
          }}
          {...props}
        />
        {password ? hidePwd ?
          <FaEye size={18} color='grey' onClick={() => setHidePwd(!hidePwd)} style={{cursor:'pointer'}}/> :
          <FaEyeSlash size={18} color='grey' onClick={() => setHidePwd(!hidePwd)} style={{cursor:'pointer'}}/>
          : null
        }
      </div>
      {error && <span className='error'>{error}</span>}
    </div>
  )
}

export default InputText;