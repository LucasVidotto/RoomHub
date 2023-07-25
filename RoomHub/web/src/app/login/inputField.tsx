'use client'
import React, { useState } from 'react';

interface Props {
  placeholder: string;
}

const InputField = ({ placeholder }: Props) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div className="w-80 ">
      <fieldset className="relative mb-4">
        <label
          htmlFor="input"
          className={`${
            focused ? 'top-0 text-[10px] text-blue-600 bg-transparent' : 'top-2 text-sm '
          } absolute bg-transparent px-1 text-gray-500 transition-all`}
        >
          {placeholder}
        </label>
        <input
          type="text"
          id="input"
          className="w-full p-2 border-2 border-gray-300 focus:border-blue-500 rounded focus:outline-none shadow-newShadow shadow-red-400"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </fieldset>
    </div>
  );
};

export default InputField;
