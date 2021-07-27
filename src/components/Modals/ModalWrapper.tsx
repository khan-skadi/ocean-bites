import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import { closeModal } from "store";

const useStyles = makeStyles(() => ({
  root: {
    width: "1500px",
  },
}));

interface Props {
  children: JSX.Element | JSX.Element[];
  header: string;
}

const ModalWrapper: FC<Props> = ({ children, header }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Dialog
      classes={{
        paper: classes.root,
      }}
      open={true}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      maxWidth="md"
    >
      {header && <DialogTitle id="form-dialog-title">{header}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default ModalWrapper;
