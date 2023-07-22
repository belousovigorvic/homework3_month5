import React, { useState, useEffect } from 'react'
import axios from 'axios'
import classes from './Posts.module.css'
import Title from '../../Components/Title/Title'

const Posts = () => {
  const URL = 'https://dummyjson.com/posts'
  const [data, setData] = useState([])
  const [editedPost, setEditedPost] = useState('')

  // Загрузка данных при монтировании
  useEffect(() => {
    axios
      .get(URL)
      .then(response => {
        setData(response.data), console.log('Данные загружены')
      })
      .catch(error => console.log('Ошибка', error.message))
  }, [])

  // Удаление поста
  const deletePostClick = index => {
    axios
      .delete(`https://dummyjson.com/posts/${index + 1}`)
      .then(response => {
        console.log('Пост №', response.data.id, 'удален')
      })
      .catch(error => console.log('Ошибка', error.message))
  }

  // Редактирование поста
  const editPostClick = (post, index) => {
    const editedTitlePromt = prompt(`Edit title: ${post.title}`);
    if (editedTitlePromt !== null) {
      setEditedPost(editedTitlePromt);
      axios
        .put(`https://dummyjson.com/posts/${index + 1}`, { title: editedTitlePromt }) // Отправляем объект с обновленным заголовком
        .then(response => {
          console.log('Пост №', response.data.id, 'отредактирован');
        })
        .catch(error => console.log('Ошибка', error.message));
    } else {
      // Обработка случая, когда пользователь отменил редактирование
      console.log('Редактирование отменено');
    }
  };

  return (
    <div className={classes.posts}>
      <Title>Posts</Title>
      {data.posts ? (
        data.posts.map((post, index) => (
          <div className={classes.post} key={post.id}>
            <div
              className={classes.title__wrapper}
              onClick={() => editPostClick(post, index)}
            >
              <h2 className={classes.title}>{post.title}</h2>
              <span>Edit &#9998;</span>
            </div>
            <p className={classes.body}>{post.body}</p>
            <div>
              <span>User Id: </span>
              <span>{post.userId}</span>
            </div>
            <p>Tags: </p>
            <div className={classes.post__bottom}>
              <ul className={classes.tags}>
                {post.tags.map((tag, id) => (
                  <li className={classes.tag} key={id}>
                    {tag}
                  </li>
                ))}
              </ul>
              <div>
                <span>&#128077;</span>
                <span>{post.reactions}</span>
              </div>
            </div>
            <span
              className={classes.delete}
              onClick={() => {
                deletePostClick(index)
              }}
            >
              &#9747;
            </span>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default Posts
