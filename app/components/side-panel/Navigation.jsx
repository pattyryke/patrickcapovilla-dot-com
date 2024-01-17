import Link from "next/link";

export default function Navigation() {
  return (
    <div className='flex min-w-full rounded-md p-4 color-secondary add-shadow'>
      <ul className='flex flex-col w-full justify-items-center'>
        <li className='flex-1'>
          <Link
            className='text-center block border rounded-md py-2 px-4 mb-2 color-primary add-shadow outline-text hover:bg-accent hover:border-accent hover:text-black'
            href='/projects'>
            Home
          </Link>
        </li>
        <li className='flex-1'>
          <Link
            className='text-center block border rounded-md py-2 px-4 mb-2 color-primary add-shadow outline-text hover:bg-accent hover:border-accent hover:text-black'
            href='/about'>
            About Page
          </Link>
        </li>
        <li className='flex-1'>
          <Link
            className='text-center block border rounded-md py-2 px-4 mb-2 color-primary add-shadow outline-text hover:bg-accent hover:border-accent hover:text-black'
            href='/projects'>
            Project Showcase
          </Link>
        </li>
        <li className='flex-1'>
          <Link
            className='text-center block border rounded-md py-2 px-4 mb-2 color-primary add-shadow outline-text hover:bg-accent hover:border-accent hover:text-black'
            href='/contact'>
            Contact Page
          </Link>
        </li>
      </ul>
    </div>
  );
}
