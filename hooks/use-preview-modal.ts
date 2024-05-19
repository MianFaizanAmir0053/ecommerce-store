import { create } from "zustand";
import { Product } from "@/types";

interface PreviewModalState {
  isOpen: boolean;
  data?: Product | null;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

export const usePreviewModal = create<PreviewModalState>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
