import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal, setAlertProps } from "store";
import { db } from "config/firebase";
import { makeStyles } from "@material-ui/core/styles";
import { SubCategory, SubCategoryItem, MenuItem, Extras, CollectionName } from "models/menu";
import { ALERT_MESSAGES } from "utils/verbiage";

// Components
import ModalWrapper from "../ModalWrapper";
import EditMenuForm from "./EditMenuForm";
import EditMenuDualPrice from "./EditMenuDualPrice";
import EditMenuList from "./EditMenuList";

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

const EditMenu: FC<Props> = ({ subCategory, initialState, menuItem, extras, collectionName }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleSubmitForm = async (values) => {
    setLoading(true);
    const ref = db.collection(collectionName).doc(menuItem?.name);
    const itemUpdates: SubCategoryItem[] = [];

    subCategory.items.forEach((sub) => {
      const item = { ...sub } as SubCategoryItem;

      for (const [key, value] of Object.entries(values)) {
        if (key === sub.name) {
          item.name = value as string;
        }
        if (key === `${sub.name} additional`) {
          item.additional = value as string;
        }
        if (key === `${sub.name} ingredients`) {
          item.ingredients = value as [];
        }
        if (key === `${sub.name} price`) {
          item.price = value as string;
        }
      }

      itemUpdates.push(item);
    });

    const subCategoryUpdates = {
      ...subCategory,
      items: itemUpdates,
    };

    const menuItemUpdates = {
      ...menuItem,
      subCategories: menuItem?.subCategories.map((sub) => {
        if (sub.name === subCategoryUpdates.name) {
          return subCategoryUpdates;
        }

        return sub;
      }),
    };

    try {
      await ref.update(menuItemUpdates);

      dispatch(
        setAlertProps({
          open: true,
          severity: "success",
          message: ALERT_MESSAGES.menuUpdatedSuccessfully,
        })
      );
    } catch (err) {
      dispatch(
        setAlertProps({
          open: true,
          severity: "error",
          message: err.message || ALERT_MESSAGES.errorUpdatingMenu,
        })
      );
    } finally {
      setLoading(false);
      dispatch(closeModal());
    }
  };

  const handleEditList = async (values) => {
    setLoading(true);
    const ref = db.collection(collectionName).doc(extras?.name);
    const updatedList = Object.values(values).map((e) => e);

    try {
      await ref.update({ list: updatedList });

      dispatch(
        setAlertProps({
          open: true,
          severity: "success",
          message: ALERT_MESSAGES.menuUpdatedSuccessfully,
        })
      );
    } catch (err) {
      dispatch(
        setAlertProps({
          open: true,
          severity: "error",
          message: err.message || ALERT_MESSAGES.errorUpdatingMenu,
        })
      );
    } finally {
      setLoading(false);
      dispatch(closeModal());
    }
  };

  return (
    <ModalWrapper header={`Edit ${subCategory.name}`}>
      <div className={classes.formWrapper}>
        {/* eslint-disable-next-line no-nested-ternary */}
        {subCategory.items[0].subItems && subCategory.items[0].subItems.length ? (
          <EditMenuDualPrice
            subCategory={subCategory}
            state={initialState}
            loading={loading}
            handleSubmitForm={handleSubmitForm}
          />
        ) : extras ? (
          <EditMenuList state={initialState} extras={extras} handleSubmitForm={handleEditList} loading={loading} />
        ) : (
          <EditMenuForm
            subCategory={subCategory}
            state={initialState}
            loading={loading}
            handleSubmitForm={handleSubmitForm}
          />
        )}
      </div>
    </ModalWrapper>
  );
};

export default EditMenu;
