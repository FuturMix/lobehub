/**
 * Agent Marketplace Tool Identifier
 */
export const AgentMarketplaceIdentifier = 'lobe-agent-marketplace';

/**
 * Agent Marketplace API Names
 */
export const AgentMarketplaceApiName = {
  /** Cancel a pending marketplace request. Usually framework-handled. */
  cancelAgentPick: 'cancelAgentPick',
  /** Inspect current state of a known pick request. For recovery/diagnostics. */
  getPickState: 'getPickState',
  /** Open the Marketplace picker with category hints. */
  showAgentMarketplace: 'showAgentMarketplace',
  /** Mark a pending marketplace request as skipped. Usually framework-handled. */
  skipAgentPick: 'skipAgentPick',
  /** Record the user's template selection. Usually framework-handled. */
  submitAgentPick: 'submitAgentPick',
} as const;

export type AgentMarketplaceApiNameType =
  (typeof AgentMarketplaceApiName)[keyof typeof AgentMarketplaceApiName];

/**
 * 13 fixed curated categories sourced from LOBE-7801.
 * Slugs are kebab-case; stable IDs — do not rename without migration.
 */
export enum MarketplaceCategory {
  BusinessStrategy = 'business-strategy',
  ContentCreation = 'content-creation',
  CreatorEconomy = 'creator-economy',
  DesignCreative = 'design-creative',
  Engineering = 'engineering',
  FinanceLegal = 'finance-legal',
  LearningResearch = 'learning-research',
  Marketing = 'marketing',
  Operations = 'operations',
  PeopleHR = 'people-hr',
  PersonalLife = 'personal-life',
  ProductManagement = 'product-management',
  SalesCustomer = 'sales-customer',
}

export const MARKETPLACE_CATEGORY_VALUES = Object.values(MarketplaceCategory);

/**
 * A single agent template shown in the marketplace picker.
 */
export interface AgentTemplate {
  /** Optional emoji or image URL — falls back to a category default in the UI. */
  avatar?: string;
  category: MarketplaceCategory;
  /** One-line capability summary (zh-CN for MVP). */
  description: string;
  /**
   * Template slug matching lobehub/agent-template repo entries
   * (e.g. 'copywriter', 'blog-writer').
   */
  id: string;
  /** Human-readable title (English Title Case for MVP). */
  title: string;
}

/**
 * Args to open the Marketplace picker.
 * categoryHints must contain at least one MarketplaceCategory slug.
 */
export interface ShowAgentMarketplaceArgs {
  categoryHints: MarketplaceCategory[];
  description?: string;
  prompt: string;
  requestId: string;
}

export interface SubmitAgentPickArgs {
  requestId: string;
  /** Template IDs the user selected from the picker. */
  selectedTemplateIds: string[];
}

export interface SkipAgentPickArgs {
  reason?: string;
  requestId: string;
}

export interface CancelAgentPickArgs {
  requestId: string;
}

export interface GetPickStateArgs {
  requestId: string;
}

export type PickStatus = 'cancelled' | 'pending' | 'skipped' | 'submitted';

export interface PickState {
  categoryHints: MarketplaceCategory[];
  description?: string;
  prompt: string;
  requestId: string;
  selectedTemplateIds?: string[];
  skipReason?: string;
  status: PickStatus;
}

export type AgentPickResult =
  | { requestId: string; selectedTemplateIds: string[]; type: 'submitted' }
  | { reason?: string; requestId: string; type: 'skipped' }
  | { requestId: string; type: 'cancelled' };
