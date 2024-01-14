"use client";

import Modal from "@/app/components/modals/Modal";
import Image from "next/image";

interface ImageModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, src }) => {
  if (!src) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80 flex justify-center items-center ">
        <Image
          alt="image"
          layout="fill"
          objectFit="contain"
          src={src}
          sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, 40vw"
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
