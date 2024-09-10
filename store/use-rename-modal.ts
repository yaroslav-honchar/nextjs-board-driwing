import { create } from "zustand"

const defaultValues = {
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
