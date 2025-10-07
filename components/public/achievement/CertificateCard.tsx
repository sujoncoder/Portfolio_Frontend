"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface ICertificateCardProps {
  institute: string;
  course: string;
  image: string
};

const CertificateCard = ({ institute, course, image }: ICertificateCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(0);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
      if (modalRef.current) {
        modalRef.current.scrollTop = 0;
      }
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto"; // Restore background scroll
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className="relative p-2 rounded bg-slate-800 ring-1 hover:scale-105 duration-500 cursor-pointer w-full h-[300px] sm:h-[200px]"
        onClick={toggleModal}
      >
        <div className="relative w-full h-full">
          <Image
            src={image}
            layout="fill"
            objectFit="cover"
            className="rounded"
            alt={institute}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-slate-500 bg-opacity-0 hover:bg-opacity-50 duration-300">
            <div className="text-center opacity-0 hover:opacity-90 duration-300 p-4 bg-[#121821] rounded">
              <h3 className="text-lg font-bold text-[#5cc48a]">{institute}</h3>
              <p className="text-lg text-[#5cc48a]">{course}</p>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 overflow-auto">
          <div
            ref={modalRef}
            className="relative bg-white rounded-lg p-4 max-w-4xl w-full mx-4 my-8 overflow-auto"
          >
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full animate-pulse"
            >
              Close
            </button>
            <div className="flex justify-center items-center overflow-auto">
              <Image
                src={image}
                width={800}
                height={600}
                objectFit="contain"
                alt={institute}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateCard;
