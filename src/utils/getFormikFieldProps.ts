/* eslint-disable func-names */
import { FormikValues, useFormik } from "formik";

export const getFormikFieldProps = function <
  V extends FormikValues,
  F extends {
    initialValues: V;
    getFieldProps: ReturnType<typeof useFormik>["getFieldProps"];
    getFieldMeta: ReturnType<typeof useFormik>["getFieldMeta"];
    getFieldHelpers: ReturnType<typeof useFormik>["getFieldHelpers"];
  }
>(
  formik: F
): {
  [fieldName in keyof F["initialValues"]]: {
    field: ReturnType<F["getFieldProps"]>;
    meta: ReturnType<F["getFieldMeta"]>;
    helpers: ReturnType<F["getFieldHelpers"]>;
  };
} {
  return Object.keys(formik.initialValues).reduce(
    (fieldProps, fieldName) => ({
      ...fieldProps,
      [fieldName]: {
        field: formik.getFieldProps(fieldName),
        meta: formik.getFieldMeta(fieldName),
        helpers: formik.getFieldHelpers(fieldName),
      },
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    {} as any
  );
};
