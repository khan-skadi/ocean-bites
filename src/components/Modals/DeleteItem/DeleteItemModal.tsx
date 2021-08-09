import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal, setAlertProps } from "store";
import { db } from "config/firebase";
import { makeStyles } from "@material-ui/core/styles";
import { SubCategory, SubCategoryItem, MenuItem, Extras, CollectionName } from "models/menu";

// Components
import ModalWrapper from "../ModalWrapper";

const useStyles = makeStyles(() => ({
  formWrapper: {
    scrollBehavior: "smooth",
  },
}));

interface Props {
  subCategory: SubCategory;
  initialState: { [key: string]: string };
  menuItem?: MenuItem;
  extras?: Extras;
  collectionName: CollectionName;
}

const DeleteItemModal: FC<Props> = ({ subCategory, initialState, menuItem, extras, collectionName }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleSubmitForm = () => {}

  return (
    <ModalWrapper header={`Edit ${subCategory.name}`}>
      <div className={classes.formWrapper}>
      </div>
    </ModalWrapper>
  );
};

export default DeleteItemModal;
