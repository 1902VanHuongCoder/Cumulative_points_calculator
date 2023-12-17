import { createContext, useEffect, useState } from "react";

export const NotificationsContext = createContext(false);
export default function NotificationsProvider({ children }) {
  const [isShow, setIsShow] = useState(false);
  const [content, setContent] = useState(false);
  const [type, setType] = useState(false);
  // useEffect(() => {
  //   if (isShow) {
  //     setTimeout(() => {
  //       setIsShow(false);
  //     }, 2000);
  //   } else {
  //     return;
  //   }
  // }, [isShow]);
  return (
    <NotificationsContext.Provider
      value={{
        isShow: isShow,
        setIsShow: setIsShow,
        content: content,
        setContent: setContent,
        type: type,
        setType: setType,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
}
