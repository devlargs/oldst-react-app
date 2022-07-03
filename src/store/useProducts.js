import create from "zustand";

const useProducts = create((set) => ({
  products: [],
  setProducts: (products) =>
    set({
      products,
    }),
  loading: false,
  setLoading: (loading) => set({ loading }),
  page: 1,
  setPage: (page) => set({ page }),
  limit: 15,
  setLimit: (limit) => set({ limit }),
  endOfCatalouge: false,
  setEndOfCatalouge: (endOfCatalouge) => set({ endOfCatalouge }),
}));

export default useProducts;
