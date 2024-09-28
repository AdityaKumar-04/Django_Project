import React, { useEffect, useState } from 'react';
import Card from './Card';
import Tostify from './Tostify';
import { Link } from 'react-router-dom'
import { RiCloseLargeFill } from 'react-icons/ri';

export default function ShowData() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [toastMessage, setToastMessage] = useState({ message: '', type: '' });
  

  // Function to reset toast after showing it
  const resetToast = () => {
    setToastMessage({ message: '', type: '' });
  };

  // Fetch items from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/items/');
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  // Delete an item from the database and update the state
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/items/delete/${id}/`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setItems(items.filter(item => item.id !== id));
        setToastMessage({ message: 'Item deleted successfully!', type: 'success' });
      } else {
        throw new Error('Failed to delete item');
      }
    } catch (err) {
      setToastMessage({ message: 'Failed to delete item', type: 'error' });
    }
  };
   // Update an item in the database and update the state
   const handleUpdate = async (id, updatedName, updatedDescription) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/items/update/${id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: updatedName,
          description: updatedDescription,
        }),
      });

      if (response.ok) {
        const updatedItem = await response.json();
        setItems(items.map(item => (item.id === id ? updatedItem : item)));
        setToastMessage({ message: 'Item updated successfully!', type: 'success' });
      } else {
        throw new Error('Failed to update item');
      }
    } catch (err) {
      setToastMessage({ message: 'Failed to update item', type: 'error' });
    }
  };


  if (error) return <p>Error: {error}</p>;
  

  return (
    <>
      <div className="absolute top-3 right-6 text-white text-xl"><Link to='/'><RiCloseLargeFill /></Link></div>
      <div className='w-full rounded-2xl min-h-full'>
        <h1 className='text-center text-6xl font-serif font-semibold text-white pt-5'>Data Show</h1>
        <div className="w-full p-5 mt-6 flex justify-start items-center gap-4 flex-wrap">
          {items.map((item, index) => (
            <Card key={index} {...item} handleDelete={handleDelete} handleUpdate={handleUpdate} />
          ))}
        </div>
        <Tostify message={toastMessage.message} type={toastMessage.type} resetToast={resetToast} />
        
      </div>

    </>
  );
}

