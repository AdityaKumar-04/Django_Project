import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Tostifys from './Tostify'

export default function Crud_api() {
  const [name, setName] = useState()
  const [discription, setDiscription] = useState()
  
  const [toastMessage, setToastMessage] = useState({ message: '', type: '' });
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Create the data object to send in the POST request
    const itemData = {
      name: name,
      description: discription,
    };
    
      // Send POST request to Django API
      try {
        const response = await fetch('http://127.0.0.1:8000/api/items/create/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(itemData),
        });

        if (response.ok) {
          // If the request is successful, clear the input fields
          setName('');
          setDiscription('');
          
          console.log('Item added successfully!');
          setToastMessage({
            message: 'Item added successfully!',
            type: 'success',
          });
          

        } else {
          console.error('Failed to add item');
          setToastMessage({
            message: 'Failed to add item',
            type: 'error',
          });
        }
      } catch (error) {
        console.error('Error:', error);
        setToastMessage({
          message: 'Failed to add item!',
          type: 'error',
        });
      }

  }
  const resetToast = () => {
    setToastMessage({ message: '', type: '' });
  };

  return (
    <div className="w-full min-h-full  rounded-lg text-white  ">
      <h1 className="w-full text-center text-3xl font-semibold font-serif pt-3 pb-5 ">Django Api crud Opration</h1>
      <div className="w-full flex justify-center items-center p-5 pb-5">
        <div className="w-[400px] min-h-[500px] backdrop-blur-sm bg-white/30  rounded-xl ">
          <h3 className="text-center font-serif text-2xl pt-2 pb-2 tracking-widest font-semibold ">Add items</h3>
          <form className="w-full flex flex-col p-5 gap-4 text-white " onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' className='p-2 border-none outline-none rounded-lg' onChange={(e) => setName(e.target.value)} value={name} />
            <textarea name="" id="" cols="30" rows="10" className='p-2 border-none outline-none rounded-lg max-h-fit' placeholder='Discription' onChange={(e) => setDiscription(e.target.value)} value={discription}></textarea>
            <button className="w-full h-fit p-2 bg-neutral-900 rounded-xl text-white font-serif font-semibold tracking-widest" type='submit'>Add</button>
          </form>
          <p className="w-full text-center  font-serif font-semibold "><Link to="/Showdata" >Your Librery</Link></p> 
        </div>
      </div>
      {/* Pass the toast message and type as props to ToastMessage component */}
      <Tostifys message={toastMessage.message} type={toastMessage.type} resetToast={resetToast}/>
    </div>
  )
}



