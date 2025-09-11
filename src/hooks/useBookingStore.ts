import { create } from 'zustand';

// Tipe untuk state dan actions
interface BookingModalState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

// Buat store
export const useBookingStore = create<BookingModalState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));