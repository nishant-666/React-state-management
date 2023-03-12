import { create } from "zustand";

export const useUserStore = create((set) => ({
  users: 0,
  increasePopulation: () => set((state) => ({ users: state.users + 1 })),
  decreasePopulation: () => set((state) => ({ users: state.users - 1 })),
  removeAllUsers: () => set({ users: 0 }),
}));
