import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { ToastContainer, toast } from "react-toastify";

const QrCodeScanner = ({ onScanSuccess }) => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );

    const handleScanSuccess = (decodedText, decodedResult) => {
      onScanSuccess(decodedText);
      toast.success("Scanned Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      });
      scanner.clear(); // Stop the scanner once a QR code is successfully scanned
    };

    scanner.render(handleScanSuccess, onScanFailure);

    function onScanFailure(error) {
      console.warn(`QR Code scan failed: ${error}`);
      
    }

    // Cleanup the scanner when the component is unmounted
    return () => {
        
      scanner.clear();
    };
  }, [onScanSuccess]);

  return <div id="reader" style={{ width: '300px' }}></div>;
};

export default QrCodeScanner;
