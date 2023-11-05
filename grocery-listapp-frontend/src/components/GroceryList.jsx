import React from 'react';
import Check from "../assets/checkList.svg";

const GroceryList = ({ items, onMarkDone, onEdit, onDelete, onPhotoUpload, editIndex }) => {
  return (
    <div>
      <div className='CheckListss'>
        <img src={Check} alt='check List' className='CheckList' />
        <h2>Grocery List</h2>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="Kblee">
            <input
              className="Vblee"
              type="checkbox"
              onChange={() => onMarkDone(index)}
            />
            <span className="line-through">{item.name}</span>
            {item.description && <p className="ItemNames">({item.description})</p>}
            {editIndex === index ? (
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => onPhotoUpload(index, event)}
                />
              </div>
            ) : (
              <>
                <button className='EditButton' onClick={() => onEdit(index)}>
                  Edit
                </button>
                <button className='DeleteButton' onClick={() => onDelete(index)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
