import React, { useRef, useCallback, useState } from 'react';
import Webcam from 'react-webcam';
import { useAuth } from '../Login/AuthContext';
import Questionnaire from '../Questionnaire/Questionnaire';
import UploadImg from './UploadImg';
import { TbCapture } from 'react-icons/tb';
import { VscDebugContinue } from 'react-icons/vsc';
import { VscDebugRestart } from 'react-icons/vsc';

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-opacity-50 bg-gray-500 backdrop-blur-lg flex items-center justify-center">
      <div className="bg-white p-8 rounded-md z-50">
        {children}
        <button
          type="button"
          onClick={onClose}
          className="bg-red-500 text-white p-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default function TakePhoto() {
  const webcamRef = useRef(null);
  const { user } = useAuth();
  const [imgSrc, setImgSrc] = useState(null);
  const [continueToQuestions, setContinueToQuestions] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const retake = () => {
    setImgSrc(null);
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log('Image Src:', imageSrc);
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user', // or 'environment' for the rear camera
  };

  return (
    <>
      <div className="flex flex-row justify-between p-20">
        {imgSrc ? (
          <img height={'400px'} width={'400px'} src={imgSrc} alt="webcam" />
        ) : (
          <>
            <div className="flex flex-col justify-around items-center ">
              <div className="mb-3">
                <Webcam
                  height={300}
                  width={300}
                  ref={webcamRef}
                  videoConstraints={videoConstraints} // Apply the constraints here
                />
              </div>
              <div className="flex justify-center bg-[#704F38] rounded-md w-20 p-2">
                <button onClick={capture}>
                  <TbCapture color="#fff" size={'30px'} />
                </button>
              </div>
            </div>
            <div className="border-l-2 border-[#704F38] p-24">
              <UploadImg setImageUpload={setImgSrc} />
            </div>
          </>
        )}
        <div className="flex justify-between items-center flex-row-reverse">
          {imgSrc && (
            <>
              <div className="flex justify-center bg-[#704F38] rounded-md w-20 p-2 ml-10">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setContinueToQuestions(true);
                    setShowModal(true);
                  }}
                >
                  <VscDebugContinue color="#fff" size={'30px'} />
                </button>
              </div>
              {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                  <Questionnaire img={imgSrc} />
                </Modal>
              )}
              {!continueToQuestions && (
                <div className="flex justify-center bg-[#704F38] rounded-md w-20 p-2">
                  <button onClick={retake}>
                    <VscDebugRestart color="#fff" size={'30px'} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
