/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createTenants = /* GraphQL */ `
  mutation CreateTenants(
    $input: CreateTenantsInput!
    $condition: ModelTenantsConditionInput
  ) {
    createTenants(input: $input, condition: $condition) {
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
export const updateTenants = /* GraphQL */ `
  mutation UpdateTenants(
    $input: UpdateTenantsInput!
    $condition: ModelTenantsConditionInput
  ) {
    updateTenants(input: $input, condition: $condition) {
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
export const deleteTenants = /* GraphQL */ `
  mutation DeleteTenants(
    $input: DeleteTenantsInput!
    $condition: ModelTenantsConditionInput
  ) {
    deleteTenants(input: $input, condition: $condition) {
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
export const createStksCategory = /* GraphQL */ `
  mutation CreateStksCategory(
    $input: CreateStksCategoryInput!
    $condition: ModelStksCategoryConditionInput
  ) {
    createStksCategory(input: $input, condition: $condition) {
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
export const updateStksCategory = /* GraphQL */ `
  mutation UpdateStksCategory(
    $input: UpdateStksCategoryInput!
    $condition: ModelStksCategoryConditionInput
  ) {
    updateStksCategory(input: $input, condition: $condition) {
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
export const deleteStksCategory = /* GraphQL */ `
  mutation DeleteStksCategory(
    $input: DeleteStksCategoryInput!
    $condition: ModelStksCategoryConditionInput
  ) {
    deleteStksCategory(input: $input, condition: $condition) {
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
export const createStockDataPool = /* GraphQL */ `
  mutation CreateStockDataPool(
    $input: CreateStockDataPoolInput!
    $condition: ModelStockDataPoolConditionInput
  ) {
    createStockDataPool(input: $input, condition: $condition) {
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
export const updateStockDataPool = /* GraphQL */ `
  mutation UpdateStockDataPool(
    $input: UpdateStockDataPoolInput!
    $condition: ModelStockDataPoolConditionInput
  ) {
    updateStockDataPool(input: $input, condition: $condition) {
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
export const deleteStockDataPool = /* GraphQL */ `
  mutation DeleteStockDataPool(
    $input: DeleteStockDataPoolInput!
    $condition: ModelStockDataPoolConditionInput
  ) {
    deleteStockDataPool(input: $input, condition: $condition) {
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
export const createStocksSubCategory = /* GraphQL */ `
  mutation CreateStocksSubCategory(
    $input: CreateStocksSubCategoryInput!
    $condition: ModelStocksSubCategoryConditionInput
  ) {
    createStocksSubCategory(input: $input, condition: $condition) {
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
export const updateStocksSubCategory = /* GraphQL */ `
  mutation UpdateStocksSubCategory(
    $input: UpdateStocksSubCategoryInput!
    $condition: ModelStocksSubCategoryConditionInput
  ) {
    updateStocksSubCategory(input: $input, condition: $condition) {
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
export const deleteStocksSubCategory = /* GraphQL */ `
  mutation DeleteStocksSubCategory(
    $input: DeleteStocksSubCategoryInput!
    $condition: ModelStocksSubCategoryConditionInput
  ) {
    deleteStocksSubCategory(input: $input, condition: $condition) {
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
