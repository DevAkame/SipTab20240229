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
  SelectField,
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
export default function UserAsignTenantCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    TenantState: "",
    tenantsID: undefined,
    UserState: "",
  };
  const [userSub, setUserSub] = React.useState(initialValues.userSub);
  const [TenantState, setTenantState] = React.useState(
    initialValues.TenantState
  );
  const [tenantsID, setTenantsID] = React.useState(initialValues.tenantsID);
  const [UserState, setUserState] = React.useState(initialValues.UserState);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUserSub(initialValues.userSub);
    setTenantState(initialValues.TenantState);
    setTenantsID(initialValues.tenantsID);
    setCurrentTenantsIDValue(undefined);
    setCurrentTenantsIDDisplayValue("");
    setUserState(initialValues.UserState);
    setErrors({});
  };
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
    TenantState: [],
    tenantsID: [{ type: "Required" }],
    UserState: [],
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
          TenantState,
          tenantsID,
          UserState,
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
          await DataStore.save(new UserAsignTenant(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserAsignTenantCreateForm")}
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
              TenantState,
              tenantsID,
              UserState,
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
      <SelectField
        label="Tenant state"
        placeholder="Please select an option"
        isDisabled={false}
        value={TenantState}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userSub,
              TenantState: value,
              tenantsID,
              UserState,
            };
            const result = onChange(modelFields);
            value = result?.TenantState ?? value;
          }
          if (errors.TenantState?.hasError) {
            runValidationTasks("TenantState", value);
          }
          setTenantState(value);
        }}
        onBlur={() => runValidationTasks("TenantState", TenantState)}
        errorMessage={errors.TenantState?.errorMessage}
        hasError={errors.TenantState?.hasError}
        {...getOverrideProps(overrides, "TenantState")}
      >
        <option
          children="Enable"
          value="ENABLE"
          {...getOverrideProps(overrides, "TenantStateoption0")}
        ></option>
        <option
          children="Disable"
          value="DISABLE"
          {...getOverrideProps(overrides, "TenantStateoption1")}
        ></option>
        <option
          children="Paused"
          value="PAUSED"
          {...getOverrideProps(overrides, "TenantStateoption2")}
        ></option>
      </SelectField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              userSub,
              TenantState,
              tenantsID: value,
              UserState,
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
      <SelectField
        label="User state"
        placeholder="Please select an option"
        isDisabled={false}
        value={UserState}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userSub,
              TenantState,
              tenantsID,
              UserState: value,
            };
            const result = onChange(modelFields);
            value = result?.UserState ?? value;
          }
          if (errors.UserState?.hasError) {
            runValidationTasks("UserState", value);
          }
          setUserState(value);
        }}
        onBlur={() => runValidationTasks("UserState", UserState)}
        errorMessage={errors.UserState?.errorMessage}
        hasError={errors.UserState?.hasError}
        {...getOverrideProps(overrides, "UserState")}
      >
        <option
          children="Enable"
          value="ENABLE"
          {...getOverrideProps(overrides, "UserStateoption0")}
        ></option>
        <option
          children="Disable"
          value="DISABLE"
          {...getOverrideProps(overrides, "UserStateoption1")}
        ></option>
        <option
          children="Paused"
          value="PAUSED"
          {...getOverrideProps(overrides, "UserStateoption2")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
