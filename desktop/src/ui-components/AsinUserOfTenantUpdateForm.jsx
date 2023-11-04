/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getAsinUserOfTenant } from "../graphql/queries";
import { updateAsinUserOfTenant } from "../graphql/mutations";
export default function AsinUserOfTenantUpdateForm(props) {
  const {
    id: idProp,
    asinUserOfTenant: asinUserOfTenantModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    tenantID: "",
    userID: "",
  };
  const [tenantID, setTenantID] = React.useState(initialValues.tenantID);
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = asinUserOfTenantRecord
      ? { ...initialValues, ...asinUserOfTenantRecord }
      : initialValues;
    setTenantID(cleanValues.tenantID);
    setUserID(cleanValues.userID);
    setErrors({});
  };
  const [asinUserOfTenantRecord, setAsinUserOfTenantRecord] = React.useState(
    asinUserOfTenantModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getAsinUserOfTenant.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getAsinUserOfTenant
        : asinUserOfTenantModelProp;
      setAsinUserOfTenantRecord(record);
    };
    queryData();
  }, [idProp, asinUserOfTenantModelProp]);
  React.useEffect(resetStateValues, [asinUserOfTenantRecord]);
  const validations = {
    tenantID: [],
    userID: [],
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
          tenantID: tenantID ?? null,
          userID: userID ?? null,
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
          await API.graphql({
            query: updateAsinUserOfTenant.replaceAll("__typename", ""),
            variables: {
              input: {
                id: asinUserOfTenantRecord.id,
                ...modelFields,
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
      {...getOverrideProps(overrides, "AsinUserOfTenantUpdateForm")}
      {...rest}
    >
      <TextField
        label="Tenant id"
        isRequired={false}
        isReadOnly={false}
        value={tenantID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tenantID: value,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.tenantID ?? value;
          }
          if (errors.tenantID?.hasError) {
            runValidationTasks("tenantID", value);
          }
          setTenantID(value);
        }}
        onBlur={() => runValidationTasks("tenantID", tenantID)}
        errorMessage={errors.tenantID?.errorMessage}
        hasError={errors.tenantID?.hasError}
        {...getOverrideProps(overrides, "tenantID")}
      ></TextField>
      <TextField
        label="User id"
        isRequired={false}
        isReadOnly={false}
        value={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tenantID,
              userID: value,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          if (errors.userID?.hasError) {
            runValidationTasks("userID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("userID", userID)}
        errorMessage={errors.userID?.errorMessage}
        hasError={errors.userID?.hasError}
        {...getOverrideProps(overrides, "userID")}
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
          isDisabled={!(idProp || asinUserOfTenantModelProp)}
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
              !(idProp || asinUserOfTenantModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
