import { createContext, useState } from "react";

export const SidebarContext = createContext(false);
export default function SidebarProvider({children}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SidebarContext.Provider value={{ isOpen: isOpen, setIsOpen: setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}
