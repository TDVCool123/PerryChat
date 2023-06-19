import { Route, Routes } from "react-router-dom";
import { AuthRoute } from "../../routes/AuthRoutes";
import { AppRoutes } from "../../routes/AppRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoute />} />
      <Route path="/*" element={<AppRoutes />} />
    </Routes>
  );
};
