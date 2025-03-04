import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Navigate, Outlet } from "react-router-dom";
import { CHECK_AUTH } from "../graphql";

export const ProtectedRoute = () => {
  const { data, error, loading } = useQuery(CHECK_AUTH, {
    fetchPolicy: "network-only",
    pollInterval: 300000,
  });

  useEffect(() => {
    if (error || (data && !data.checkAdminAuth.success)) {
      localStorage.removeItem("token");
    }
  }, [error, data]);

  if (loading) return <div></div>;

  if (error || !data?.checkAdminAuth.success) {
    return <Navigate to="/login" replace />;
  }
  
  return <Outlet />;
};
