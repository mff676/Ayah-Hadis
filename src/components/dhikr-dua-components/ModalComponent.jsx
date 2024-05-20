import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react';
import { motion } from 'framer-motion';
import React from 'react'
import { IoIosInformationCircleOutline } from 'react-icons/io';

const ModalComponent = ({header, content, source}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <>
<motion.button onClick={onOpen} whileTap={{scale: .7}} className='rounded-full hover:bg-slate-200 p-1' title='info'><IoIosInformationCircleOutline /></motion.button>    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">{header}</ModalHeader>
            <ModalBody className=' pb-10'>
              <p className='text-justify'> 
               {content}<br />({source})
              </p>
            </ModalBody>
          </>
      </ModalContent>
    </Modal>
  </>  )
}

export default ModalComponent