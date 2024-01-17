'use client';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Navigation from './Navigation';

export default function SidePanel() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <svg
        className='w-6 h-6 text-primary hover:cursor-pointer hover:text-accent outline-text'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 17 14'
        onClick={() => {
          setOpen(true);
        }}>
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M1 1h15M1 7h15M1 13h15'
        />
      </svg>

      <Transition.Root
        show={open}
        as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          onClose={() => {
            setOpen(false);
          }}>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
                <Transition.Child
                  as={Fragment}
                  enter='transform transition ease-in-out duration-500 sm:duration-700'
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transform transition ease-in-out duration-500 sm:duration-700'
                  leaveFrom='translate-x-0'
                  leaveTo='translate-x-full'>
                  <Dialog.Panel className='pointer-events-auto relative w-screen max-w-md'>
                    <div className='flex h-full flex-col overflow-y-scroll bg-primary shadow-xl'>
                      <div className='flex w-full h-12 justify-between items-center px-4 sm:px-6 color-secondary add-shadow'>
                        <Dialog.Title className='text-xl leading-6 outline-text'>Navigation Panel</Dialog.Title>
                        <button
                          type='button'
                          className='relative rounded-md text-primary hover:text-accent focus:outline-none focus:ring-2 focus:ring-test outline-text'
                          onClick={() => setOpen(false)}>
                          <span className='absolute -inset-2.5' />
                          <span className='sr-only'>Close panel</span>
                          <XMarkIcon
                            className='h-6 w-6'
                            aria-hidden='true'
                          />
                        </button>
                      </div>
                      <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                        <Navigation />
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
