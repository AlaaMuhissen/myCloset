import React, { useRef, useCallback, useState } from 'react';
import Webcam from 'react-webcam';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../config/firebase";
import { useAuth } from '../Login/AuthContext';
import UploadImg from './uploadImg';


export default function TakePhoto() {
  const webcamRef = useRef(null);
  const { user } = useAuth();
  const [imgSrc, setImgSrc] = useState(null);

  const save = () => {
    const imageRef = ref(storage, `${user.uid}.png/jacket/3`);

    uploadBytes(imageRef, imgSrc)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            console.log(url);
          })
          .catch((error) => {
            console.error(error.message);
          });
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  const retake = () => {
    setImgSrc(null);
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    // Convert base64 to a Blob
    const imageBlob = dataURItoBlob(imageSrc);
    setImgSrc(imageBlob);
  }, [webcamRef]);

  const dataURItoBlob = (dataURI) => {
    // Convert base64 to a Blob
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  };

  return (
    <>
      <h1>Hii,,</h1>
      <div className="container">
        {imgSrc ? (
          <img src={URL.createObjectURL(imgSrc)} alt="webcam" />
        ) : (
          <>
          <Webcam
            height={600}
            width={600}
            ref={webcamRef}
            // videoConstraints={videoConstraints} // Apply the constraints here
          />
          <UploadImg 
           imageUpload = {imgSrc}
           setImageUpload ={setImgSrc}
        />
        </>
        )}
        <div className="btn-container">
          {imgSrc ? (
            <>
              <button onClick={retake}>Retake photo</button>
              <button onClick={save}>Save photo</button>
            </>
          ) : (
            <button onClick={capture}>Capture photo</button>
          )}
        </div>
      </div>
    </>
  );
}
