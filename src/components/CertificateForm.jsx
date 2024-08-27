import { React, useState } from "react";
import QrCodeScanner from "./QrCodeScanner";
import Modal from "react-modal";
import certificate from "../assets/images/certificate.jpg";

import { FaQrcode } from "react-icons/fa";
Modal.setAppElement("#root");

const CertificateForm = () => {
  const [modalWalletIsOpen, setModalWalletIsOpen] = useState(false);
  const [modalHEIIsOpen, setModalHEIIsOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [HEIAddress, setHEIAddress] = useState("");

  const openWalletModal = () => {
    event.preventDefault();
    setModalWalletIsOpen(true);
  };

  const closeWalletModal = () => {
    setModalWalletIsOpen(false);
  };

  const handleWalletScanSuccess = (decodedText) => {
    setWalletAddress(decodedText);
    closeWalletModal(); // Close the modal once the value is scanned
  };


  const openHEIModal = () => {
    event.preventDefault();
    setModalHEIIsOpen(true);
  };

  const closeHEIModal = () => {
    setModalHEIIsOpen(false);
  };

  const handleHEIScanSuccess = (decodedText) => {
    setHEIAddress(decodedText);
    closeHEIModal(); // Close the modal once the value is scanned
  };

  return (
    <>
      <Modal
        isOpen={modalWalletIsOpen}
        onRequestClose={closeWalletModal}
        contentLabel="QR Code Scanner"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            // width: "80%",
            maxWidth: "320px",
          },

        }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm">Scan Wallet QR Code</h2>
          <button
            onClick={closeWalletModal}
            className="text-sm bg-red-500 text-white px-2 py-2 rounded"
          >
            Close
          </button>
        </div>

        <QrCodeScanner onScanSuccess={handleWalletScanSuccess} />
      </Modal>


      <Modal
        isOpen={modalHEIIsOpen}
        onRequestClose={closeHEIModal}
        contentLabel="QR Code Scanner"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            // width: "80%",
            maxWidth: "320px",
          },

        }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm">Scan HEI Address QR Code</h2>
          <button
            onClick={closeHEIModal}
            className="text-sm bg-red-500 text-white px-2 py-2 rounded "
          >
            Close
          </button>
        </div>

        <QrCodeScanner onScanSuccess={handleHEIScanSuccess} />
      </Modal>

      <div className="lg:max-w-[70%] ml-20 mr-5 md:mx-0 flex grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-6 flex flex-col">
          <hr className="my-4" />

          <h1 className="text-[1.75rem]">HRI - Heigher Education Institution</h1>

          <hr className="my-4" />

          {/* <form action={} id="admin-form"> */}
          <form id="certificateForm-form">
            <div className="flex  relative items-stretch items-center justify-start border border-[#ced4da] mb-3 overflow-hidden rounded-[.25rem]">
              <label
                htmlFor="walletAddress"
                className="whitespace-nowrap px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] bg-[#e9ecef] inline-block"
              >
                Wallet Address
              </label>
              <input
                className="flex-grow px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] border-l border-[#ced4da] focus:outline-[#80bdff] "
                name="walletAddress"
                value={walletAddress}
                placeholder="Wallet Address"
              />

              <button
                onClick={openWalletModal}
                className="flex items-center justify-center bg-[#17a2b8] hover:bg-[#138496] text-white p-2 rounded-[.25rem] rounded-l-none absolute right-0 top-0  h-full"
              >
                <FaQrcode />
              </button>
            </div>

            <div className="flex  relative items-stretch items-center justify-start border border-[#ced4da] mb-3 overflow-hidden rounded-[.25rem]">
              <label
                htmlFor="walletAddress"
                className="whitespace-nowrap px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] bg-[#e9ecef] inline-block"
              >
                Graduate Address
              </label>
              <input
                className="flex-grow px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] border-l border-[#ced4da] focus:outline-[#80bdff] "
                name="graduateAddress"
                value={HEIAddress}
                placeholder="Graduate Address"
              />

              <button
                onClick={openHEIModal}
                className="flex items-center justify-center bg-[#17a2b8] hover:bg-[#138496] text-white p-2 rounded-[.25rem] rounded-l-none absolute right-0 top-0  h-full"
              >
                <FaQrcode />
              </button>
            </div>



            <div className="flex items-center justify-start border border-[#ced4da] mb-3 overflow-hidden rounded-[.25rem]">
              <label
                htmlFor="id"
                className="whitespace-nowrap px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] bg-[#e9ecef]"
              >
                Student Number
              </label>
              <input
                className="flex-grow  px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] border-l border-[#ced4da] focus:outline-[#80bdff]"
                name="id"
                placeholder="Student Number"
              />
            </div>

            <div className="flex items-center justify-start border border-[#ced4da] mb-3 overflow-hidden rounded-[.25rem]">
              <label
                htmlFor="name"
                className="whitespace-nowrap px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] bg-[#e9ecef]"
              >
                Name
              </label>
              <input
                className="flex-grow  px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] border-l border-[#ced4da] focus:outline-[#80bdff]"
                name="name"
                placeholder="Name"
              />
            </div>

            <div className="flex items-center justify-start border border-[#ced4da] mb-3 overflow-hidden rounded-[.25rem]">
              <label
                htmlFor="pictureURL"
                className="whitespace-nowrap px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] bg-[#e9ecef]"
              >
                Picture URL

              </label>
              <input
                className="flex-grow  px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] border-l border-[#ced4da] focus:outline-[#80bdff]"
                name="pictureURL"
                placeholder="Picture URL"
              />
            </div>

            <div className="flex items-center justify-start border border-[#ced4da] mb-3 overflow-hidden rounded-[.25rem]">
              <label
                htmlFor="certificateName"
                className="whitespace-nowrap px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] bg-[#e9ecef]"
              >
                Certificate Name

              </label>
              <input
                className="flex-grow px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] border-l border-[#ced4da] focus:outline-[#80bdff] "
                name="certificateName"
                placeholder="Certificate Name"
              />
            </div>

            <div className="flex items-center justify-start border border-[#ced4da] mb-3 overflow-hidden rounded-[.25rem]">
              <label
                htmlFor="certificateNumber"
                className="whitespace-nowrap px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] bg-[#e9ecef]"
              >
                Certificate Number
              </label>
              <input
                className="flex-grow px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] border-l border-[#ced4da] focus:outline-[#80bdff]"
                name="certificateNumber"
                placeholder="Certificate Number"
              />
            </div>

            <div className="flex items-center justify-start border border-[#ced4da] mb-3 overflow-hidden rounded-[.25rem]">
              <label
                htmlFor="expirationDate"
                className="whitespace-nowrap px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] bg-[#e9ecef]"
              >
                Expiration Date

              </label>
              <input
                className="flex-grow px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] border-l border-[#ced4da] focus:outline-[#80bdff]"
                name="expirationDate"
                placeholder="Expiration Date"
              />
            </div>

            <div className="flex items-center justify-start border border-[#ced4da] mb-3 overflow-hidden rounded-[.25rem]">
              <label
                htmlFor="certificatePictureURL"
                className="whitespace-nowrap px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] bg-[#e9ecef]"
              >
                Certificate Picture URL

              </label>
              <input
                className="flex-grow px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] border-l border-[#ced4da] focus:outline-[#80bdff]"
                name="certificatePictureURL"
                placeholder="Certificate Picture URL"

              />
            </div>

            <hr className="my-4" />
            <div className="flex items-center justify-center ">
              <button className="flex-grow text-white px-[0.25rem] py-[0.5rem] text-[0.875rem] bg-[#007bff] rounded-l-[0.2rem] hover:bg-[#0069d9] transition transition-800">
                Add
              </button>
              <button className="flex-grow text-white px-[0.25rem] py-[0.5rem] text-[0.875rem] bg-[#17a2b8] rounded-r-[0.2rem] hover:bg-[#138496] transition transition-800">
                Status
              </button>
            </div>

            <hr className="my-4" />
            <div className="flex items-center justify-center ">
              <button className="flex-grow text-white px-[0.25rem] py-[0.5rem] text-[0.875rem] bg-[#ffc107] rounded-l-[0.2rem] hover:bg-[#e0a800] transition transition-800">
                Pending
              </button>
              <button className="flex-grow text-white px-[0.25rem] py-[0.5rem] text-[0.875rem] bg-[#28a745] hover:bg-[#218838] transition transition-800">
                Approved
              </button>
              <button className="flex-grow text-white px-[0.25rem] py-[0.5rem] text-[0.875rem] bg-[#dc3545] rounded-r-[0.2rem] hover:bg-[#c82333] transition transition-800">
                Suspended
              </button>
            </div>

            <hr className="my-4" />
          </form>
        </div>

        <div className="col-span-12  lg:col-span-6">
          <hr className="my-4" />
          <h1 className="text-[1.75rem]">Certification</h1>

          <hr className="my-4" />

          <img src={certificate} alt="" />
        </div>
      </div>
    </>
  );
};

export default CertificateForm;
