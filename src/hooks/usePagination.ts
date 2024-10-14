import { useMemo } from 'react'
import { getPagesArray } from '../utils/pages'

export const usePagination = (totalPages: number): number[] => {
  const pagesArray = useMemo(() => {
    return totalPages > 0 ? getPagesArray(totalPages) : []
  }, [totalPages])
  return pagesArray
}
