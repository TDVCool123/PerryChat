import { Navigate } from "react-router-dom";

export const GuardedRoute = ({ auth, children }:any) => {
  if (auth) {
    return children;
  }
  return <Navigate to="/auth/login" />;
};
