import { RecipeProps } from "./recipe";
interface MenuParamsProps {
  params: {
    preference: string;
  };
  searchParams: {
    page?: string;
    limit?: string;
  };
}

interface MenuTabsProps {
  page: number;
  limit: number;
  active: string;
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  preference: string;
  limit: number;
}

type GetMenuDataProps =
  | { previewOnly: true; totalItems: number }
  | {
      previewOnly?: false;
      recipes: RecipeProps[];
      pagination: {
        currentPage: number;
        totalPages: number;
        next: number;
        prev: number;
        pages: number[];
      };
    };

interface ValidatePaginationParamsProps {
  page: number;
  limit: number;
  totalItems: number;
  basePath: string;
}

export type {
  MenuParamsProps,
  MenuTabsProps,
  PaginationProps,
  GetMenuDataProps,
  ValidatePaginationParamsProps
};
