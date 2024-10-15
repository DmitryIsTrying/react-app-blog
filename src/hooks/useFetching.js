import { useState } from 'react'

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null) // Указываем, что error может быть null

  const fetching = async (...args) => {
    try {
      setIsLoading(true)
      await callback(...args)
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message) // Убедитесь, что e имеет тип Error
      } else {
        setError('Unknown error occurred') // На случай, если это не Error
      }
    } finally {
      setIsLoading(false)
    }
  }

  return [fetching, isLoading, error] // Возвращаем объект
}
