import React, { ReactNode } from "react";
import Link from "next/link";

interface NavType {
  href: string;
  children: ReactNode;
}

export const NavBtn = ({ href, children }: NavType) => {
  return (
    <Link href={href} passHref>
      <div className="navLink">{children}</div>
    </Link>
  );
};
