// import React, { useState } from 'react';

// const EditItem = ({ item, onEdit, editIndex, onPhotoUpload }) => {
//   const [currentItem, setCurrentItem] = useState(item.name);
//   const [currentDescription, setCurrentDescription] = useState(item.description || '');

//   const handleSave = () => {
//     onEdit(currentItem, currentDescription);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Item Name"
//         value={currentItem}
//         onChange={(e) => setCurrentItem(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Description"
//         value={currentDescription}
//         onChange={(e) => setCurrentDescription(e.target.value)}
//       />
//       <button onClick={handleSave}>Save</button>
//       <button onClick={() => onPhotoUpload(editIndex)}>Upload Photo</button>
//     </div>
//   );
// };

// export default EditItem;
