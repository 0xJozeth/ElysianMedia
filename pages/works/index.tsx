import React from 'react';
import homeHero from 'public/home-hero.png';

//Images
import Image from 'next/image';
import work1 from 'public/workPlaceholder1.png';

import { Archivo_Black, Raleway } from '@next/font/google';

const raleway = Raleway({
	subsets: ['latin'],
	weight: '500',
});

const archivo = Archivo_Black({
	subsets: ['latin'],
	weight: '400',
});

export default function Works() {
	return (
		<>
			<main
				className={`${raleway.className} flex flex-col w-[100vw] z-[10] snap-mandatory snap-y overflow-y-scroll h-[100vh]`}
			>
				<div className=' flex relative justify-center items-center gap-16 mx-auto w-[80vw] min-h-[100vh] h-screen snap-start'>
					<section className='flex relative bottom-0 border-l-8 border-black h-[30vw] mx-2'></section>
					<section className='flex flex-col w-full cursor-default gap-8 uppercase z-10 '>
						<div className='flex w-full relative '>
							<div className=''>
								<h1
									className={`${archivo.className} responsive-header-small m-0 z-[10] uppercase `}
								>
									Works
								</h1>
							</div>
							<div className='flex w-full items-end mb-4'>
								<p className='text-[18px]'>01</p>
							</div>
						</div>
						<div className='flex flex-col gap-8 w-full'>
							<p></p>
						</div>
						<div className='flex relative '>
							<Image
								src={work1}
								alt='cool-gif'
								className='object-cover w-full'
							/>
						</div>
					</section>
					<section className='flex flex-col w-full uppercase '>
						<h2 className='text-[44px]'>Project Title</h2>

						<p>DEV + DESIGN</p>
					</section>
					<section className='flex border-r-4 border-black h-[30vw] mx-2'>
						<p className='flex '>TODO: add scrolling status bar here</p>
					</section>
				</div>
			</main>
		</>
	);
}
