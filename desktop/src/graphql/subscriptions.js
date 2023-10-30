/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
      id
      tenantsID
      StockDataPools {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
      id
      tenantsID
      StockDataPools {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
      id
      tenantsID
      StockDataPools {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTenants = /* GraphQL */ `
  subscription OnCreateTenants($filter: ModelSubscriptionTenantsFilterInput) {
    onCreateTenants(filter: $filter) {
      id
      name
      Events {
        nextToken
        __typename
      }
      StockDataPools {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTenants = /* GraphQL */ `
  subscription OnUpdateTenants($filter: ModelSubscriptionTenantsFilterInput) {
    onUpdateTenants(filter: $filter) {
      id
      name
      Events {
        nextToken
        __typename
      }
      StockDataPools {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTenants = /* GraphQL */ `
  subscription OnDeleteTenants($filter: ModelSubscriptionTenantsFilterInput) {
    onDeleteTenants(filter: $filter) {
      id
      name
      Events {
        nextToken
        __typename
      }
      StockDataPools {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateStksCategory = /* GraphQL */ `
  subscription OnCreateStksCategory(
    $filter: ModelSubscriptionStksCategoryFilterInput
  ) {
    onCreateStksCategory(filter: $filter) {
      id
      name
      StocksSubCategories {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateStksCategory = /* GraphQL */ `
  subscription OnUpdateStksCategory(
    $filter: ModelSubscriptionStksCategoryFilterInput
  ) {
    onUpdateStksCategory(filter: $filter) {
      id
      name
      StocksSubCategories {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteStksCategory = /* GraphQL */ `
  subscription OnDeleteStksCategory(
    $filter: ModelSubscriptionStksCategoryFilterInput
  ) {
    onDeleteStksCategory(filter: $filter) {
      id
      name
      StocksSubCategories {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateStockDataPool = /* GraphQL */ `
  subscription OnCreateStockDataPool(
    $filter: ModelSubscriptionStockDataPoolFilterInput
  ) {
    onCreateStockDataPool(filter: $filter) {
      id
      createdatetime
      itemName
      barcode
      expiration
      stockInt
      limitInt
      value
      purchaseID
      untitledfield
      status
      stockssubcategoryID
      eventID
      tenantsID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateStockDataPool = /* GraphQL */ `
  subscription OnUpdateStockDataPool(
    $filter: ModelSubscriptionStockDataPoolFilterInput
  ) {
    onUpdateStockDataPool(filter: $filter) {
      id
      createdatetime
      itemName
      barcode
      expiration
      stockInt
      limitInt
      value
      purchaseID
      untitledfield
      status
      stockssubcategoryID
      eventID
      tenantsID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteStockDataPool = /* GraphQL */ `
  subscription OnDeleteStockDataPool(
    $filter: ModelSubscriptionStockDataPoolFilterInput
  ) {
    onDeleteStockDataPool(filter: $filter) {
      id
      createdatetime
      itemName
      barcode
      expiration
      stockInt
      limitInt
      value
      purchaseID
      untitledfield
      status
      stockssubcategoryID
      eventID
      tenantsID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateStocksSubCategory = /* GraphQL */ `
  subscription OnCreateStocksSubCategory(
    $filter: ModelSubscriptionStocksSubCategoryFilterInput
  ) {
    onCreateStocksSubCategory(filter: $filter) {
      id
      name
      stkscategoryID
      StockDataPools {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateStocksSubCategory = /* GraphQL */ `
  subscription OnUpdateStocksSubCategory(
    $filter: ModelSubscriptionStocksSubCategoryFilterInput
  ) {
    onUpdateStocksSubCategory(filter: $filter) {
      id
      name
      stkscategoryID
      StockDataPools {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteStocksSubCategory = /* GraphQL */ `
  subscription OnDeleteStocksSubCategory(
    $filter: ModelSubscriptionStocksSubCategoryFilterInput
  ) {
    onDeleteStocksSubCategory(filter: $filter) {
      id
      name
      stkscategoryID
      StockDataPools {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
