/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
      id
      sub
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sub
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUserProfiles = /* GraphQL */ `
  query SyncUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        sub
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getJobTitles = /* GraphQL */ `
  query GetJobTitles($id: ID!) {
    getJobTitles(id: $id) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listJobTitles = /* GraphQL */ `
  query ListJobTitles(
    $filter: ModelJobTitlesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobTitles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncJobTitles = /* GraphQL */ `
  query SyncJobTitles(
    $filter: ModelJobTitlesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncJobTitles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getSex = /* GraphQL */ `
  query GetSex($id: ID!) {
    getSex(id: $id) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listSexes = /* GraphQL */ `
  query ListSexes(
    $filter: ModelSexFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSexes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncSexes = /* GraphQL */ `
  query SyncSexes(
    $filter: ModelSexFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSexes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAsinUserOfTenant = /* GraphQL */ `
  query GetAsinUserOfTenant($id: ID!) {
    getAsinUserOfTenant(id: $id) {
      id
      tenantID
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listAsinUserOfTenants = /* GraphQL */ `
  query ListAsinUserOfTenants(
    $filter: ModelAsinUserOfTenantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAsinUserOfTenants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tenantID
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAsinUserOfTenants = /* GraphQL */ `
  query SyncAsinUserOfTenants(
    $filter: ModelAsinUserOfTenantFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAsinUserOfTenants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        tenantID
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      StockDataPools {
        nextToken
        startedAt
        __typename
      }
      tenantsID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncEvents = /* GraphQL */ `
  query SyncEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        tenantsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getTenants = /* GraphQL */ `
  query GetTenants($id: ID!) {
    getTenants(id: $id) {
      id
      name
      StockDataPools {
        nextToken
        startedAt
        __typename
      }
      Events {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTenants = /* GraphQL */ `
  query SyncTenants(
    $filter: ModelTenantsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTenants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
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
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncStksCategories = /* GraphQL */ `
  query SyncStksCategories(
    $filter: ModelStksCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStksCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getStockDataPool = /* GraphQL */ `
  query GetStockDataPool($id: ID!) {
    getStockDataPool(id: $id) {
      id
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
      tenantsID
      events {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        tenantsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncStockDataPools = /* GraphQL */ `
  query SyncStockDataPools(
    $filter: ModelStockDataPoolFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStockDataPools(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
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
        tenantsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
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
        tenantsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
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
        tenantsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
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
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncStocksSubCategories = /* GraphQL */ `
  query SyncStocksSubCategories(
    $filter: ModelStocksSubCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStocksSubCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        stkscategoryID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getEventStockDataPool = /* GraphQL */ `
  query GetEventStockDataPool($id: ID!) {
    getEventStockDataPool(id: $id) {
      id
      eventId
      stockDataPoolId
      event {
        id
        tenantsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      stockDataPool {
        id
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
        tenantsID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listEventStockDataPools = /* GraphQL */ `
  query ListEventStockDataPools(
    $filter: ModelEventStockDataPoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventStockDataPools(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventId
        stockDataPoolId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncEventStockDataPools = /* GraphQL */ `
  query SyncEventStockDataPools(
    $filter: ModelEventStockDataPoolFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEventStockDataPools(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        eventId
        stockDataPoolId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const eventStockDataPoolsByEventId = /* GraphQL */ `
  query EventStockDataPoolsByEventId(
    $eventId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEventStockDataPoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventStockDataPoolsByEventId(
      eventId: $eventId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventId
        stockDataPoolId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const eventStockDataPoolsByStockDataPoolId = /* GraphQL */ `
  query EventStockDataPoolsByStockDataPoolId(
    $stockDataPoolId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEventStockDataPoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventStockDataPoolsByStockDataPoolId(
      stockDataPoolId: $stockDataPoolId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventId
        stockDataPoolId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
