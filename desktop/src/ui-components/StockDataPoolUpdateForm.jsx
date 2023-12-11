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
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  StockDataPool,
  Event,
  StocksSubCategory,
  Tenants,
  EventStockDataPool,
} from "../models";
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
    itemName: "",
    barcode: "",
    expiration: "",
    stockInt: "",
    limitInt: "",
    value: "",
    purchaseID: "",
    untitledfield: "",
    status: "",
    stockssubcategoryID: undefined,
    tenantsID: undefined,
    events: [],
  };
  const [itemName, setItemName] = React.useState(initialValues.itemName);
  const [barcode, setBarcode] = React.useState(initialValues.barcode);
  const [expiration, setExpiration] = React.useState(initialValues.expiration);
  const [stockInt, setStockInt] = React.useState(initialValues.stockInt);
  const [limitInt, setLimitInt] = React.useState(initialValues.limitInt);
  const [value, setValue] = React.useState(initialValues.value);
  const [purchaseID, setPurchaseID] = React.useState(initialValues.purchaseID);
  const [untitledfield, setUntitledfield] = React.useState(
    initialValues.untitledfield
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [stockssubcategoryID, setStockssubcategoryID] = React.useState(
    initialValues.stockssubcategoryID
  );
  const [tenantsID, setTenantsID] = React.useState(initialValues.tenantsID);
  const [events, setEvents] = React.useState(initialValues.events);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = stockDataPoolRecord
      ? {
          ...initialValues,
          ...stockDataPoolRecord,
          stockssubcategoryID,
          tenantsID,
          events: linkedEvents,
        }
      : initialValues;
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
    setValue(cleanValues.value);
    setPurchaseID(cleanValues.purchaseID);
    setUntitledfield(cleanValues.untitledfield);
    setStatus(cleanValues.status);
    setStockssubcategoryID(cleanValues.stockssubcategoryID);
    setCurrentStockssubcategoryIDValue(undefined);
    setCurrentStockssubcategoryIDDisplayValue("");
    setTenantsID(cleanValues.tenantsID);
    setCurrentTenantsIDValue(undefined);
    setCurrentTenantsIDDisplayValue("");
    setEvents(cleanValues.events ?? []);
    setCurrentEventsValue(undefined);
    setCurrentEventsDisplayValue("");
    setErrors({});
  };
  const [stockDataPoolRecord, setStockDataPoolRecord] = React.useState(
    stockDataPoolModelProp
  );
  const [linkedEvents, setLinkedEvents] = React.useState([]);
  const canUnlinkEvents = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(StockDataPool, idProp)
        : stockDataPoolModelProp;
      setStockDataPoolRecord(record);
      const stockssubcategoryIDRecord = record
        ? await record.stockssubcategoryID
        : undefined;
      setStockssubcategoryID(stockssubcategoryIDRecord);
      const tenantsIDRecord = record ? await record.tenantsID : undefined;
      setTenantsID(tenantsIDRecord);
      const linkedEvents = record
        ? await Promise.all(
            (
              await record.events.toArray()
            ).map((r) => {
              return r.event;
            })
          )
        : [];
      setLinkedEvents(linkedEvents);
    };
    queryData();
  }, [idProp, stockDataPoolModelProp]);
  React.useEffect(resetStateValues, [
    stockDataPoolRecord,
    stockssubcategoryID,
    tenantsID,
    linkedEvents,
  ]);
  const [
    currentStockssubcategoryIDDisplayValue,
    setCurrentStockssubcategoryIDDisplayValue,
  ] = React.useState("");
  const [currentStockssubcategoryIDValue, setCurrentStockssubcategoryIDValue] =
    React.useState(undefined);
  const stockssubcategoryIDRef = React.createRef();
  const [currentTenantsIDDisplayValue, setCurrentTenantsIDDisplayValue] =
    React.useState("");
  const [currentTenantsIDValue, setCurrentTenantsIDValue] =
    React.useState(undefined);
  const tenantsIDRef = React.createRef();
  const [currentEventsDisplayValue, setCurrentEventsDisplayValue] =
    React.useState("");
  const [currentEventsValue, setCurrentEventsValue] = React.useState(undefined);
  const eventsRef = React.createRef();
  const getIDValue = {
    events: (r) => JSON.stringify({ id: r?.id }),
  };
  const eventsIdSet = new Set(
    Array.isArray(events)
      ? events.map((r) => getIDValue.events?.(r))
      : getIDValue.events?.(events)
  );
  const stocksSubCategoryRecords = useDataStoreBinding({
    type: "collection",
    model: StocksSubCategory,
  }).items;
  const tenantsRecords = useDataStoreBinding({
    type: "collection",
    model: Tenants,
  }).items;
  const eventRecords = useDataStoreBinding({
    type: "collection",
    model: Event,
  }).items;
  const getDisplayValue = {
    stockssubcategoryID: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    tenantsID: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    events: (r) => r?.id,
  };
  const validations = {
    itemName: [],
    barcode: [],
    expiration: [{ type: "JSON" }],
    stockInt: [],
    limitInt: [],
    value: [],
    purchaseID: [],
    untitledfield: [],
    status: [],
    stockssubcategoryID: [{ type: "Required" }],
    tenantsID: [{ type: "Required" }],
    events: [],
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
          itemName,
          barcode,
          expiration,
          stockInt,
          limitInt,
          value,
          purchaseID,
          untitledfield,
          status,
          stockssubcategoryID,
          tenantsID,
          events,
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
          const eventsToLinkMap = new Map();
          const eventsToUnLinkMap = new Map();
          const eventsMap = new Map();
          const linkedEventsMap = new Map();
          events.forEach((r) => {
            const count = eventsMap.get(getIDValue.events?.(r));
            const newCount = count ? count + 1 : 1;
            eventsMap.set(getIDValue.events?.(r), newCount);
          });
          linkedEvents.forEach((r) => {
            const count = linkedEventsMap.get(getIDValue.events?.(r));
            const newCount = count ? count + 1 : 1;
            linkedEventsMap.set(getIDValue.events?.(r), newCount);
          });
          linkedEventsMap.forEach((count, id) => {
            const newCount = eventsMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                eventsToUnLinkMap.set(id, diffCount);
              }
            } else {
              eventsToUnLinkMap.set(id, count);
            }
          });
          eventsMap.forEach((count, id) => {
            const originalCount = linkedEventsMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                eventsToLinkMap.set(id, diffCount);
              }
            } else {
              eventsToLinkMap.set(id, count);
            }
          });
          eventsToUnLinkMap.forEach(async (count, id) => {
            const recordKeys = JSON.parse(id);
            const eventStockDataPoolRecords = await DataStore.query(
              EventStockDataPool,
              (r) =>
                r.and((r) => {
                  return [
                    r.eventId.eq(recordKeys.id),
                    r.stockDataPoolId.eq(stockDataPoolRecord.id),
                  ];
                })
            );
            for (let i = 0; i < count; i++) {
              promises.push(DataStore.delete(eventStockDataPoolRecords[i]));
            }
          });
          eventsToLinkMap.forEach((count, id) => {
            const eventToLink = eventRecords.find((r) =>
              Object.entries(JSON.parse(id)).every(
                ([key, value]) => r[key] === value
              )
            );
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new EventStockDataPool({
                    stockDataPool: stockDataPoolRecord,
                    event: eventToLink,
                  })
                )
              );
            }
          });
          const modelFieldsToSave = {
            itemName: modelFields.itemName,
            barcode: modelFields.barcode,
            expiration: modelFields.expiration,
            stockInt: modelFields.stockInt,
            limitInt: modelFields.limitInt,
            value: modelFields.value,
            purchaseID: modelFields.purchaseID,
            untitledfield: modelFields.untitledfield,
            status: modelFields.status,
            stockssubcategoryID: modelFields.stockssubcategoryID,
            tenantsID: modelFields.tenantsID,
          };
          promises.push(
            DataStore.save(
              StockDataPool.copyOf(stockDataPoolRecord, (updated) => {
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
      {...getOverrideProps(overrides, "StockDataPoolUpdateForm")}
      {...rest}
    >
      <TextField
        label="Item name"
        isRequired={false}
        isReadOnly={false}
        value={itemName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              itemName: value,
              barcode,
              expiration,
              stockInt,
              limitInt,
              value,
              purchaseID,
              untitledfield,
              status,
              stockssubcategoryID,
              tenantsID,
              events,
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
        label="Barcode"
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
              itemName,
              barcode: value,
              expiration,
              stockInt,
              limitInt,
              value,
              purchaseID,
              untitledfield,
              status,
              stockssubcategoryID,
              tenantsID,
              events,
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
        label="Expiration"
        isRequired={false}
        isReadOnly={false}
        value={expiration}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              itemName,
              barcode,
              expiration: value,
              stockInt,
              limitInt,
              value,
              purchaseID,
              untitledfield,
              status,
              stockssubcategoryID,
              tenantsID,
              events,
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
        label="Stock int"
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
              itemName,
              barcode,
              expiration,
              stockInt: value,
              limitInt,
              value,
              purchaseID,
              untitledfield,
              status,
              stockssubcategoryID,
              tenantsID,
              events,
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
        label="Limit int"
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
              itemName,
              barcode,
              expiration,
              stockInt,
              limitInt: value,
              value,
              purchaseID,
              untitledfield,
              status,
              stockssubcategoryID,
              tenantsID,
              events,
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
      <TextField
        label="Value"
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
              itemName,
              barcode,
              expiration,
              stockInt,
              limitInt,
              value: value,
              purchaseID,
              untitledfield,
              status,
              stockssubcategoryID,
              tenantsID,
              events,
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
        label="Purchase id"
        isRequired={false}
        isReadOnly={false}
        value={purchaseID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              itemName,
              barcode,
              expiration,
              stockInt,
              limitInt,
              value,
              purchaseID: value,
              untitledfield,
              status,
              stockssubcategoryID,
              tenantsID,
              events,
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
        label="Untitledfield"
        isRequired={false}
        isReadOnly={false}
        value={untitledfield}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              itemName,
              barcode,
              expiration,
              stockInt,
              limitInt,
              value,
              purchaseID,
              untitledfield: value,
              status,
              stockssubcategoryID,
              tenantsID,
              events,
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
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              itemName,
              barcode,
              expiration,
              stockInt,
              limitInt,
              value,
              purchaseID,
              untitledfield,
              status: value,
              stockssubcategoryID,
              tenantsID,
              events,
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              itemName,
              barcode,
              expiration,
              stockInt,
              limitInt,
              value,
              purchaseID,
              untitledfield,
              status,
              stockssubcategoryID: value,
              tenantsID,
              events,
            };
            const result = onChange(modelFields);
            value = result?.stockssubcategoryID ?? value;
          }
          setStockssubcategoryID(value);
          setCurrentStockssubcategoryIDValue(undefined);
        }}
        currentFieldValue={currentStockssubcategoryIDValue}
        label={"Stockssubcategory id"}
        items={stockssubcategoryID ? [stockssubcategoryID] : []}
        hasError={errors?.stockssubcategoryID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "stockssubcategoryID",
            currentStockssubcategoryIDValue
          )
        }
        errorMessage={errors?.stockssubcategoryID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.stockssubcategoryID(
                stocksSubCategoryRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentStockssubcategoryIDDisplayValue(
            value
              ? getDisplayValue.stockssubcategoryID(
                  stocksSubCategoryRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentStockssubcategoryIDValue(value);
        }}
        inputFieldRef={stockssubcategoryIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Stockssubcategory id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search StocksSubCategory"
          value={currentStockssubcategoryIDDisplayValue}
          options={stocksSubCategoryRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.stockssubcategoryID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentStockssubcategoryIDValue(id);
            setCurrentStockssubcategoryIDDisplayValue(label);
            runValidationTasks("stockssubcategoryID", label);
          }}
          onClear={() => {
            setCurrentStockssubcategoryIDDisplayValue("");
          }}
          defaultValue={stockssubcategoryID}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.stockssubcategoryID?.hasError) {
              runValidationTasks("stockssubcategoryID", value);
            }
            setCurrentStockssubcategoryIDDisplayValue(value);
            setCurrentStockssubcategoryIDValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "stockssubcategoryID",
              currentStockssubcategoryIDValue
            )
          }
          errorMessage={errors.stockssubcategoryID?.errorMessage}
          hasError={errors.stockssubcategoryID?.hasError}
          ref={stockssubcategoryIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "stockssubcategoryID")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              itemName,
              barcode,
              expiration,
              stockInt,
              limitInt,
              value,
              purchaseID,
              untitledfield,
              status,
              stockssubcategoryID,
              tenantsID: value,
              events,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              itemName,
              barcode,
              expiration,
              stockInt,
              limitInt,
              value,
              purchaseID,
              untitledfield,
              status,
              stockssubcategoryID,
              tenantsID,
              events: values,
            };
            const result = onChange(modelFields);
            values = result?.events ?? values;
          }
          setEvents(values);
          setCurrentEventsValue(undefined);
          setCurrentEventsDisplayValue("");
        }}
        currentFieldValue={currentEventsValue}
        label={"Events"}
        items={events}
        hasError={errors?.events?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("events", currentEventsValue)
        }
        errorMessage={errors?.events?.errorMessage}
        getBadgeText={getDisplayValue.events}
        setFieldValue={(model) => {
          setCurrentEventsDisplayValue(
            model ? getDisplayValue.events(model) : ""
          );
          setCurrentEventsValue(model);
        }}
        inputFieldRef={eventsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Events"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Event"
          value={currentEventsDisplayValue}
          options={eventRecords
            .filter((r) => !eventsIdSet.has(getIDValue.events?.(r)))
            .map((r) => ({
              id: getIDValue.events?.(r),
              label: getDisplayValue.events?.(r),
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
            runValidationTasks("events", label);
          }}
          onClear={() => {
            setCurrentEventsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.events?.hasError) {
              runValidationTasks("events", value);
            }
            setCurrentEventsDisplayValue(value);
            setCurrentEventsValue(undefined);
          }}
          onBlur={() => runValidationTasks("events", currentEventsDisplayValue)}
          errorMessage={errors.events?.errorMessage}
          hasError={errors.events?.hasError}
          ref={eventsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "events")}
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
