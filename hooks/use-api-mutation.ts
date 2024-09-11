import { useState } from "react"
import { useMutation } from "convex/react"
import type { FunctionReference } from "convex/server"

export const useApiMutation = <TPayload, TResult>(mutationFn: FunctionReference<"mutation">) => {
  const [isPending, setIsPending] = useState<boolean>(false)
  const apiMutation = useMutation(mutationFn)

  const mutate = async (payload: TPayload): Promise<TResult> => {
    setIsPending(true)

    return apiMutation(payload)
      .then((result: TResult) => {
        return result
      })
      .finally(() => setIsPending(false))
  }

  return { mutate, isPending }
}
