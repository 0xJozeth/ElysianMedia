import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Archivo_Black } from '@next/font/google';
import { Inter } from '@next/font/google';
import homeHero from 'public/home-hero.png';
import elysianLogo from 'public/elysian-logo.png';
import Link from 'next/link';

const archivo = Archivo_Black({
	subsets: ['latin'],
	weight: '400',
});

const Home: NextPage = () => {
	return (
		<>
			<nav className='absolute w-[600px] top-[50%] -rotate-90 -right-[200px] uppercase z-50'>
				<ul className='flex w-full h-full text-black justify-between'>
					<Link href='contact'>Contact</Link>
					<Link href='services'>Services</Link>
					<Link href='works'>Works</Link>
					<Link href='home'>Home</Link>
				</ul>
			</nav>
			<main className={archivo.className}>
				<section className='flex flex-col h-screen w-screen mx-auto'>
					<Image src={elysianLogo} alt='' className='absolute z-50 p-8' />
					<Link
						href='/contact'
						className='absolute flex right-24 top-8 p-8 bg-black text-white text-[24px] h-2 w-56 items-center justify-center z-30'
					>
						Hire Us
					</Link>
					<div className='flex cursor-default'>
						<p className='text-[150px] m-0 absolute top-[25%] left-[10%] z-[10] uppercase'>
							Web Design & Development
						</p>

						<Image src={homeHero} alt='home' className='z-[20]' />

						<p className='text-[150px] m-0 absolute top-[25%] left-[10%] z-[30] text-outline uppercase'>
							Web Design & Development
						</p>
						<p className='absolute uppercase text-[18px] bottom-[150px] right-[40%] w-[450px] text-justify text-black z-[10]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
							blandit pretium, sed sit netus quis eros. <br />
							Lorem gravida mi gravida eu, commodo consectetur.
						</p>
						<p className='absolute uppercase text-[18px] bottom-[150px] right-[40%] w-[450px] text-justify text-outline-small z-[30]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
							blandit pretium, sed sit netus quis eros. <br />
							Lorem gravida mi gravida eu, commodo consectetur.
						</p>
					</div>
				</section>
			</main>
		</>
	);
};

export default Home;
