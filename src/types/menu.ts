interface MenuParamsProps {
  params: {
    preference: string;
  };
  searchParams: {
    page?: string;
    limit?: string;
  };
}

interface MenuTabsProps{
  page: number,
  limit: number,
  active: string
}

interface PaginationProps {
  currentPage: number,
  totalPages: number,
  preference: string,
  limit: number
}

export type { MenuParamsProps, MenuTabsProps, PaginationProps }
