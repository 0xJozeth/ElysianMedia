import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import elysianLogo from 'public/elysian-logo.png';

export default function Header() {
	return (
		<>
			<Image
				src={elysianLogo}
				alt=''
				className='absolute mix-blend-overlay z-50 p-8'
			/>
			<Image src={elysianLogo} alt='' className='absolute invert z-0 p-8' />
			<Link
				href='contact'
				className='absolute flex right-36 top-8 p-8 uppercase bg-black text-white text-[24px] h-2 w-56 items-center justify-center z-30'
			>
				Hire Us
			</Link>
		</>
	);
}
