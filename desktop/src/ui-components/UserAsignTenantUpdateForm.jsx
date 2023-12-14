/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { UserAsignTenant, Tenants } from "../models";
import {
  fetchByPath,
  getOverrideProps,
  useDataStoreBinding,
  validateField,
} from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function UserAsignTenantUpdateForm(props) {
  const {
    id: idProp,
    userAsignTenant: userAsignTenantModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userSub: "",
    Status: "",
    tenantsID: undefined,
  };
  const [userSub, setUserSub] = React.useState(initialValues.userSub);
  const [Status, setStatus] = React.useState(initialValues.Status);
  const [tenantsID, setTenantsID] = React.useState(initialValues.tenantsID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userAsignTenantRecord
      ? { ...initialValues, ...userAsignTenantRecord, tenantsID }
      : initialValues;
    setUserSub(cleanValues.userSub);
    setStatus(cleanValues.Status);
    setTenantsID(cleanValues.tenantsID);
    setCurrentTenantsIDValue(undefined);
    setCurrentTenantsIDDisplayValue("");
    setErrors({});
  };
  const [userAsignTenantRecord, setUserAsignTenantRecord] = React.useState(
    userAsignTenantModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(UserAsignTenant, idProp)
        : userAsignTenantModelProp;
      setUserAsignTenantRecord(record);
      const tenantsIDRecord = record ? await record.tenantsID : undefined;
      setTenantsID(tenantsIDRecord);
    };
    queryData();
  }, [idProp, userAsignTenantModelProp]);
  React.useEffect(resetStateValues, [userAsignTenantRecord, tenantsID]);
  const [currentTenantsIDDisplayValue, setCurrentTenantsIDDisplayValue] =
    React.useState("");
  const [currentTenantsIDValue, setCurrentTenantsIDValue] =
    React.useState(undefined);
  const tenantsIDRef = React.createRef();
  const tenantsRecords = useDataStoreBinding({
    type: "collection",
    model: Tenants,
  }).items;
  const getDisplayValue = {
    tenantsID: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    userSub: [],
    Status: [],
    tenantsID: [{ type: "Required" }],
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
          userSub,
          Status,
          tenantsID,
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
            UserAsignTenant.copyOf(userAsignTenantRecord, (updated) => {
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
      {...getOverrideProps(overrides, "UserAsignTenantUpdateForm")}
      {...rest}
    >
      <TextField
        label="User sub"
        isRequired={false}
        isReadOnly={false}
        value={userSub}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userSub: value,
              Status,
              tenantsID,
            };
            const result = onChange(modelFields);
            value = result?.userSub ?? value;
          }
          if (errors.userSub?.hasError) {
            runValidationTasks("userSub", value);
          }
          setUserSub(value);
        }}
        onBlur={() => runValidationTasks("userSub", userSub)}
        errorMessage={errors.userSub?.errorMessage}
        hasError={errors.userSub?.hasError}
        {...getOverrideProps(overrides, "userSub")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={Status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userSub,
              Status: value,
              tenantsID,
            };
            const result = onChange(modelFields);
            value = result?.Status ?? value;
          }
          if (errors.Status?.hasError) {
            runValidationTasks("Status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("Status", Status)}
        errorMessage={errors.Status?.errorMessage}
        hasError={errors.Status?.hasError}
        {...getOverrideProps(overrides, "Status")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              userSub,
              Status,
              tenantsID: value,
            };
            const result = onChange(modelFields);
            value = result?.tenantsID ?? value;
          }
          setTenantsID(value);
          setCurrentTenantsIDValue(undefined);
        }}
        currentFieldValue={currentTenantsIDValue}
        label={"Tenants id"}
        items={tenantsID ? [tenantsID] : []}
        hasError={errors?.tenantsID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("tenantsID", currentTenantsIDValue)
        }
        errorMessage={errors?.tenantsID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.tenantsID(
                tenantsRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentTenantsIDDisplayValue(
            value
              ? getDisplayValue.tenantsID(
                  tenantsRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentTenantsIDValue(value);
        }}
        inputFieldRef={tenantsIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Tenants id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Tenants"
          value={currentTenantsIDDisplayValue}
          options={tenantsRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.tenantsID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentTenantsIDValue(id);
            setCurrentTenantsIDDisplayValue(label);
            runValidationTasks("tenantsID", label);
          }}
          onClear={() => {
            setCurrentTenantsIDDisplayValue("");
          }}
          defaultValue={tenantsID}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.tenantsID?.hasError) {
              runValidationTasks("tenantsID", value);
            }
            setCurrentTenantsIDDisplayValue(value);
            setCurrentTenantsIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("tenantsID", currentTenantsIDValue)}
          errorMessage={errors.tenantsID?.errorMessage}
          hasError={errors.tenantsID?.hasError}
          ref={tenantsIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "tenantsID")}
        ></Autocomplete>
      </ArrayField>
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
          isDisabled={!(idProp || userAsignTenantModelProp)}
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
              !(idProp || userAsignTenantModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
