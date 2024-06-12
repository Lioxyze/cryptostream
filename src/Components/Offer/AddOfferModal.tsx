import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { OfferProps } from "@/Utils/types";

import { CiCirclePlus } from "react-icons/ci";
import { InsertOffersForm } from "./InsertOffer";

type ModalUpdateProps = {
  OffersProps?: OfferProps;
  setIsReloadNeeded: any;
};

export const AddOfferModal = ({
  OffersProps,
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
        className="w-32 bg-white rounded-md border-indigo-500 text-black  flex items-center justify-evenly h-8"
        onClick={handleOpen}
      >
        <CiCirclePlus size={24} />
        Add Offers
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
            <InsertOffersForm
              OffersProps={OffersProps}
              setIsReloadNeeded={setIsReloadNeeded}
              handleClose={handleClose}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
};
