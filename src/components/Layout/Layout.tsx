import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading } from '../../context/Reducer'
import CustomCursor from '../CustomCursor'
import Loader from '../Loader/Loader'
import styles from './style.module.scss'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state: any) => state.app.isLoading)

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideLoading())
    }, 1000)
  })

  return (
    <div>
      {!isLoading && <CustomCursor />}
      <div className={styles.background_noise} style={{ backgroundImage: "url('/noise-transparent.png')" }}></div>

      <AnimatePresence exitBeforeEnter>
        {isLoading ? (
          <motion.div
            key='loader'
            initial={{ opacity: 0, width: '0' }}
            animate={{ opacity: 1, width: '100%' }}
            exit={{ opacity: 0, width: '40%' }}
            transition={{ type: 'linear' }}>
            <Loader />
          </motion.div>
        ) : (
          <div className={styles.children}>{children}</div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Layout
