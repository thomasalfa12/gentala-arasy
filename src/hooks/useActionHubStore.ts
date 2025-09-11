import { create } from 'zustand';

interface ActionHubState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useActionHubStore = create<ActionHubState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));