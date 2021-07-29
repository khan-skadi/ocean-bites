import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { openModal } from "store";
import { modalLookup } from "utils/appConstants";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, SubCategory, Extras, CollectionName } from "models/menu";
import { useAuthContext } from "context/AuthContext";

const useStyles = makeStyles(() => ({
  editButton: { marginBottom: "15px" },
}));

interface Props {
  menuItem?: MenuItem;
  extras?: Extras;
  subCategory: SubCategory;
  collectionName: CollectionName;
}

const EditButton: FC<Props> = ({ menuItem, extras, subCategory, collectionName }) => {
  const { isAuthenticated } = useAuthContext();
  const classes = useStyles();
  const dispatch = useDispatch();

  if (!isAuthenticated) return null;
  return (
    <Button
      className={classes.editButton}
      color="secondary"
      variant="contained"
      onClick={() => {
        const initialState: { [key: string]: string | string[] } = {};

        subCategory.items.forEach((item) => {
          if (item.subItems && item.subItems.length) {
            item.subItems.forEach((subItem) => {
              initialState[subItem.name] = subItem.name;
              initialState[`${subItem.name} price1`] = subItem.price1;
              initialState[`${subItem.name} price2`] = subItem.price2;
              initialState[`${subItem.name} ingredients`] = subItem.ingredients || [];
              initialState[`${subItem.name} additional`] = subItem.additional || "";
            });
          } else if (extras && collectionName === CollectionName.extras) {
            extras.list.forEach((listItem) => {
              initialState[listItem] = listItem;
            });
          } else {
            initialState[item.name] = item.name;
            initialState[`${item.name} price`] = item.price;
            initialState[`${item.name} ingredients`] = item.ingredients || [];
            initialState[`${item.name} additional`] = item.additional || "";
          }
        });

        dispatch(
          openModal({
            type: modalLookup.EditMenu,
            data: { subCategory, initialState, menuItem, extras, collectionName },
          })
        );
      }}
    >
      Edit Section
    </Button>
  );
};

export default EditButton;
