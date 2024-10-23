
'use client'
// import { useContext } from 'react';
import MyContext from '../store/MyContext';
const Footer = () => {

        //Getting the global dark mode state from contex store
        // const { darkMode, setDarkMode } = useContext(MyContext);

  return (
    <div className='bg-white dark:bg-black h-36 justify-center'>
        <p className='text-black dark:text-white text-center'>cryptonest@2024</p>
      
    </div>
  )
}

export default Footer
