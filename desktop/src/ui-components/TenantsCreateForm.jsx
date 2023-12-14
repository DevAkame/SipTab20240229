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
import { Tenants, StockDataPool, Event, UserAsignTenant } from "../models";
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
export default function TenantsCreateForm(props) {
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
    name: "",
    StockDataPools: [],
    Events: [],
    UserAsignTenants: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [StockDataPools, setStockDataPools] = React.useState(
    initialValues.StockDataPools
  );
  const [Events, setEvents] = React.useState(initialValues.Events);
  const [UserAsignTenants, setUserAsignTenants] = React.useState(
    initialValues.UserAsignTenants
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setStockDataPools(initialValues.StockDataPools);
    setCurrentStockDataPoolsValue(undefined);
    setCurrentStockDataPoolsDisplayValue("");
    setEvents(initialValues.Events);
    setCurrentEventsValue(undefined);
    setCurrentEventsDisplayValue("");
    setUserAsignTenants(initialValues.UserAsignTenants);
    setCurrentUserAsignTenantsValue(undefined);
    setCurrentUserAsignTenantsDisplayValue("");
    setErrors({});
  };
  const [
    currentStockDataPoolsDisplayValue,
    setCurrentStockDataPoolsDisplayValue,
  ] = React.useState("");
  const [currentStockDataPoolsValue, setCurrentStockDataPoolsValue] =
    React.useState(undefined);
  const StockDataPoolsRef = React.createRef();
  const [currentEventsDisplayValue, setCurrentEventsDisplayValue] =
    React.useState("");
  const [currentEventsValue, setCurrentEventsValue] = React.useState(undefined);
  const EventsRef = React.createRef();
  const [
    currentUserAsignTenantsDisplayValue,
    setCurrentUserAsignTenantsDisplayValue,
  ] = React.useState("");
  const [currentUserAsignTenantsValue, setCurrentUserAsignTenantsValue] =
    React.useState(undefined);
  const UserAsignTenantsRef = React.createRef();
  const getIDValue = {
    StockDataPools: (r) => JSON.stringify({ id: r?.id }),
    Events: (r) => JSON.stringify({ id: r?.id }),
    UserAsignTenants: (r) => JSON.stringify({ id: r?.id }),
  };
  const StockDataPoolsIdSet = new Set(
    Array.isArray(StockDataPools)
      ? StockDataPools.map((r) => getIDValue.StockDataPools?.(r))
      : getIDValue.StockDataPools?.(StockDataPools)
  );
  const EventsIdSet = new Set(
    Array.isArray(Events)
      ? Events.map((r) => getIDValue.Events?.(r))
      : getIDValue.Events?.(Events)
  );
  const UserAsignTenantsIdSet = new Set(
    Array.isArray(UserAsignTenants)
      ? UserAsignTenants.map((r) => getIDValue.UserAsignTenants?.(r))
      : getIDValue.UserAsignTenants?.(UserAsignTenants)
  );
  const stockDataPoolRecords = useDataStoreBinding({
    type: "collection",
    model: StockDataPool,
  }).items;
  const eventRecords = useDataStoreBinding({
    type: "collection",
    model: Event,
  }).items;
  const userAsignTenantRecords = useDataStoreBinding({
    type: "collection",
    model: UserAsignTenant,
  }).items;
  const getDisplayValue = {
    StockDataPools: (r) => `${r?.itemName ? r?.itemName + " - " : ""}${r?.id}`,
    Events: (r) => r?.id,
    UserAsignTenants: (r) => `${r?.userSub ? r?.userSub + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [],
    StockDataPools: [],
    Events: [],
    UserAsignTenants: [],
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
          StockDataPools,
          Events,
          UserAsignTenants,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
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
            name: modelFields.name,
          };
          const tenants = await DataStore.save(new Tenants(modelFieldsToSave));
          const promises = [];
          promises.push(
            ...StockDataPools.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  StockDataPool.copyOf(original, (updated) => {
                    updated.tenantsID = tenants.id;
                  })
                )
              );
              return promises;
            }, [])
          );
          promises.push(
            ...Events.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  Event.copyOf(original, (updated) => {
                    updated.tenantsID = tenants.id;
                  })
                )
              );
              return promises;
            }, [])
          );
          promises.push(
            ...UserAsignTenants.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  UserAsignTenant.copyOf(original, (updated) => {
                    updated.tenantsID = tenants.id;
                  })
                )
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
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
      {...getOverrideProps(overrides, "TenantsCreateForm")}
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
              StockDataPools,
              Events,
              UserAsignTenants,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              StockDataPools: values,
              Events,
              UserAsignTenants,
            };
            const result = onChange(modelFields);
            values = result?.StockDataPools ?? values;
          }
          setStockDataPools(values);
          setCurrentStockDataPoolsValue(undefined);
          setCurrentStockDataPoolsDisplayValue("");
        }}
        currentFieldValue={currentStockDataPoolsValue}
        label={"Stock data pools"}
        items={StockDataPools}
        hasError={errors?.StockDataPools?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("StockDataPools", currentStockDataPoolsValue)
        }
        errorMessage={errors?.StockDataPools?.errorMessage}
        getBadgeText={getDisplayValue.StockDataPools}
        setFieldValue={(model) => {
          setCurrentStockDataPoolsDisplayValue(
            model ? getDisplayValue.StockDataPools(model) : ""
          );
          setCurrentStockDataPoolsValue(model);
        }}
        inputFieldRef={StockDataPoolsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Stock data pools"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search StockDataPool"
          value={currentStockDataPoolsDisplayValue}
          options={stockDataPoolRecords
            .filter(
              (r) => !StockDataPoolsIdSet.has(getIDValue.StockDataPools?.(r))
            )
            .map((r) => ({
              id: getIDValue.StockDataPools?.(r),
              label: getDisplayValue.StockDataPools?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentStockDataPoolsValue(
              stockDataPoolRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentStockDataPoolsDisplayValue(label);
            runValidationTasks("StockDataPools", label);
          }}
          onClear={() => {
            setCurrentStockDataPoolsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.StockDataPools?.hasError) {
              runValidationTasks("StockDataPools", value);
            }
            setCurrentStockDataPoolsDisplayValue(value);
            setCurrentStockDataPoolsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "StockDataPools",
              currentStockDataPoolsDisplayValue
            )
          }
          errorMessage={errors.StockDataPools?.errorMessage}
          hasError={errors.StockDataPools?.hasError}
          ref={StockDataPoolsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "StockDataPools")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              StockDataPools,
              Events: values,
              UserAsignTenants,
            };
            const result = onChange(modelFields);
            values = result?.Events ?? values;
          }
          setEvents(values);
          setCurrentEventsValue(undefined);
          setCurrentEventsDisplayValue("");
        }}
        currentFieldValue={currentEventsValue}
        label={"Events"}
        items={Events}
        hasError={errors?.Events?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Events", currentEventsValue)
        }
        errorMessage={errors?.Events?.errorMessage}
        getBadgeText={getDisplayValue.Events}
        setFieldValue={(model) => {
          setCurrentEventsDisplayValue(
            model ? getDisplayValue.Events(model) : ""
          );
          setCurrentEventsValue(model);
        }}
        inputFieldRef={EventsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Events"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Event"
          value={currentEventsDisplayValue}
          options={eventRecords
            .filter((r) => !EventsIdSet.has(getIDValue.Events?.(r)))
            .map((r) => ({
              id: getIDValue.Events?.(r),
              label: getDisplayValue.Events?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentEventsValue(
              eventRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentEventsDisplayValue(label);
            runValidationTasks("Events", label);
          }}
          onClear={() => {
            setCurrentEventsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Events?.hasError) {
              runValidationTasks("Events", value);
            }
            setCurrentEventsDisplayValue(value);
            setCurrentEventsValue(undefined);
          }}
          onBlur={() => runValidationTasks("Events", currentEventsDisplayValue)}
          errorMessage={errors.Events?.errorMessage}
          hasError={errors.Events?.hasError}
          ref={EventsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Events")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              StockDataPools,
              Events,
              UserAsignTenants: values,
            };
            const result = onChange(modelFields);
            values = result?.UserAsignTenants ?? values;
          }
          setUserAsignTenants(values);
          setCurrentUserAsignTenantsValue(undefined);
          setCurrentUserAsignTenantsDisplayValue("");
        }}
        currentFieldValue={currentUserAsignTenantsValue}
        label={"User asign tenants"}
        items={UserAsignTenants}
        hasError={errors?.UserAsignTenants?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "UserAsignTenants",
            currentUserAsignTenantsValue
          )
        }
        errorMessage={errors?.UserAsignTenants?.errorMessage}
        getBadgeText={getDisplayValue.UserAsignTenants}
        setFieldValue={(model) => {
          setCurrentUserAsignTenantsDisplayValue(
            model ? getDisplayValue.UserAsignTenants(model) : ""
          );
          setCurrentUserAsignTenantsValue(model);
        }}
        inputFieldRef={UserAsignTenantsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="User asign tenants"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search UserAsignTenant"
          value={currentUserAsignTenantsDisplayValue}
          options={userAsignTenantRecords
            .filter(
              (r) =>
                !UserAsignTenantsIdSet.has(getIDValue.UserAsignTenants?.(r))
            )
            .map((r) => ({
              id: getIDValue.UserAsignTenants?.(r),
              label: getDisplayValue.UserAsignTenants?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentUserAsignTenantsValue(
              userAsignTenantRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentUserAsignTenantsDisplayValue(label);
            runValidationTasks("UserAsignTenants", label);
          }}
          onClear={() => {
            setCurrentUserAsignTenantsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.UserAsignTenants?.hasError) {
              runValidationTasks("UserAsignTenants", value);
            }
            setCurrentUserAsignTenantsDisplayValue(value);
            setCurrentUserAsignTenantsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "UserAsignTenants",
              currentUserAsignTenantsDisplayValue
            )
          }
          errorMessage={errors.UserAsignTenants?.errorMessage}
          hasError={errors.UserAsignTenants?.hasError}
          ref={UserAsignTenantsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "UserAsignTenants")}
        ></Autocomplete>
      </ArrayField>
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
