import { TbBrandGithub, TbBrandLinkedin, TbBrandTelegram } from 'react-icons/tb'
import { useAppContext } from '../../context/AppContext'
import styles from './style.module.scss'

const Sidebar = () => {
  const { state, dispatch } = useAppContext()

  const changeCursorType = (value: string) => {
    return dispatch({ type: 'SET_CURSOR', payload: value })
  }

  return (
    <div className={styles.sidebar}>
      <div></div>
      <div className={styles.sidebar__main}>
        <h3 className={styles.sidebar__title}>Mikhail Baev</h3>
        <p className={styles.sidebar__text}>Frontend Developer</p>
      </div>
      <div className={styles.sidebar__links}>
        <a
          href='https://github.com/dezzerlol'
          rel='noreferrer'
          target='_blank'
          onMouseEnter={() => changeCursorType('hamburger')}
          onMouseLeave={() => changeCursorType('default')}>
          <TbBrandGithub fontSize='2.441rem' />
        </a>
        <a
          href='https://t.me/dezzerlol'
          rel='noreferrer'
          target='_blank'
          onMouseEnter={() => changeCursorType('hamburger')}
          onMouseLeave={() => changeCursorType('default')}>
          <TbBrandTelegram fontSize='2.441rem' />
        </a>
        <a
          href='https://www.linkedin.com/in/mikhail-baev1/'
          rel='noreferrer'
          target='_blank'
          onMouseEnter={() => changeCursorType('hamburger')}
          onMouseLeave={() => changeCursorType('default')}>
          <TbBrandLinkedin fontSize='2.441rem' />
        </a>
      </div>
    </div>
  )
}

export default Sidebar