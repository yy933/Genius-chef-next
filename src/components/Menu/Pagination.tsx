import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PaginationProps } from "@/types";

export default function MenuPagination({
  currentPage,
  totalPages,
  preference,
  limit,
}: PaginationProps) {
  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={`/menu/${preference}?page=${
                currentPage - 1
              }&limit=${limit}`}
            />
          </PaginationItem>
        )}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={`/menu/${preference}?page=${page}&limit=${limit}`}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              href={`/menu/${preference}?page=${
                currentPage + 1
              }&limit=${limit}`}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
