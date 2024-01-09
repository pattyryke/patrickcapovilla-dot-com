import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

import '@/styles/globals.css';


export const metadata: Metadata = {
    title: 'PatrickCapovilla.com',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>
                <div className="main">
                    <div className="top-bar">
                        <h1>PatrickCapovilla.com</h1>
                    </div>

                    <div className="dynamic-container">
                        <div className="left-panel">
                            <nav>
                                <ul>
                                    <li>
                                        <Link href="/home">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">About</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="content-panel">{children}</div>
                    </div>
                
                    <div className="bottom-bar"></div>
                </div>
            </body>
        </html>
    )
}