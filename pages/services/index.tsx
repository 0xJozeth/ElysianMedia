import React from 'react';
import homeHero from 'public/home-hero.png';

//Images
import Image from 'next/image';
import cool1 from 'public/servicePlaceholder1.png';
import cool2 from 'public/servicePlaceholder2.png';

import { Archivo_Black, Raleway } from '@next/font/google';

const raleway = Raleway({
	subsets: ['latin'],
	weight: '500',
});

const archivo = Archivo_Black({
	subsets: ['latin'],
	weight: '400',
});

export default function Services() {
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
									SERVICES
								</h1>
							</div>
							<div className='flex w-full items-end mb-4'>
								<p className='text-[18px]'>01</p>
							</div>
						</div>
						<div className='flex flex-col gap-8 w-full'>
							<p>
								OUR PROFESSIONAL TEAM IS ENGAGED IN DESIGN AND DEVELOPMENT OF
								SITES.
							</p>
							<p>
								WE USE ADVANCED TECHNOLOGIES AND APPROACHES IN CREATING QUALITY
								SITES THAT WILL BE FAST, EFFECTIVE AND PRACTICAL.
							</p>
							<p>YOU CAN ORDER COMPLEX WORK OR ONLY DEVELOPMENT OR DESIGN.</p>
						</div>
						<div className='flex relative '>
							<Image
								src={cool1}
								alt='cool-gif'
								className='object-cover w-full'
							/>
						</div>
					</section>
					<section className='flex flex-col w-full uppercase '>
						<h2 className='text-[44px]'>
							Web Design &amp; <br />
							Development
						</h2>
						<ul className='list-disc leading-10 pl-4'>
							<li>Online store</li>
							<li>Corporate Site</li>
							<li>DBrand Site</li>
							<li>Promo site</li>
							<li>Landing page</li>
							<li>Web Application</li>
						</ul>
					</section>
					<section className='flex border-r-4 border-black h-[30vw] mx-2'>
						<p className='flex '>TODO: add a scrolling status bar here</p>
					</section>
				</div>
				<div className=' flex relative justify-center items-center gap-16 mx-auto w-[80vw] min-h-[100vh] h-screen snap-start'>
					<section className='flex relative bottom-0 border-l-8 border-black h-[30vw] mx-2'></section>
					<section className='flex flex-col w-full cursor-default gap-8 uppercase z-10 '>
						<div className='flex w-full relative '>
							<div className=''>
								<h1
									className={`${archivo.className} responsive-header-small m-0 z-[10] uppercase `}
								>
									SERVICES
								</h1>
							</div>
							<div className='flex w-full items-end mb-4'>
								<p className='text-[18px]'>02</p>
							</div>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
							scelerisque amet porta dui amet, arcu. Purus, nulla eget integer
							convallis elit volutpat malesuada sem facilisi.
						</p>
						<div className='flex relative '>
							<Image
								src={cool2}
								alt='cool-gif'
								className='object-cover w-full'
							/>
						</div>
					</section>
					<section className='flex flex-col w-full uppercase '>
						<h2 className='text-[44px]'>
							Branding &amp; <br />
							Marketing
						</h2>
						<ul className='list-disc leading-10 pl-4'>
							<li>logo </li>
							<li>brand colors </li>
							<li>branding guide </li>
							<li>social media templates </li>
							<li>Google adwords campaigns </li>
							<li>marketing strategy </li>
							<li>consulting </li>
							<li>designs for campaigns</li>
						</ul>
					</section>
					<section className='flex border-r-4 border-black h-[30vw] mx-2'>
						<p className='flex '>TODO: add a scrolling status bar here</p>
					</section>
				</div>
				<div className=' flex relative justify-center items-center gap-16 mx-auto w-[80vw] min-h-[100vh] h-screen snap-start'>
					<section className='flex relative bottom-0 border-l-8 border-black h-[30vw] mx-2'></section>
					<section className='flex flex-col w-full cursor-default gap-8 uppercase z-10 '>
						<div className='flex w-full relative '>
							<div className=''>
								<h1
									className={`${archivo.className} responsive-header-small m-0 z-[10] uppercase `}
								>
									SERVICES
								</h1>
							</div>
							<div className='flex w-full items-end mb-4'>
								<p className='text-[18px]'>03</p>
							</div>
						</div>
						<div className='flex flex-col gap-8 w-full'>
							<p>
								TO SAVE OUR AND YOUR TIME, WE HAVE COMPILED A LIST "WE DON’T
								DO”.
							</p>
							<p>SINCERELY, TEAM elysian</p>
						</div>
						<div className='flex relative '>
							<Image
								src={cool2}
								alt='cool-gif'
								className='object-cover w-full'
							/>
						</div>
					</section>
					<section className='flex flex-col w-full uppercase '>
						<h2 className='text-[44px]'>Our Code:</h2>
						<ul className='list-disc leading-10 pl-4'>
							<li>FREE</li>
							<li>
								WITH UNREALISTIC DEADLINES WITHOUT DRAWING UP OF TECH. SPEC.
							</li>
							<li>WITHOUT PRE-PAYMENT </li>
							<li>PROJECTS ABOUT VIOLENCE AND PORNOGRAPHY</li>
							<li>BANNERS </li>
							<li>
								DON’T COMPLETE DESIGN/CODE AFTER DESIGNERS/DEVELOPERS FROM OTHER
								TEAM
							</li>
						</ul>
					</section>
					<section className='flex border-r-4 border-black h-[30vw] mx-2'>
						<p className='flex'>TODO: add a scrolling status bar here</p>
					</section>
				</div>
			</main>
		</>
	);
}
