import React, { useRef, useCallback, useState, useEffect } from 'react';

export default function UploadImg({imageUpload , setImageUpload}) {
   
 
  return (
  <>
  <input
    label="Image"
    placeholder="Choose image"
    accept="image/png,image/jpeg"
    type="file"
    onChange={(e) => {
        setImageUpload(e.target.files[0]);
    }}
/>
  </>
  )
}
