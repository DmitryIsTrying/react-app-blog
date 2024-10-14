import { usePagination } from '../../../hooks/usePagination'

export const Pagination = ({
  totalPages,
  page,
  changePage,
}: {
  totalPages: number
  page: number
  changePage: (page: number) => void
}) => {
  let pagesArray = usePagination(totalPages)

  return (
    <div className="page__wrapper">
      {pagesArray.map((p, i) => {
        return (
          <span
            onClick={() => p !== page && changePage(p)}
            className={p === page ? 'page page__current' : 'page'}
            key={p}>
            {p}
          </span>
        )
      })}
    </div>
  )
}
