// lib/utils/pagination.ts
import { redirect } from "next/navigation";
import { ValidatePaginationParamsProps } from "@/types";


export function validatePaginationParams({
  page,
  limit,
  totalItems,
  basePath,
}: ValidatePaginationParamsProps) {
  const MIN_LIMIT = 6;
  const MAX_LIMIT = 30;

  const safeLimit = Math.min(Math.max(limit, MIN_LIMIT), MAX_LIMIT); // 6 <= limit <= 30
  const totalPages = Math.ceil(totalItems / safeLimit);

  const safePage = Math.min(Math.max(page, 1), totalPages || 1); // page should be within [1, totalPages]

  // if page/limit isn't valid, redirect to the valid page
  if (page !== safePage || limit !== safeLimit) {
    redirect(`${basePath}?page=${safePage}&limit=${safeLimit}`);
  }

  return { safePage, safeLimit, totalPages };
}
