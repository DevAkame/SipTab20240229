// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Status = {
  "ENABLE": "ENABLE",
  "DISABLE": "DISABLE",
  "ATHER": "ATHER"
};

const { UserProfile, JobTitles, Sex, AsinUserOfTenant, Event, Tenants, StksCategory, StockDataPool, StocksSubCategory, EventStockDataPool } = initSchema(schema);

export {
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