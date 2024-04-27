import { create } from "zustand";

const useUserIdStore = create((set) => ({
    userId: false,
    setUserId: (arg) => set({userId: arg})
}))

export default useUserIdStore;