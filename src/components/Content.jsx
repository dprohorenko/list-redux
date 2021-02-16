import React, { useState, useEffect } from 'react'

export const Content = ({ strArr, addStr, isAddDisabled, setAddDisabled, removeStr }) => {
  const [list, setList] = useState(strArr || [])

  const handleAdd = () => {
    if (!isAddDisabled) {
      setAddDisabled()
      setTimeout(() => {
        setAddDisabled()
      }, 5000)
      const generateStr = Math.random().toString(36).substring(2).slice(0, 10)
      addStr(generateStr)
    }
  }

  const handleRemove = () => {
    const randomIndex = Math.floor(Math.random() * Math.floor(list.length))
    removeStr(randomIndex)
  }

  const handleRemoveBy = (index) => {
    removeStr(index)
  }

  useEffect(() => {
    setList(strArr)
  }, [strArr])

  return (
    <div>
      <ul>
        {list.map((el, index) => (
          <li key={el}>
            {el}
            <span className='remove' onClick={() => handleRemoveBy(index)}>
              x
            </span>
          </li>
        ))}
      </ul>
      <button className='button' onClick={handleAdd}>
        Add
      </button>
      <button className='button' onClick={handleRemove}>
        Remove
      </button>
    </div>
  )
}
