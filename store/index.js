import { create } from 'zustand';

const useAppStore = create((set) => ({
    initialData: 'Depok, Jawa Barat',
    userLocation: 'Depok, Jawa Barat',
    increaseInitialData: () => set((state) => ({ initialData: state.initialData + 1 })),
    removeAllInitialData: () => set(() => ({ initialData: 0 }))
}));

export default useAppStore;
