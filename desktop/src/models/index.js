// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Status = {
  "ENABLE": "ENABLE",
  "DISABLE": "DISABLE",
  "PAUSED": "PAUSED"
};

const { UISideNav, UserAsignTenant, UserProfile, JobTitles, Sex, AsinUserOfTenant, Event, Tenants, StksCategory, StockDataPool, StocksSubCategory, EventStockDataPool } = initSchema(schema);

export {
  UISideNav,
  UserAsignTenant,
  UserProfile,
  JobTitles,
  Sex,
  AsinUserOfTenant,
  Event,
  Tenants,
  StksCategory,
  StockDataPool,
  StocksSubCategory,
  EventStockDataPool,
  Status
};