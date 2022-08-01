import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import type { FC } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";

type withAuthenticationFn = (Component: FC) => FC;

const WithAuthentication: withAuthenticationFn = (Component) => {
  const Authenticated: FC = (): JSX.Element | null => {
    const { isAuthenticated, cookieIsLoading } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated && !cookieIsLoading) router.push("/login");
    }, [cookieIsLoading]);

    return isAuthenticated && !cookieIsLoading ? <Component /> : null;
  };

  return Authenticated;
};

export default WithAuthentication;
