import create from "zustand";

const useProducts = create((set) => ({
  products: [],
  setProducts: (products) =>
    set({
      products,
    }),
  loading: false,
  setLoading: (loading) => set({ loading }),
}));

export default useProducts;
