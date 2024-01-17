import React from "react";
import Head from "next/head";
import SidePanel from './components/side-panel/SidePanel';

import '@/styles/globals.css';
import Link from "next/link";


export default function RootLayout({ children }) {
    return <div>{children}</div>;
    // return (
    //     <div className="w-full font-mono color-primary">
    //         <div className="main">
    //             <div className="flex w-full h-14 p-2 text-3xl justify-between items-center add-shadow color-secondary">
    //                 <Link type="button" className="hover:cursor-pointer outline-text" href='/'>PatrickCapovilla.com</Link>
    //                 <SidePanel />
    //             </div>

    //             <div className="flex w-full h-full flex-row p-2 color-primary">
    //                 <div className="center-items w-full p-2 rounded-md color-secondary border-font add-shadow">
    //                     {children}
    //                 </div>
    //             </div>
            
    //             <div className="flex w-full h-10 gap-y-96"></div>
    //         </div>
    //     </div>
    // )
}