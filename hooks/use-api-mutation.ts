import { useState } from "react"
import { useMutation } from "convex/react"

export const useApiMutation = (mutationFn: any) => {
  const [isPending, setIsPending] = useState<boolean>(false)
  const apiMutation = useMutation(mutationFn)

  const mutate = async (payload: any) => {
    setIsPending(true)

    return apiMutation(payload)
      .then((result) => {
        return result
      })
      .finally(() => setIsPending(false))
  }

  return { mutate, isPending }
}
