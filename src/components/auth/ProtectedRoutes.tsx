"use client";

import React from "react";
import Layout from "../layout";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const ProtectedRoutes = ({ children }: Props) => {
  const pathname = usePathname();
  const isAuthRoute = pathname.startsWith("/auth");
  if (isAuthRoute) return <>{children}</>;
  else {
    return <Layout>{children}</Layout>;
  }
};

export default ProtectedRoutes;
