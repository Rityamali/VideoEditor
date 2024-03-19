import React, { useRef, useEffect } from 'react';

const CameraComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const getCameraStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    getCameraStream();

    return () => {
      // Cleanup: Stop the camera stream when the component unmounts
      if (videoRef.current) {
        const stream = videoRef.current.srcObject;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach((track) => track.stop());
        }
      }
    };
  }, []);

  return (
    <div>
      <h2>Camera Feed</h2>
      <video ref={videoRef} width="640" height="480" autoPlay playsInline></video>
    </div>
  );
};

export default CameraComponent;