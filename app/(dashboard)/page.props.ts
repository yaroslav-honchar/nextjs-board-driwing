export type DashboardPageSearchParamsType = {
  search?: string
  favorites?: boolean
}

export interface IDashboardPageProps {
  searchParams: DashboardPageSearchParamsType
}
