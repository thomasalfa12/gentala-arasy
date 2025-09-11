import { create } from 'zustand';

interface MembershipModalState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useMembershipStore = create<MembershipModalState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));