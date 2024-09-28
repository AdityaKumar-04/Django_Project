import React, { useState } from 'react';

export default function Modal({ id, name, description, handleUpdate, closeModal }) {
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedDescription, setUpdatedDescription] = useState(description);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(id, updatedName, updatedDescription);
    closeModal();  // Close the modal after update
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal" open>
        <div className="modal-box">
          <form onSubmit={handleSubmit}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" type="button" onClick={closeModal}>✕</button>
            <h3 className="font-bold text-lg">Update Item: {id}</h3>
            <div className="py-4">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
                className="input input-bordered w-full mb-4"
              />
              <label className="block mb-2">Description</label>
              <textarea
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
                className="textarea textarea-bordered w-full"
              />
            </div>
            <div className="modal-action">
              <button type="submit" className="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
