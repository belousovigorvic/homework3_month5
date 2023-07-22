import React from 'react'
import classes from './Input.module.css'

const Input = ({ placeholder, type, name, value, onChange }) => {
  return (
    <input
      className={classes.input}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={true}
    />
  )
}

export default Input
