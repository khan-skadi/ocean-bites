import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectModal } from "store";

// Components
import EditMenu from "./EditMenu/EditMenu";

const ModalManager: FC = () => {
  const modalLookup = {
    EditMenu,
  };
  const currentModal = useSelector(selectModal);
  let renderedModal: JSX.Element | {} | null | undefined;

  if (currentModal) {
    const { type, data } = currentModal;
    const ModalComponent = modalLookup[type];
    renderedModal = <ModalComponent {...data} />;
  }

  return <span>{renderedModal}</span>;
};

export default ModalManager;
