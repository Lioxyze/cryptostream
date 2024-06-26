import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CryptoProps } from "@/Utils/types";
import { CiCirclePlus } from "react-icons/ci";
import { InsertCryptoForm } from "./InsertCrypto";

type ModalUpdateProps = {
  CryptoProps?: CryptoProps;
  setIsReloadNeeded: any;
};

export const DeleteCryptoProps = ({
  CryptoProps,
  setIsReloadNeeded,
}: ModalUpdateProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "fixed" as "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflow: "auto",
    maxHeight: "90%",
    maxWidth: "90%",
  };

  return (
    <div className="relative overflow-y-scroll h-full">
      <button
        className="mx-auto my-4 w-48 bg-red-600 text-white rounded-md border border-red-500 flex items-center justify-center h-10 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        onClick={handleOpen}
      >
        <CiCirclePlus size={24} className="mr-2" />
        Delete
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="h-full overflow-y-scroll">
            <span
              className="absolute right-10 top-10 cursor-pointer"
              onClick={handleClose}
            >
              <IoIosCloseCircleOutline color="#000" size={48} />
            </span>
            <InsertCryptoForm
              CryptoProps={CryptoProps}
              setIsReloadNeeded={setIsReloadNeeded}
              handleClose={handleClose}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
};
