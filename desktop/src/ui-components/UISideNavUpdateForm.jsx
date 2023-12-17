/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { UISideNav } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UISideNavUpdateForm(props) {
  const {
    id: idProp,
    uISideNav: uISideNavModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    src: "",
    path: "",
    status: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [src, setSrc] = React.useState(initialValues.src);
  const [path, setPath] = React.useState(initialValues.path);
  const [status, setStatus] = React.useState(initialValues.status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = uISideNavRecord
      ? { ...initialValues, ...uISideNavRecord }
      : initialValues;
    setName(cleanValues.name);
    setSrc(cleanValues.src);
    setPath(cleanValues.path);
    setStatus(cleanValues.status);
    setErrors({});
  };
  const [uISideNavRecord, setUISideNavRecord] =
    React.useState(uISideNavModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(UISideNav, idProp)
        : uISideNavModelProp;
      setUISideNavRecord(record);
    };
    queryData();
  }, [idProp, uISideNavModelProp]);
  React.useEffect(resetStateValues, [uISideNavRecord]);
  const validations = {
    name: [],
    src: [],
    path: [],
    status: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          src,
          path,
          status,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            UISideNav.copyOf(uISideNavRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UISideNavUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              src,
              path,
              status,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Src"
        isRequired={false}
        isReadOnly={false}
        value={src}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              src: value,
              path,
              status,
            };
            const result = onChange(modelFields);
            value = result?.src ?? value;
          }
          if (errors.src?.hasError) {
            runValidationTasks("src", value);
          }
          setSrc(value);
        }}
        onBlur={() => runValidationTasks("src", src)}
        errorMessage={errors.src?.errorMessage}
        hasError={errors.src?.hasError}
        {...getOverrideProps(overrides, "src")}
      ></TextField>
      <TextField
        label="Path"
        isRequired={false}
        isReadOnly={false}
        value={path}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              src,
              path: value,
              status,
            };
            const result = onChange(modelFields);
            value = result?.path ?? value;
          }
          if (errors.path?.hasError) {
            runValidationTasks("path", value);
          }
          setPath(value);
        }}
        onBlur={() => runValidationTasks("path", path)}
        errorMessage={errors.path?.errorMessage}
        hasError={errors.path?.hasError}
        {...getOverrideProps(overrides, "path")}
      ></TextField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              src,
              path,
              status: value,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Enable"
          value="ENABLE"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Disable"
          value="DISABLE"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Paused"
          value="PAUSED"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || uISideNavModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || uISideNavModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
