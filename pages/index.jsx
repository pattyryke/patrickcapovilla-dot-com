// import { Transition } from '@headlessui/react';
// import { Fragment, useState, useEffect } from 'react';
import HeadComponent from '@/ui/HeadComponent';
import TitleComponent from '@/ui/TitleComponent';
import Space from '@/ui/stars/Space';

export default function Page() {
    return <Space />;
//   const title = 'Home Page';

//   return (
//     <>
//       <HeadComponent title={title} />

//       <TitleComponent title={title}>{/* content */}</TitleComponent>
//     </>
//   );
}

/**
 * 
    const [isShowing, setIsShowing] = useState(false);

    useEffect(() => {
        setIsShowing(true);
    }, []);
            <Transition
                as={Fragment}
                show={isShowing}
                enter='transition ease-out duration-500'
                enterFrom='transform translate-y-full opacity-0'
                enterTo='transform translate-y-0 opacity-100'
                leave="transition ease-in duration-500"
                leaveFrom="transform translate-y-0 opacity-100"
                leaveTo="transform translate-y-full opacity-0"
            >

            </Transition>

            */
