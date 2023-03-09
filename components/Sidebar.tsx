import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
	return (
		<div className='sidebar'>
			<nav className='absolute w-[600px] top-[50%] -rotate-90 -right-[200px] uppercase z-50 justify-center'>
				<ul className='relative right-16 flex w-[800px] items-center h-full text-black text-[20px] pt-8 justify-between'>
					<li className='w-full text-[14px]'>
						{new Date().getFullYear()} © Elysian Media
					</li>
					<li>
						<Link href='contact'>Contact</Link>
					</li>
					<li>
						<Link href='services'>Services</Link>
					</li>
					<li>
						<Link href='works'>Works</Link>
					</li>
					<li>
						<Link href='/'>Home</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
