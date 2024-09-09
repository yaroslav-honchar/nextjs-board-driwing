import { useState } from "react"
import { useMutation } from "convex/react"

export const useApiMutation = (mutationFn: any) => {
  const [isPending, setIsPending] = useState<boolean>(false)
  const [error, setError] = useState<unknown>(null)
  const apiMutation = useMutation(mutationFn)

  const mutate = async (payload: any) => {
    setIsPending(true)

    return apiMutation(payload)
      .then((result) => {
        return result
      })
      .catch((error) => {
        console.error(error)
        setError(error)
      })
      .finally(() => setIsPending(false))
  }

  return { mutate, isPending, error }
}
