import React, { useState, useContext } from 'react'
import classes from './CreatePost.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Title from '../../Components/Title/Title'
import Input from '../../Components/Input/Input'

const CreatePost = () => {
  const [postData, setPostData] = useState({
    title: '',
    body: '',
    tags: '',
    userId: ''
  })

  const navigate = useNavigate()

  const handlePostData = () => {
    axios
      .post('https://dummyjson.com/posts/add', postData)
      .then(response => {
        console.log(response.data)
        console.log('Данные отправлены!')
        navigate('/')
      })
      .catch(error => {
        console.error('Ошибка', error)
      })
  }

  const handleSubmit = e => {
    e.preventDefault()
    handlePostData()
  }

  const handleInputChange = e => {
    const { name, value } = e.target
    setPostData({ ...postData, [name]: value })
  }

  // Описание каждого инпута
  const inputFields = [
    { name: 'title', type: 'text', placeholder: 'Title' },
    { name: 'body', type: 'text', placeholder: 'Body' },
    { name: 'tags', type: 'text', placeholder: 'Tags' },
    { name: 'userId', type: 'number', placeholder: 'User Id' }
  ]

  return (
    <div className={classes.CreatePost}>
      <Title>Create Post</Title>
      <form className={classes.form} onSubmit={handleSubmit}>
        {inputFields.map(field => (
          <Input
            key={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={postData[field.name]}
            onChange={handleInputChange}
          />
        ))}
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default CreatePost
