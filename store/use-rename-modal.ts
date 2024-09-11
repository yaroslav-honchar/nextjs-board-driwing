import { create } from "zustand"
import type { Id } from "@/convex/_generated/dataModel"

type RenameModalValuesType = {
  id: Id<"boards"> | string
  title: string
}

const defaultValues: RenameModalValuesType = {
  id: "",
  title: "",
}

interface IRenameModal {
  isOpen: boolean
  initialValues: typeof defaultValues
  onOpen: (values: typeof defaultValues) => void
  onClose: () => void
}

export const useRenameModal = create<IRenameModal>((set) => ({
  isOpen: false,
  initialValues: defaultValues,
  onOpen: (values) => {
    set({
      isOpen: true,
      initialValues: values,
    })
  },
  onClose: () => {
    set({
      isOpen: false,
      initialValues: defaultValues,
    })
  },
}))
