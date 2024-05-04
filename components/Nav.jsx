"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import { LINKS } from "@/app/constants/data";

// Other imports...

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  // Your code...
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {LINKS.map((link, index) => (
        <Link key={index} href={link.path} className={`${linkStyles}`}>
          {link.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underlineStyles}`}
            ></motion.span>
          )}
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
