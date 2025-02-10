import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from "react";

interface IAppContext {
  selectedItem: { ligue: string; key: string } | null;
  setSelectedItem: Dispatch<SetStateAction<{ ligue: string; key: string } | null>>;

  selectedMenuItem: { elemMenu: string } | string | null;
  setSelectedMenuItem: Dispatch<SetStateAction<{ elemMenu: string } | string | null>>;

  favorites: any[];
  toggleFavorites: (match: any) => void;
}

interface IAppProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<IAppContext>({
  selectedItem: null,
  setSelectedItem: () => { },

  selectedMenuItem: null,
  setSelectedMenuItem: () => { },

  favorites: [],
  toggleFavorites: () => { },
});

export function AppProvider({ children }: IAppProviderProps) {
  const [selectedItem, setSelectedItem] = useState<{ ligue: string; key: string } | null>(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState<{ elemMenu: string } | string | null>(null);
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const saveFavorites = localStorage.getItem("favorites");
    if (saveFavorites) {
      setFavorites(JSON.parse(saveFavorites))
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites])

  const toggleFavorites = (match: any) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.id === match.id) ? prev.filter((fav) => fav.id !== match.id) : [...prev, match]
    );
  };


  return (
    <AppContext.Provider value={{
      selectedItem,
      setSelectedItem,
      selectedMenuItem,
      setSelectedMenuItem,
      favorites,
      toggleFavorites
    }}>
      {children}
    </AppContext.Provider>
  );
}