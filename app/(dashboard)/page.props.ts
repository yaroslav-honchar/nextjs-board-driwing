export type DashboardPageSearchParamsType = {
  search?: string
  favorites?: string
}

export interface IDashboardPageProps {
  searchParams: DashboardPageSearchParamsType
}
