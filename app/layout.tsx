import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

import '@/styles/globals.css';


export const metadata: Metadata = {
    title: 'PatrickCapovilla.com',
    description: 'something',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html className="w-full font-mono">
            <body>
                <div className="main">
                    <div className="flex w-full h-14 text-3xl justify-center items-center shadow-sm shadow-black bg-zinc-800 text-white">
                        <h1>PatrickCapovilla.com</h1>
                    </div>

                    <div className="flex flex-row p-2 w-full h-full">
                        <div className="p-2 w-1/5 rounded-md bg-zinc-400">
                            <nav>
                                <ul role="list" className="marker: list-disc pl-5">
                                    <li>
                                        <Link href="/home">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">About</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="ml-2 p-2 w-full rounded-md bg-zinc-400">{children}</div>
                    </div>
                
                    <div className="bottom-bar"></div>
                </div>
            </body>
        </html>
    )
}