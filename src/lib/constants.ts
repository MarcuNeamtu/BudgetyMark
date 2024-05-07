export const ROUTE_DASHBOARD = 'dashboard'
export const ROUTE_TRANSACTIONS = 'transactions'
export const ROUTE_BUDGET = 'budget'

export const ROUTE_NAMES = {
  [ROUTE_DASHBOARD]: 'Dashboard',
  [ROUTE_TRANSACTIONS]: 'Transactions',
  [ROUTE_BUDGET]: 'Budget',
} as const

export const ROUTES = [
  ROUTE_DASHBOARD,
  ROUTE_TRANSACTIONS,
  ROUTE_BUDGET,
] as const