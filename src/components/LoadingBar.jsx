import { Spinner } from '@nextui-org/react'
import React from 'react'

const LoadingBar = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <Spinner color='success' />
    </div>
  )
}

export default LoadingBar