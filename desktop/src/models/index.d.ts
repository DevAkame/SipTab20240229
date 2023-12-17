import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum Status {
  ENABLE = "ENABLE",
  DISABLE = "DISABLE",
  PAUSED = "PAUSED"
}



type EagerUISideNav = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UISideNav, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly src?: string | null;
  readonly path?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUISideNav = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UISideNav, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly src?: string | null;
  readonly path?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UISideNav = LazyLoading extends LazyLoadingDisabled ? EagerUISideNav : LazyUISideNav

export declare const UISideNav: (new (init: ModelInit<UISideNav>) => UISideNav) & {
  copyOf(source: UISideNav, mutator: (draft: MutableModel<UISideNav>) => MutableModel<UISideNav> | void): UISideNav;
}

type EagerUserAsignTenant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserAsignTenant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userSub?: string | null;
  readonly TenantState?: Status | keyof typeof Status | null;
  readonly tenantsID: string;
  readonly UserState?: Status | keyof typeof Status | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserAsignTenant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserAsignTenant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userSub?: string | null;
  readonly TenantState?: Status | keyof typeof Status | null;
  readonly tenantsID: string;
  readonly UserState?: Status | keyof typeof Status | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserAsignTenant = LazyLoading extends LazyLoadingDisabled ? EagerUserAsignTenant : LazyUserAsignTenant

export declare const UserAsignTenant: (new (init: ModelInit<UserAsignTenant>) => UserAsignTenant) & {
  copyOf(source: UserAsignTenant, mutator: (draft: MutableModel<UserAsignTenant>) => MutableModel<UserAsignTenant> | void): UserAsignTenant;
}

type EagerUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProfile = LazyLoading extends LazyLoadingDisabled ? EagerUserProfile : LazyUserProfile

export declare const UserProfile: (new (init: ModelInit<UserProfile>) => UserProfile) & {
  copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile>) => MutableModel<UserProfile> | void): UserProfile;
}

type EagerJobTitles = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JobTitles, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJobTitles = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JobTitles, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type JobTitles = LazyLoading extends LazyLoadingDisabled ? EagerJobTitles : LazyJobTitles

export declare const JobTitles: (new (init: ModelInit<JobTitles>) => JobTitles) & {
  copyOf(source: JobTitles, mutator: (draft: MutableModel<JobTitles>) => MutableModel<JobTitles> | void): JobTitles;
}

type EagerSex = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sex, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySex = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sex, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Sex = LazyLoading extends LazyLoadingDisabled ? EagerSex : LazySex

export declare const Sex: (new (init: ModelInit<Sex>) => Sex) & {
  copyOf(source: Sex, mutator: (draft: MutableModel<Sex>) => MutableModel<Sex> | void): Sex;
}

type EagerAsinUserOfTenant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AsinUserOfTenant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tenantID?: string | null;
  readonly userID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAsinUserOfTenant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AsinUserOfTenant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tenantID?: string | null;
  readonly userID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AsinUserOfTenant = LazyLoading extends LazyLoadingDisabled ? EagerAsinUserOfTenant : LazyAsinUserOfTenant

export declare const AsinUserOfTenant: (new (init: ModelInit<AsinUserOfTenant>) => AsinUserOfTenant) & {
  copyOf(source: AsinUserOfTenant, mutator: (draft: MutableModel<AsinUserOfTenant>) => MutableModel<AsinUserOfTenant> | void): AsinUserOfTenant;
}

type EagerEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly StockDataPools?: (EventStockDataPool | null)[] | null;
  readonly tenantsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly StockDataPools: AsyncCollection<EventStockDataPool>;
  readonly tenantsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Event = LazyLoading extends LazyLoadingDisabled ? EagerEvent : LazyEvent

export declare const Event: (new (init: ModelInit<Event>) => Event) & {
  copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}

type EagerTenants = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tenants, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly StockDataPools?: (StockDataPool | null)[] | null;
  readonly Events?: (Event | null)[] | null;
  readonly UserAsignTenants?: (UserAsignTenant | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTenants = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tenants, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly StockDataPools: AsyncCollection<StockDataPool>;
  readonly Events: AsyncCollection<Event>;
  readonly UserAsignTenants: AsyncCollection<UserAsignTenant>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Tenants = LazyLoading extends LazyLoadingDisabled ? EagerTenants : LazyTenants

export declare const Tenants: (new (init: ModelInit<Tenants>) => Tenants) & {
  copyOf(source: Tenants, mutator: (draft: MutableModel<Tenants>) => MutableModel<Tenants> | void): Tenants;
}

type EagerStksCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StksCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly StocksSubCategories?: (StocksSubCategory | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStksCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StksCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly StocksSubCategories: AsyncCollection<StocksSubCategory>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StksCategory = LazyLoading extends LazyLoadingDisabled ? EagerStksCategory : LazyStksCategory

export declare const StksCategory: (new (init: ModelInit<StksCategory>) => StksCategory) & {
  copyOf(source: StksCategory, mutator: (draft: MutableModel<StksCategory>) => MutableModel<StksCategory> | void): StksCategory;
}

type EagerStockDataPool = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StockDataPool, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemName?: string | null;
  readonly barcode?: number | null;
  readonly expiration?: string | null;
  readonly stockInt?: number | null;
  readonly limitInt?: number | null;
  readonly value?: number | null;
  readonly purchaseID?: string | null;
  readonly untitledfield?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly stockssubcategoryID: string;
  readonly tenantsID: string;
  readonly events?: (EventStockDataPool | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStockDataPool = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StockDataPool, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemName?: string | null;
  readonly barcode?: number | null;
  readonly expiration?: string | null;
  readonly stockInt?: number | null;
  readonly limitInt?: number | null;
  readonly value?: number | null;
  readonly purchaseID?: string | null;
  readonly untitledfield?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly stockssubcategoryID: string;
  readonly tenantsID: string;
  readonly events: AsyncCollection<EventStockDataPool>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StockDataPool = LazyLoading extends LazyLoadingDisabled ? EagerStockDataPool : LazyStockDataPool

export declare const StockDataPool: (new (init: ModelInit<StockDataPool>) => StockDataPool) & {
  copyOf(source: StockDataPool, mutator: (draft: MutableModel<StockDataPool>) => MutableModel<StockDataPool> | void): StockDataPool;
}

type EagerStocksSubCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StocksSubCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly stkscategoryID: string;
  readonly StockDataPools?: (StockDataPool | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStocksSubCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StocksSubCategory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly stkscategoryID: string;
  readonly StockDataPools: AsyncCollection<StockDataPool>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StocksSubCategory = LazyLoading extends LazyLoadingDisabled ? EagerStocksSubCategory : LazyStocksSubCategory

export declare const StocksSubCategory: (new (init: ModelInit<StocksSubCategory>) => StocksSubCategory) & {
  copyOf(source: StocksSubCategory, mutator: (draft: MutableModel<StocksSubCategory>) => MutableModel<StocksSubCategory> | void): StocksSubCategory;
}

type EagerEventStockDataPool = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EventStockDataPool, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly eventId?: string | null;
  readonly stockDataPoolId?: string | null;
  readonly event: Event;
  readonly stockDataPool: StockDataPool;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEventStockDataPool = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EventStockDataPool, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly eventId?: string | null;
  readonly stockDataPoolId?: string | null;
  readonly event: AsyncItem<Event>;
  readonly stockDataPool: AsyncItem<StockDataPool>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EventStockDataPool = LazyLoading extends LazyLoadingDisabled ? EagerEventStockDataPool : LazyEventStockDataPool

export declare const EventStockDataPool: (new (init: ModelInit<EventStockDataPool>) => EventStockDataPool) & {
  copyOf(source: EventStockDataPool, mutator: (draft: MutableModel<EventStockDataPool>) => MutableModel<EventStockDataPool> | void): EventStockDataPool;
}