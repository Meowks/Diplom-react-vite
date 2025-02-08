import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface IAppContext {
  selectedItem: { ligue: string; key: string } | null;
  setSelectedItem: Dispatch<SetStateAction<{ ligue: string; key: string } | null>>;
}

interface IAppProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<IAppContext>({
  selectedItem: null,
  setSelectedItem: () => {}, 
});

export function AppProvider({ children }: IAppProviderProps) {
  const [selectedItem, setSelectedItem] = useState<{ ligue: string; key: string } | null>(null);
  

  return (
    <AppContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </AppContext.Provider>
  );
}