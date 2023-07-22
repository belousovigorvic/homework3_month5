import React from 'react'
import classes from './Title.module.css'

const Title = ({ children }) => <h1 className={classes.title}>{ children }</h1>

export default Title
