"use client";
import { useContext, createContext, useState, useMemo } from 'react';

const defaultValue = {
  search: [],
  setSerch: () => undefined,
};

const SearchContext = createContext(defaultValue);

const SearchProvider = ({ children }) => {
  const [search, setSerch] = useState(defaultValue.search);

  const value = useMemo(
    () => ({
      search,
      setSerch,
    }),
    [search, setSerch]
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

const useSearch = () => {
  const search = useContext(SearchContext);

  if (!search) throw Error('Não da pra usar fora do contexto');

  return search;
};

export { SearchProvider, useSearch };