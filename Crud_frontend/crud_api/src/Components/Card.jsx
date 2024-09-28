import React, { useState } from 'react'
import { IoTrashBin } from 'react-icons/io5'
import { MdOutlineBrowserUpdated } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Modal from './Modal'
// import Modal from './Modal' 

export default function Card({ id, name, description, handleDelete, handleUpdate }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='w-[350px] min-h-[200px] border rounded-md p-6 flex flex-col justify-between shadow-md shadow-white' key={id}>
      <div className="text-white">
        <h5 className="text-[20px] font-serif font-semibold pb-3 ">{name}</h5>
        <p className="text-[15px]">{description}</p>
      </div>
      <div className=" flex justify-end items-center gap-3 text-xl text-white ">
        <button className="btn"><Link href="" onClick={() => handleDelete(id)}><IoTrashBin /></Link></button>
        <Link href="" ></Link>
        <button className="btn" onClick={openModal}><MdOutlineBrowserUpdated /></button>
        {isModalOpen && (
        <Modal id={id} name={name} description={description} handleUpdate={handleUpdate} closeModal={closeModal} />
      )}

      </div>
    </div>
  )
}
