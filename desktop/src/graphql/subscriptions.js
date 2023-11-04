/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateJobTitles = /* GraphQL */ `
  subscription OnCreateJobTitles(
    $filter: ModelSubscriptionJobTitlesFilterInput
  ) {
    onCreateJobTitles(filter: $filter) {
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
export const onUpdateJobTitles = /* GraphQL */ `
  subscription OnUpdateJobTitles(
    $filter: ModelSubscriptionJobTitlesFilterInput
  ) {
    onUpdateJobTitles(filter: $filter) {
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
export const onDeleteJobTitles = /* GraphQL */ `
  subscription OnDeleteJobTitles(
    $filter: ModelSubscriptionJobTitlesFilterInput
  ) {
    onDeleteJobTitles(filter: $filter) {
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
export const onCreateSex = /* GraphQL */ `
  subscription OnCreateSex($filter: ModelSubscriptionSexFilterInput) {
    onCreateSex(filter: $filter) {
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
export const onUpdateSex = /* GraphQL */ `
  subscription OnUpdateSex($filter: ModelSubscriptionSexFilterInput) {
    onUpdateSex(filter: $filter) {
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
export const onDeleteSex = /* GraphQL */ `
  subscription OnDeleteSex($filter: ModelSubscriptionSexFilterInput) {
    onDeleteSex(filter: $filter) {
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
export const onCreateUserProfiles = /* GraphQL */ `
  subscription OnCreateUserProfiles(
    $filter: ModelSubscriptionUserProfilesFilterInput
  ) {
    onCreateUserProfiles(filter: $filter) {
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
export const onUpdateUserProfiles = /* GraphQL */ `
  subscription OnUpdateUserProfiles(
    $filter: ModelSubscriptionUserProfilesFilterInput
  ) {
    onUpdateUserProfiles(filter: $filter) {
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
export const onDeleteUserProfiles = /* GraphQL */ `
  subscription OnDeleteUserProfiles(
    $filter: ModelSubscriptionUserProfilesFilterInput
  ) {
    onDeleteUserProfiles(filter: $filter) {
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
export const onCreateAsinUserOfTenant = /* GraphQL */ `
  subscription OnCreateAsinUserOfTenant(
    $filter: ModelSubscriptionAsinUserOfTenantFilterInput
  ) {
    onCreateAsinUserOfTenant(filter: $filter) {
      id
      tenantID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateAsinUserOfTenant = /* GraphQL */ `
  subscription OnUpdateAsinUserOfTenant(
    $filter: ModelSubscriptionAsinUserOfTenantFilterInput
  ) {
    onUpdateAsinUserOfTenant(filter: $filter) {
      id
      tenantID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteAsinUserOfTenant = /* GraphQL */ `
  subscription OnDeleteAsinUserOfTenant(
    $filter: ModelSubscriptionAsinUserOfTenantFilterInput
  ) {
    onDeleteAsinUserOfTenant(filter: $filter) {
      id
      tenantID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
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
export const onCreateTenants = /* GraphQL */ `
  subscription OnCreateTenants($filter: ModelSubscriptionTenantsFilterInput) {
    onCreateTenants(filter: $filter) {
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
export const onUpdateTenants = /* GraphQL */ `
  subscription OnUpdateTenants($filter: ModelSubscriptionTenantsFilterInput) {
    onUpdateTenants(filter: $filter) {
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
export const onDeleteTenants = /* GraphQL */ `
  subscription OnDeleteTenants($filter: ModelSubscriptionTenantsFilterInput) {
    onDeleteTenants(filter: $filter) {
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
export const onUpdateStockDataPool = /* GraphQL */ `
  subscription OnUpdateStockDataPool(
    $filter: ModelSubscriptionStockDataPoolFilterInput
  ) {
    onUpdateStockDataPool(filter: $filter) {
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
export const onDeleteStockDataPool = /* GraphQL */ `
  subscription OnDeleteStockDataPool(
    $filter: ModelSubscriptionStockDataPoolFilterInput
  ) {
    onDeleteStockDataPool(filter: $filter) {
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
export const onCreateEventStockDataPool = /* GraphQL */ `
  subscription OnCreateEventStockDataPool(
    $filter: ModelSubscriptionEventStockDataPoolFilterInput
  ) {
    onCreateEventStockDataPool(filter: $filter) {
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
export const onUpdateEventStockDataPool = /* GraphQL */ `
  subscription OnUpdateEventStockDataPool(
    $filter: ModelSubscriptionEventStockDataPoolFilterInput
  ) {
    onUpdateEventStockDataPool(filter: $filter) {
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
export const onDeleteEventStockDataPool = /* GraphQL */ `
  subscription OnDeleteEventStockDataPool(
    $filter: ModelSubscriptionEventStockDataPoolFilterInput
  ) {
    onDeleteEventStockDataPool(filter: $filter) {
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
