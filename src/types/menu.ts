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
  limit: number
}

export type { MenuParamsProps, MenuTabsProps }
