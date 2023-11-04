/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJobTitles = /* GraphQL */ `
  query GetJobTitles($id: ID!) {
    getJobTitles(id: $id) {
      id
      name
      UserProfiles {
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSex = /* GraphQL */ `
  query GetSex($id: ID!) {
    getSex(id: $id) {
      id
      name
      UserProfiles {
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserProfiles = /* GraphQL */ `
  query GetUserProfiles($id: ID!) {
    getUserProfiles(id: $id) {
      id
      name
      fimlyNameKana
      lastNameKana
      fimlyNameKanzi
      lastNameKanzi
      postcode
      emailAddress
      phoneNum
      userID
      birthday
      jobtitlesID
      sexID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfilesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        fimlyNameKana
        lastNameKana
        fimlyNameKanzi
        lastNameKanzi
        postcode
        emailAddress
        phoneNum
        userID
        birthday
        jobtitlesID
        sexID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userProfilesByJobtitlesID = /* GraphQL */ `
  query UserProfilesByJobtitlesID(
    $jobtitlesID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserProfilesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userProfilesByJobtitlesID(
      jobtitlesID: $jobtitlesID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        fimlyNameKana
        lastNameKana
        fimlyNameKanzi
        lastNameKanzi
        postcode
        emailAddress
        phoneNum
        userID
        birthday
        jobtitlesID
        sexID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userProfilesBySexID = /* GraphQL */ `
  query UserProfilesBySexID(
    $sexID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserProfilesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userProfilesBySexID(
      sexID: $sexID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        fimlyNameKana
        lastNameKana
        fimlyNameKanzi
        lastNameKanzi
        postcode
        emailAddress
        phoneNum
        userID
        birthday
        jobtitlesID
        sexID
        createdAt
        updatedAt
        __typename
      }
      nextToken
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
        __typename
      }
      nextToken
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
        __typename
      }
      tenantsID
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
      StockDataPools {
        nextToken
        __typename
      }
      Events {
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
        __typename
      }
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
        __typename
      }
      createdAt
      updatedAt
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
        __typename
      }
      nextToken
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
        __typename
      }
      nextToken
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
