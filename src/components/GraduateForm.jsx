import { React, useState } from "react";
import QrCodeScanner from "./QrCodeScanner";
import Modal from "react-modal";
import certificate from "../assets/images/certificate.jpg";

import { FaQrcode } from "react-icons/fa";
Modal.setAppElement("#root");

const GraduateForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const openModal = () => {
    event.preventDefault();
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleScanSuccess = (decodedText) => {
    setWalletAddress(decodedText);
    closeModal(); // Close the modal once the value is scanned
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
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
          <h2>Scan Wallet QR Code</h2>
          <button
            onClick={closeModal}
            className="bg-red-500 text-white px-4 py-2 rounded "
          >
            Close
          </button>
        </div>

        <QrCodeScanner onScanSuccess={handleScanSuccess} />
      </Modal>

      <div className="lg:max-w-[70%] ml-20 mr-5 md:mx-0 flex grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-6 flex flex-col">
          <hr className="my-4" />

          <h1 className="text-[1.75rem]">Admin</h1>

          <hr className="my-4" />

          {/* <form action={} id="admin-form"> */}
          <form id="graduate-form">
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
                onClick={openModal}
                className="flex items-center justify-center bg-[#17a2b8] hover:bg-[#138496] text-white p-2 rounded-[.25rem] rounded-l-none absolute right-0 top-0  h-full"
              >
                <FaQrcode />
              </button>
            </div>

            <div className="flex items-center justify-start border border-[#ced4da] mb-3 overflow-hidden rounded-[.25rem]">
              <label
                htmlFor="name"
                className="whitespace-nowrap px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] bg-[#e9ecef]"
              >
                Admin Name
              </label>
              <input
                className="flex-grow  px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] border-l border-[#ced4da] focus:outline-[#80bdff]"
                name="name"
                placeholder="Graduate Name"
              />
            </div>

            <div className="flex items-center justify-start border border-[#ced4da] mb-3 overflow-hidden rounded-[.25rem]">
              <label
                htmlFor="id"
                className="whitespace-nowrap px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] bg-[#e9ecef]"
              >
                ID Number
              </label>
              <input
                className="flex-grow  px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] border-l border-[#ced4da] focus:outline-[#80bdff]"
                name="id"
                placeholder="ID Number"
              />
            </div>

            <div className="flex items-center justify-start border border-[#ced4da] mb-3 overflow-hidden rounded-[.25rem]">
              <label
                htmlFor="email"
                className="whitespace-nowrap px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] bg-[#e9ecef]"
              >
                Email
              </label>
              <input
                className="flex-grow  px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] border-l border-[#ced4da] focus:outline-[#80bdff]"
                name="email"
                placeholder="Email"
              />
            </div>

            <div className="flex items-center justify-start border border-[#ced4da] mb-3 overflow-hidden rounded-[.25rem]">
              <label
                htmlFor="email"
                className="whitespace-nowrap px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] bg-[#e9ecef]"
              >
                Mobile
              </label>
              <input
                className="flex-grow px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] border-l border-[#ced4da] focus:outline-[#80bdff] "
                name="mobile"
                placeholder="Mobile"
              />
            </div>

            <div className="flex items-center justify-start border border-[#ced4da] mb-3 overflow-hidden rounded-[.25rem]">
              <label
                htmlFor="address"
                className="whitespace-nowrap px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] bg-[#e9ecef]"
              >
                Address
              </label>
              <input
                className="flex-grow px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] border-l border-[#ced4da] focus:outline-[#80bdff]"
                name="address"
                placeholder="Address"
              />
            </div>

            <div className="flex items-center justify-start border border-[#ced4da] mb-3 overflow-hidden rounded-[.25rem]">
              <label
                htmlFor="notes"
                className="whitespace-nowrap px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] bg-[#e9ecef]"
              >
                Notes
              </label>
              <input
                className="flex-grow px-[.75rem] py-[.375rem] text-xs md:text-base font-normal text-[#495057] border-l border-[#ced4da] focus:outline-[#80bdff]"
                name="notes"
                placeholder="Notes"
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

export default GraduateForm;
