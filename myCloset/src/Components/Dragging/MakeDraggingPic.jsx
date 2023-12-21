import React from 'react'
import Draggable from 'react-draggable';

export default function MakeDraggingPic({img}) {
    const handleDrag = (e, ui) => {
        // Handle drag events if needed
        console.log('Event: ', e);
        console.log('Data: ', ui);
      };
      return (
        <div style={{ position: 'relative', height: '300px', width: '300px', border: '1px solid #ccc' }}>
          <Draggable
            handle=".drag-handle"
            defaultPosition={{ x: 0, y: 0 }}
            bounds="parent" 
            onDrag={handleDrag}
          >
            <div style={{ border: '1px solid #ccc', padding: '10px', position: 'absolute' }}>
              <img src="https://firebasestorage.googleapis.com/v0/b/mycloset-c256e.appspot.com/o/Shoes%2FFormal%20Shoes%2F1703019358746?alt=media&token=c8cb7831-5a00-424d-bf05-d17594592708" className="drag-handle" style={{ cursor: 'grab', marginBottom: '10px' , height: '100px', width: '100px'}} />
            </div>
          </Draggable>
        </div>
      );
}



