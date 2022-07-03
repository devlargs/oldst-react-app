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
  limit: 10,
  setLimit: (limit) => set({ limit }),
  endOfCatalouge: false,
  setEndOfCatalouge: (endOfCatalouge) => set({ endOfCatalouge }),
  sorter: null,
  setSorter: (sorter) => set({ sorter }),
  adImage: null,
  setAdImage: (adImage) => set({ adImage }),
}));

export default useProducts;
