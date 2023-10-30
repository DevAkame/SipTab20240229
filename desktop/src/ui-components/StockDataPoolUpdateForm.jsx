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
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getStockDataPool } from "../graphql/queries";
import { updateStockDataPool } from "../graphql/mutations";
export default function StockDataPoolUpdateForm(props) {
  const {
    id: idProp,
    stockDataPool: stockDataPoolModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    category: "",
    itemName: "",
    barcode: "",
    expiration: "",
    stockInt: "",
    limitInt: "",
    status: "",
    value: "",
    purchaseID: "",
    untitledfield: "",
  };
  const [category, setCategory] = React.useState(initialValues.category);
  const [itemName, setItemName] = React.useState(initialValues.itemName);
  const [barcode, setBarcode] = React.useState(initialValues.barcode);
  const [expiration, setExpiration] = React.useState(initialValues.expiration);
  const [stockInt, setStockInt] = React.useState(initialValues.stockInt);
  const [limitInt, setLimitInt] = React.useState(initialValues.limitInt);
  const [status, setStatus] = React.useState(initialValues.status);
  const [value, setValue] = React.useState(initialValues.value);
  const [purchaseID, setPurchaseID] = React.useState(initialValues.purchaseID);
  const [untitledfield, setUntitledfield] = React.useState(
    initialValues.untitledfield
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = stockDataPoolRecord
      ? { ...initialValues, ...stockDataPoolRecord }
      : initialValues;
    setCategory(cleanValues.category);
    setItemName(cleanValues.itemName);
    setBarcode(cleanValues.barcode);
    setExpiration(
      typeof cleanValues.expiration === "string" ||
        cleanValues.expiration === null
        ? cleanValues.expiration
        : JSON.stringify(cleanValues.expiration)
    );
    setStockInt(cleanValues.stockInt);
    setLimitInt(cleanValues.limitInt);
    setStatus(cleanValues.status);
    setValue(cleanValues.value);
    setPurchaseID(cleanValues.purchaseID);
    setUntitledfield(cleanValues.untitledfield);
    setErrors({});
  };
  const [stockDataPoolRecord, setStockDataPoolRecord] = React.useState(
    stockDataPoolModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getStockDataPool.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getStockDataPool
        : stockDataPoolModelProp;
      setStockDataPoolRecord(record);
    };
    queryData();
  }, [idProp, stockDataPoolModelProp]);
  React.useEffect(resetStateValues, [stockDataPoolRecord]);
  const validations = {
    category: [],
    itemName: [],
    barcode: [],
    expiration: [{ type: "JSON" }],
    stockInt: [],
    limitInt: [],
    status: [],
    value: [],
    purchaseID: [],
    untitledfield: [],
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
          category: category ?? null,
          itemName: itemName ?? null,
          barcode: barcode ?? null,
          expiration: expiration ?? null,
          stockInt: stockInt ?? null,
          limitInt: limitInt ?? null,
          status: status ?? null,
          value: value ?? null,
          purchaseID: purchaseID ?? null,
          untitledfield: untitledfield ?? null,
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
          const modelFieldsToSave = {
            itemName: modelFields.itemName ?? null,
            barcode: modelFields.barcode ?? null,
            expiration: modelFields.expiration ?? null,
            stockInt: modelFields.stockInt ?? null,
            limitInt: modelFields.limitInt ?? null,
            status: modelFields.status ?? null,
            value: modelFields.value ?? null,
            purchaseID: modelFields.purchaseID ?? null,
            untitledfield: modelFields.untitledfield ?? null,
          };
          await API.graphql({
            query: updateStockDataPool.replaceAll("__typename", ""),
            variables: {
              input: {
                id: stockDataPoolRecord.id,
                ...modelFieldsToSave,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "StockDataPoolUpdateForm")}
      {...rest}
    >
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Label</span>
            <span style={{ whiteSpace: "pre", fontStyle: "italic" }}>
              {" "}
              - optional
            </span>
          </span>
        }
        value={category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category: value,
              itemName,
              barcode,
              expiration,
              stockInt,
              limitInt,
              status,
              value,
              purchaseID,
              untitledfield,
            };
            const result = onChange(modelFields);
            value = result?.category ?? value;
          }
          if (errors.category?.hasError) {
            runValidationTasks("category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("category", category)}
        errorMessage={errors.category?.errorMessage}
        hasError={errors.category?.hasError}
        {...getOverrideProps(overrides, "category")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Item name</span>
            <span style={{ whiteSpace: "pre", fontStyle: "italic" }}>
              {" "}
              - optional
            </span>
          </span>
        }
        isRequired={false}
        isReadOnly={false}
        value={itemName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category,
              itemName: value,
              barcode,
              expiration,
              stockInt,
              limitInt,
              status,
              value,
              purchaseID,
              untitledfield,
            };
            const result = onChange(modelFields);
            value = result?.itemName ?? value;
          }
          if (errors.itemName?.hasError) {
            runValidationTasks("itemName", value);
          }
          setItemName(value);
        }}
        onBlur={() => runValidationTasks("itemName", itemName)}
        errorMessage={errors.itemName?.errorMessage}
        hasError={errors.itemName?.hasError}
        {...getOverrideProps(overrides, "itemName")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Barcode</span>
            <span style={{ whiteSpace: "pre", fontStyle: "italic" }}>
              {" "}
              - optional
            </span>
          </span>
        }
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={barcode}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              category,
              itemName,
              barcode: value,
              expiration,
              stockInt,
              limitInt,
              status,
              value,
              purchaseID,
              untitledfield,
            };
            const result = onChange(modelFields);
            value = result?.barcode ?? value;
          }
          if (errors.barcode?.hasError) {
            runValidationTasks("barcode", value);
          }
          setBarcode(value);
        }}
        onBlur={() => runValidationTasks("barcode", barcode)}
        errorMessage={errors.barcode?.errorMessage}
        hasError={errors.barcode?.hasError}
        {...getOverrideProps(overrides, "barcode")}
      ></TextField>
      <TextAreaField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Expiration</span>
            <span style={{ whiteSpace: "pre", fontStyle: "italic" }}>
              {" "}
              - optional
            </span>
          </span>
        }
        isRequired={false}
        isReadOnly={false}
        value={expiration}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category,
              itemName,
              barcode,
              expiration: value,
              stockInt,
              limitInt,
              status,
              value,
              purchaseID,
              untitledfield,
            };
            const result = onChange(modelFields);
            value = result?.expiration ?? value;
          }
          if (errors.expiration?.hasError) {
            runValidationTasks("expiration", value);
          }
          setExpiration(value);
        }}
        onBlur={() => runValidationTasks("expiration", expiration)}
        errorMessage={errors.expiration?.errorMessage}
        hasError={errors.expiration?.hasError}
        {...getOverrideProps(overrides, "expiration")}
      ></TextAreaField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Stock int</span>
            <span style={{ whiteSpace: "pre", fontStyle: "italic" }}>
              {" "}
              - optional
            </span>
          </span>
        }
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={stockInt}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              category,
              itemName,
              barcode,
              expiration,
              stockInt: value,
              limitInt,
              status,
              value,
              purchaseID,
              untitledfield,
            };
            const result = onChange(modelFields);
            value = result?.stockInt ?? value;
          }
          if (errors.stockInt?.hasError) {
            runValidationTasks("stockInt", value);
          }
          setStockInt(value);
        }}
        onBlur={() => runValidationTasks("stockInt", stockInt)}
        errorMessage={errors.stockInt?.errorMessage}
        hasError={errors.stockInt?.hasError}
        {...getOverrideProps(overrides, "stockInt")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Limit int</span>
            <span style={{ whiteSpace: "pre", fontStyle: "italic" }}>
              {" "}
              - optional
            </span>
          </span>
        }
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={limitInt}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              category,
              itemName,
              barcode,
              expiration,
              stockInt,
              limitInt: value,
              status,
              value,
              purchaseID,
              untitledfield,
            };
            const result = onChange(modelFields);
            value = result?.limitInt ?? value;
          }
          if (errors.limitInt?.hasError) {
            runValidationTasks("limitInt", value);
          }
          setLimitInt(value);
        }}
        onBlur={() => runValidationTasks("limitInt", limitInt)}
        errorMessage={errors.limitInt?.errorMessage}
        hasError={errors.limitInt?.hasError}
        {...getOverrideProps(overrides, "limitInt")}
      ></TextField>
      <SelectField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Status</span>
            <span style={{ whiteSpace: "pre", fontStyle: "italic" }}>
              {" "}
              - optional
            </span>
          </span>
        }
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category,
              itemName,
              barcode,
              expiration,
              stockInt,
              limitInt,
              status: value,
              value,
              purchaseID,
              untitledfield,
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
          children="Ather"
          value="ATHER"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
      </SelectField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Value</span>
            <span style={{ whiteSpace: "pre", fontStyle: "italic" }}>
              {" "}
              - optional
            </span>
          </span>
        }
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={value}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              category,
              itemName,
              barcode,
              expiration,
              stockInt,
              limitInt,
              status,
              value: value,
              purchaseID,
              untitledfield,
            };
            const result = onChange(modelFields);
            value = result?.value ?? value;
          }
          if (errors.value?.hasError) {
            runValidationTasks("value", value);
          }
          setValue(value);
        }}
        onBlur={() => runValidationTasks("value", value)}
        errorMessage={errors.value?.errorMessage}
        hasError={errors.value?.hasError}
        {...getOverrideProps(overrides, "value")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Purchase id</span>
            <span style={{ whiteSpace: "pre", fontStyle: "italic" }}>
              {" "}
              - optional
            </span>
          </span>
        }
        isRequired={false}
        isReadOnly={false}
        value={purchaseID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category,
              itemName,
              barcode,
              expiration,
              stockInt,
              limitInt,
              status,
              value,
              purchaseID: value,
              untitledfield,
            };
            const result = onChange(modelFields);
            value = result?.purchaseID ?? value;
          }
          if (errors.purchaseID?.hasError) {
            runValidationTasks("purchaseID", value);
          }
          setPurchaseID(value);
        }}
        onBlur={() => runValidationTasks("purchaseID", purchaseID)}
        errorMessage={errors.purchaseID?.errorMessage}
        hasError={errors.purchaseID?.hasError}
        {...getOverrideProps(overrides, "purchaseID")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Untitledfield</span>
            <span style={{ whiteSpace: "pre", fontStyle: "italic" }}>
              {" "}
              - optional
            </span>
          </span>
        }
        isRequired={false}
        isReadOnly={false}
        value={untitledfield}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              category,
              itemName,
              barcode,
              expiration,
              stockInt,
              limitInt,
              status,
              value,
              purchaseID,
              untitledfield: value,
            };
            const result = onChange(modelFields);
            value = result?.untitledfield ?? value;
          }
          if (errors.untitledfield?.hasError) {
            runValidationTasks("untitledfield", value);
          }
          setUntitledfield(value);
        }}
        onBlur={() => runValidationTasks("untitledfield", untitledfield)}
        errorMessage={errors.untitledfield?.errorMessage}
        hasError={errors.untitledfield?.hasError}
        {...getOverrideProps(overrides, "untitledfield")}
      ></TextField>
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
          isDisabled={!(idProp || stockDataPoolModelProp)}
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
              !(idProp || stockDataPoolModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
