import React from "react";
import HeadComponent from '@/ui/HeadComponent';
import TitleComponent from '@/ui/TitleComponent';


export default function Page() {
    const title = 'About Page';
    
    return(
        <>
            <HeadComponent title={title} />

            <TitleComponent title={title}>
                {/* content */}
            </TitleComponent>
        </>
    )
}