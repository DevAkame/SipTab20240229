/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tenantsID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const eventsByTenantsID = /* GraphQL */ `
  query EventsByTenantsID(
    $tenantsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventsByTenantsID(
      tenantsID: $tenantsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tenantsID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTenants = /* GraphQL */ `
  query GetTenants($id: ID!) {
    getTenants(id: $id) {
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
export const listTenants = /* GraphQL */ `
  query ListTenants(
    $filter: ModelTenantsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTenants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStksCategory = /* GraphQL */ `
  query GetStksCategory($id: ID!) {
    getStksCategory(id: $id) {
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
export const listStksCategories = /* GraphQL */ `
  query ListStksCategories(
    $filter: ModelStksCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStksCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStockDataPool = /* GraphQL */ `
  query GetStockDataPool($id: ID!) {
    getStockDataPool(id: $id) {
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
export const listStockDataPools = /* GraphQL */ `
  query ListStockDataPools(
    $filter: ModelStockDataPoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStockDataPools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const stockDataPoolsByStockssubcategoryID = /* GraphQL */ `
  query StockDataPoolsByStockssubcategoryID(
    $stockssubcategoryID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStockDataPoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    stockDataPoolsByStockssubcategoryID(
      stockssubcategoryID: $stockssubcategoryID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const stockDataPoolsByEventID = /* GraphQL */ `
  query StockDataPoolsByEventID(
    $eventID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStockDataPoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    stockDataPoolsByEventID(
      eventID: $eventID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const stockDataPoolsByTenantsID = /* GraphQL */ `
  query StockDataPoolsByTenantsID(
    $tenantsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStockDataPoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    stockDataPoolsByTenantsID(
      tenantsID: $tenantsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getStocksSubCategory = /* GraphQL */ `
  query GetStocksSubCategory($id: ID!) {
    getStocksSubCategory(id: $id) {
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
export const listStocksSubCategories = /* GraphQL */ `
  query ListStocksSubCategories(
    $filter: ModelStocksSubCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStocksSubCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        stkscategoryID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const stocksSubCategoriesByStkscategoryID = /* GraphQL */ `
  query StocksSubCategoriesByStkscategoryID(
    $stkscategoryID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStocksSubCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    stocksSubCategoriesByStkscategoryID(
      stkscategoryID: $stkscategoryID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        stkscategoryID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
