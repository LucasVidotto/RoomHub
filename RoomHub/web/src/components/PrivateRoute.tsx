// components/PrivateRoute.js
import { useEffect } from "react";

const PrivateRoute = ({ children, router }) => {
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      router.push("/login"); // Redireciona para a página de login se o token não existir
    }
  }, [router]);

  return <>{children}</>;
};

export default PrivateRoute;
