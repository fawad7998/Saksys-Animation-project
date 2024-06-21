"use client"
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {

    return (
        <>
            <div className=" flex items-center justify-center z-10 fixed pl-72 text-white h-16 pt-8">
                <div className="max-w-4xl sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between ">
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex items-center text-gray-300 space-x-4">
                                    <div className="relative group">
                                        <span className="inline-flex text-lg items-center justify-center w-full cursor-pointer  hover:text-white px-3 py-2 rounded-md  font-medium">
                                            HOME
                                            <svg
                                                className="ml-1 h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                        <AnimatePresence>
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 20 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute hidden group-hover:block bg-black mt-1 rounded-md shadow-lg z-10"
                                            >
                                                <Link href="/gallery/1" passHref>
                                                    <span className="block cursor-pointer m-16 px-4 py-2 text-sm">HOME ONE</span>
                                                </Link>
                                                <Link href="/gallery/2" passHref>
                                                    <span className="block cursor-pointer px-4 py-2 text-sm">HOME TWO</span>
                                                </Link>
                                                <Link href="/gallery/2" passHref>
                                                    <span className="block cursor-pointer px-4 py-2 text-sm">HOME THREE</span>
                                                </Link>
                                                <Link href="/gallery/2" passHref>
                                                    <span className="block cursor-pointer px-4 py-2 text-sm">HOME FOUR</span>
                                                </Link>
                                                <Link href="/gallery/2" passHref>
                                                    <span className="block cursor-pointer px-4 py-2 text-sm">HOME FIVE</span>
                                                </Link>
                                                <Link href="/gallery/2" passHref>
                                                    <span className="block cursor-pointer px-4 py-2 text-sm">HOME SIX</span>
                                                </Link>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                    <div className="relative group">
                                        <span className="inline-flex text-lg items-center justify-center w-full cursor-pointer  hover:text-white px-3 py-2 rounded-md  font-medium">
                                            GALLERY
                                            <svg
                                                className="ml-1 h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                        <AnimatePresence>
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 20 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute hidden group-hover:block bg-black mt-1 rounded-md shadow-lg z-10"
                                            >
                                                <Link href="/gallery/1" passHref>
                                                    <span className="block cursor-pointer px-4 py-2 text-sm">General</span>
                                                </Link>
                                                <Link href="/gallery/2" passHref>
                                                    <span className="block cursor-pointer px-4 py-2 text-sm">CLASSIC</span>
                                                </Link>
                                                <Link href="/gallery/2" passHref>
                                                    <span className="block cursor-pointer px-4 py-2 text-sm">STANDERD</span>
                                                </Link>
                                                <Link href="/gallery/2" passHref>
                                                    <span className="block cursor-pointer px-4 py-2 text-sm">MODERN</span>
                                                </Link>
                                                <Link href="/gallery/2" passHref>
                                                    <span className="block cursor-pointer px-4 py-2 text-sm">TILES</span>
                                                </Link>
                                                <Link href="/gallery/2" passHref>
                                                    <span className="block cursor-pointer px-4 py-2 text-sm">MASONRY</span>
                                                </Link>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                    <Link href="/about" passHref>
                                        <span className="cursor-pointer text-lg  hover:text-white px-3 py-2 rounded-md  font-medium">
                                            ABOUT US
                                        </span>
                                    </Link>
                                    <div className="relative group">
                                        <span className="inline-flex text-lg items-center justify-center w-full cursor-pointer  hover:text-white px-3 py-2 rounded-md font-medium">
                                            PAGES
                                            <svg
                                                className="ml-1 h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                        <AnimatePresence>
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute hidden group-hover:block bg-black mt-1 rounded-md shadow-lg z-10"
                                            >
                                                <Link href="/pages/1" passHref>
                                                    <span className="block cursor-pointer px-4 py-2 text-sm">Page 1</span>
                                                </Link>
                                                <Link href="/pages/2" passHref>
                                                    <span className="block cursor-pointer px-4 py-2 text-sm">Page 2</span>
                                                </Link>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                    <Link href="/contact" passHref>
                                        <span className="cursor-pointer text-lg  hover:text-white px-3 py-2 rounded-md font-medium">
                                            Contact
                                        </span>
                                    </Link>
                                    <div className="relative group">
                                        <span className="inline-flex text-lg items-center justify-center w-full cursor-pointer  hover:text-white px-3 py-2 rounded-md font-medium">
                                            Blog
                                            <svg
                                                className="ml-1 h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                        <AnimatePresence>
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute hidden group-hover:block bg-black text-white mt-1 rounded-md shadow-lg z-10"
                                            >
                                                <Link href="/blog/1" passHref>
                                                    <span className="block cursor-pointer px-4 py-2 text-sm">Blog 1</span>
                                                </Link>
                                                <Link href="/blog/2" passHref>
                                                    <span className="block cursor-pointer px-4 py-2 text-sm">Blog 2</span>
                                                </Link>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;