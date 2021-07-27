import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { closeModal, setAlertProps } from "store";
import { db } from "config/firebase";
import { makeStyles } from "@material-ui/core/styles";
import { SubCategory, SubCategoryItem, MenuItem } from "models/menu";
import { ALERT_MESSAGES } from "utils/verbiage";

// Components
import ModalWrapper from "../ModalWrapper";
import EditMenuForm from "./EditMenuForm";
import EditMenuDualPrice from "./EditMenuDualPrice";

const useStyles = makeStyles(() => ({
  formWrapper: {
    scrollBehavior: "smooth",
  },
}));

interface Props {
  subCategory: SubCategory;
  initialState: { [key: string]: string };
  menuItem: MenuItem;
}

const EditMenu: FC<Props> = ({ subCategory, initialState, menuItem }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmitForm = async (values) => {
    const ref = db.collection("menuItems").doc(menuItem.name);
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
      subCategories: menuItem.subCategories.map((sub) => {
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
      dispatch(closeModal());
    }
  };

  return (
    <ModalWrapper header={`Edit ${subCategory.name}`}>
      <div className={classes.formWrapper}>
        {subCategory.items[0].subItems && subCategory.items[0].subItems.length ? (
          <EditMenuDualPrice subCategory={subCategory} state={initialState} handleSubmitForm={handleSubmitForm} />
        ) : (
          <EditMenuForm subCategory={subCategory} state={initialState} handleSubmitForm={handleSubmitForm} />
        )}
      </div>
    </ModalWrapper>
  );
};

export default EditMenu;
