import React, { useState } from 'react';
import '../../Style/MultilineInput.scss';

function MultilineInput() {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div
      className="multiline-input-container"
      style={{ borderWidth: focused ? 1 : 0, borderColor: focused ? '#0059ff' : 'transparent' }}
    >
      <div
        className={`multiline-input ${value ? '' : 'not-empty'}`}
        contentEditable="true"
        onInput={handleChange}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
      >
        {value ? value : focused?'':'Entrez votre texte...'}
      </div>
    </div>
  );
}

export default MultilineInput;
