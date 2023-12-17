import { createContext, useState } from "react";

export const LoadingContext = createContext(false);
export default function LoadingProvider({children}) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LoadingContext.Provider
      value={{ isLoading: isLoading, setIsLoading: setIsLoading }}
    >
      {children}
    </LoadingContext.Provider>
  );
}
