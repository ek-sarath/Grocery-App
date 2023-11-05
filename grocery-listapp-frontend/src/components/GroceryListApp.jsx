import React, { useState } from 'react';
import GroceryList from './GroceryList';
import DoneList from './DoneList';

const GroceryListApp = () => {
  const [groceries, setGroceries] = useState([]);
  const [doneItems, setDoneItems] = useState([]);
  const [currentItem, setCurrentItem] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [photos, setPhotos] = useState([]);

  const handleAddItem = () => {
    if (editIndex !== null) {
      groceries[editIndex] = {
        name: currentItem,
        description: currentDescription,
        photo: photos[editIndex] || null,
      };
      setEditIndex(null);
      setPhotos((prevPhotos) => {
        const updatedPhotos = [...prevPhotos];
        updatedPhotos[editIndex] = null;
        return updatedPhotos;
      });
    } else {
      setGroceries([...groceries, { name: currentItem, description: currentDescription, photo: null }]);
      setPhotos([...photos, null]);
    }
    setCurrentItem('');
    setCurrentDescription('');
  };

  const handleMarkDone = (index) => {
    const doneItem = groceries[index];
    setDoneItems([...doneItems, doneItem]);
    setGroceries(groceries.filter((_, i) => i !== index));
    const updatedPhotos = [...photos];
    updatedPhotos.splice(index, 1);
    setPhotos(updatedPhotos);
  };

  const handleEdit = (index) => {
    const itemToEdit = groceries[index];
    setCurrentItem(itemToEdit.name);
    setCurrentDescription(itemToEdit.description || '');
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setGroceries(groceries.filter((_, i) => i !== index));
    const updatedPhotos = [...photos];
    updatedPhotos.splice(index, 1);
    setPhotos(updatedPhotos);
  };

  const handlePhotoUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const updatedPhotos = [...photos];
      updatedPhotos[index] = URL.createObjectURL(file);
      setPhotos(updatedPhotos);
    }
  };

  return (
    <div>
      <h1>Grocery List</h1>
      <div className='Items'>
        <input
          className="ItemName"
          type="text"
          placeholder="Item Name (e.g. Atta)"
          value={currentItem}
          onChange={(e) => setCurrentItem(e.target.value)}
        />
        <input
          className="Description"
          type="text"
          placeholder="Description (e.g. 1 Kg)"
          value={currentDescription}
          onChange={(e) => setCurrentDescription(e.target.value)}
        />
        <button onClick={handleAddItem} className="AddButton">
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>

      <div className='container'>
        <div className='grocery-list'>
          <GroceryList
            items={groceries}
            onMarkDone={handleMarkDone}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onPhotoUpload={handlePhotoUpload}
            editIndex={editIndex}
          />
        </div>
        <div className='done-list'>
          <DoneList items={doneItems} />
        </div>
      </div>
    </div>
  );
};

export default GroceryListApp;
