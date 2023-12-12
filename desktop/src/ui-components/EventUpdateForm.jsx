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
  useTheme,
} from "@aws-amplify/ui-react";
import { Event, StockDataPool, EventStockDataPool, Tenants } from "../models";
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
export default function EventUpdateForm(props) {
  const {
    id: idProp,
    event: eventModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    StockDataPools: [],
    tenantsID: undefined,
  };
  const [StockDataPools, setStockDataPools] = React.useState(
    initialValues.StockDataPools
  );
  const [tenantsID, setTenantsID] = React.useState(initialValues.tenantsID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = eventRecord
      ? {
          ...initialValues,
          ...eventRecord,
          StockDataPools: linkedStockDataPools,
          tenantsID,
        }
      : initialValues;
    setStockDataPools(cleanValues.StockDataPools ?? []);
    setCurrentStockDataPoolsValue(undefined);
    setCurrentStockDataPoolsDisplayValue("");
    setTenantsID(cleanValues.tenantsID);
    setCurrentTenantsIDValue(undefined);
    setCurrentTenantsIDDisplayValue("");
    setErrors({});
  };
  const [eventRecord, setEventRecord] = React.useState(eventModelProp);
  const [linkedStockDataPools, setLinkedStockDataPools] = React.useState([]);
  const canUnlinkStockDataPools = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Event, idProp)
        : eventModelProp;
      setEventRecord(record);
      const linkedStockDataPools = record
        ? await Promise.all(
            (
              await record.StockDataPools.toArray()
            ).map((r) => {
              return r.stockDataPool;
            })
          )
        : [];
      setLinkedStockDataPools(linkedStockDataPools);
      const tenantsIDRecord = record ? await record.tenantsID : undefined;
      setTenantsID(tenantsIDRecord);
    };
    queryData();
  }, [idProp, eventModelProp]);
  React.useEffect(resetStateValues, [
    eventRecord,
    linkedStockDataPools,
    tenantsID,
  ]);
  const [
    currentStockDataPoolsDisplayValue,
    setCurrentStockDataPoolsDisplayValue,
  ] = React.useState("");
  const [currentStockDataPoolsValue, setCurrentStockDataPoolsValue] =
    React.useState(undefined);
  const StockDataPoolsRef = React.createRef();
  const [currentTenantsIDDisplayValue, setCurrentTenantsIDDisplayValue] =
    React.useState("");
  const [currentTenantsIDValue, setCurrentTenantsIDValue] =
    React.useState(undefined);
  const tenantsIDRef = React.createRef();
  const getIDValue = {
    StockDataPools: (r) => JSON.stringify({ id: r?.id }),
  };
  const StockDataPoolsIdSet = new Set(
    Array.isArray(StockDataPools)
      ? StockDataPools.map((r) => getIDValue.StockDataPools?.(r))
      : getIDValue.StockDataPools?.(StockDataPools)
  );
  const stockDataPoolRecords = useDataStoreBinding({
    type: "collection",
    model: StockDataPool,
  }).items;
  const tenantsRecords = useDataStoreBinding({
    type: "collection",
    model: Tenants,
  }).items;
  const getDisplayValue = {
    StockDataPools: (r) => `${r?.itemName ? r?.itemName + " - " : ""}${r?.id}`,
    tenantsID: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    StockDataPools: [],
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
          StockDataPools,
          tenantsID,
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
          const promises = [];
          const stockDataPoolsToLinkMap = new Map();
          const stockDataPoolsToUnLinkMap = new Map();
          const stockDataPoolsMap = new Map();
          const linkedStockDataPoolsMap = new Map();
          StockDataPools.forEach((r) => {
            const count = stockDataPoolsMap.get(getIDValue.StockDataPools?.(r));
            const newCount = count ? count + 1 : 1;
            stockDataPoolsMap.set(getIDValue.StockDataPools?.(r), newCount);
          });
          linkedStockDataPools.forEach((r) => {
            const count = linkedStockDataPoolsMap.get(
              getIDValue.StockDataPools?.(r)
            );
            const newCount = count ? count + 1 : 1;
            linkedStockDataPoolsMap.set(
              getIDValue.StockDataPools?.(r),
              newCount
            );
          });
          linkedStockDataPoolsMap.forEach((count, id) => {
            const newCount = stockDataPoolsMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                stockDataPoolsToUnLinkMap.set(id, diffCount);
              }
            } else {
              stockDataPoolsToUnLinkMap.set(id, count);
            }
          });
          stockDataPoolsMap.forEach((count, id) => {
            const originalCount = linkedStockDataPoolsMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                stockDataPoolsToLinkMap.set(id, diffCount);
              }
            } else {
              stockDataPoolsToLinkMap.set(id, count);
            }
          });
          stockDataPoolsToUnLinkMap.forEach(async (count, id) => {
            const recordKeys = JSON.parse(id);
            const eventStockDataPoolRecords = await DataStore.query(
              EventStockDataPool,
              (r) =>
                r.and((r) => {
                  return [
                    r.stockDataPoolId.eq(recordKeys.id),
                    r.eventId.eq(eventRecord.id),
                  ];
                })
            );
            for (let i = 0; i < count; i++) {
              promises.push(DataStore.delete(eventStockDataPoolRecords[i]));
            }
          });
          stockDataPoolsToLinkMap.forEach((count, id) => {
            const stockDataPoolToLink = stockDataPoolRecords.find((r) =>
              Object.entries(JSON.parse(id)).every(
                ([key, value]) => r[key] === value
              )
            );
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new EventStockDataPool({
                    event: eventRecord,
                    stockDataPool: stockDataPoolToLink,
                  })
                )
              );
            }
          });
          const modelFieldsToSave = {
            tenantsID: modelFields.tenantsID,
          };
          promises.push(
            DataStore.save(
              Event.copyOf(eventRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
              })
            )
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "EventUpdateForm")}
      {...rest}
    >
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              StockDataPools: values,
              tenantsID,
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
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              StockDataPools,
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
          isDisabled={!(idProp || eventModelProp)}
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
              !(idProp || eventModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
