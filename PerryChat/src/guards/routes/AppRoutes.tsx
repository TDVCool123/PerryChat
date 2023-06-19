import { Navigate, Route, Routes } from "react-router-dom";
import { GuardedRoute } from "../../guards/GuardedRoute";
import { useStore } from "../../context/ContextProvider";

import { Chat } from "../../pages/Chat";

export const AppRoutes = () => {
  const { auth } = useStore();
  return (
    <Routes>
      <Route
        path= "/chat"
        element={   
          <GuardedRoute auth={auth}>
            <Chat/>
          </GuardedRoute>
        }
      />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
