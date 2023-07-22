import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../../App'

const Theme = () => {
  const [theme, setTheme] = useContext(ThemeContext)

  useEffect(() => {
    // Загрузка состояния checked чекбокса из LocalStorage при монтировании компонента
    const savedCheckedValue = localStorage.getItem('checked')
    if (savedCheckedValue !== null) {
      setTheme(JSON.parse(savedCheckedValue))
    }
  }, [])

  useEffect(() => {
    // Сохранение состояния checked чекбокса в LocalStorage при его изменении
    localStorage.setItem('checked', JSON.stringify(theme))
  }, [theme])

  return (
    <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
      <p>Dark Mode</p>
      <input
        type="checkbox"
        checked={theme} // Привязываем значение checked к состоянию theme
        onChange={() => setTheme(prev => !prev)} // Обновляем состояние theme при изменении чекбокса
      />
    </div>
  )
}

export default Theme
