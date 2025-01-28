/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { JSX, useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "../ModeToggle";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isClicked, setisClicked] = useState(false);

  const toggleNavBar = () => {
    setisClicked(!isClicked);
  };

  useEffect(() => {
    // Set the navbar to visible on initial render if at the top of the page
    if (scrollYProgress.get() <= 0.01) {
      setVisible(true);
    }
  }, [scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.01) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className={cn(
          "fixed top-0 z-[1000] w-full items-center justify-between border border-transparent bg-white px-10 py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black",
          className,
        )}
      >
        <div className="flex items-center justify-between space-x-10">
          <Link href={"/"}>
            <p className="text-2xl font-bold">SKIPZZ.SHOP</p>
          </Link>
          <div className="hidden space-x-10 sm:flex">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300",
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden text-sm sm:block">{navItem.name}</span>
              </Link>
            ))}
            <ModeToggle />
          </div>

          <button onClick={toggleNavBar} className="md:hidden">
            {isClicked ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        {isClicked && (
          <div className="top-20 mt-5 flex w-full flex-col items-center gap-5 md:hidden">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative top-0 flex justify-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300",
                )}
              >
                <span className="text-sm">{navItem.name}</span>
              </Link>
            ))}
            <ModeToggle />
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
