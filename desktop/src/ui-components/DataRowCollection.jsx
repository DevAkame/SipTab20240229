/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { StockDataPool } from "../models";
import {
  createDataStorePredicate,
  getOverrideProps,
  useDataStoreBinding,
} from "./utils";
import DataRow from "./DataRow";
import { Collection } from "@aws-amplify/ui-react";
export default function DataRowCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsFilterObj = { field: "tenantsID", operand: 75, operator: "eq" };
  const itemsFilter = createDataStorePredicate(itemsFilterObj);
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: StockDataPool,
    criteria: itemsFilter,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      isSearchable={true}
      searchPlaceholder="Search..."
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "DataRowCollection")}
      {...rest}
    >
      {(item, index) => (
        <DataRow
          stockDataPool={item}
          stksCategory={item}
          stocksSubCategory={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></DataRow>
      )}
    </Collection>
  );
}
