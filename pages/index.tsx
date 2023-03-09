import type { NextPage } from 'next';
import Head from 'next/head';
import { useForm, ValidationError } from '@formspree/react';

import Image from 'next/image';
import { Archivo_Black, Raleway } from '@next/font/google';
import { Inter } from '@next/font/google';
import homeHero from 'public/home-hero.png';
import Link from 'next/link';

import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import SocialIcons from '../components/SocialIcons';

const archivo = Archivo_Black({
	subsets: ['latin'],
	weight: '400',
});

const raleway = Raleway({
	subsets: ['latin'],
	weight: '600',
});

const Home: NextPage = () => {
	return (
		<>
			<main
				className={`${raleway.className} flex justify-start items-center w-[100vw] overflow-y-hidden overflow-x-scroll snap-x snap-mandatory overscroll-none z-[10]`}
			>
				<section className='flex flex-col h-screen min-w-[100vw] snap-start'>
					<div className='flex relative cursor-default z-10'>
						<h1
							className={`${archivo.className} responsive-header m-0 absolute top-[25%] left-[10%] z-[10] uppercase`}
						>
							Web Design & Development
						</h1>

						<Image src={homeHero} alt='home' className='z-[20]' />

						<p
							className={`${archivo.className} responsive-header m-0 absolute top-[25%] left-[10%] z-[30] text-outline uppercase`}
						>
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
				<section className='flex flex-col relative h-screen min-w-[100vw] snap-start'>
					<div className='flex mx-auto px-16 items-center justify-center h-full'>
						<div className='flex h-[60vh] gap-24 gap-x-36'>
							<div className='flex flex-col gap-y-16'>
								<div className='flex flex-col gap-8 '>
									<h1
										className={`${archivo.className} responsive-header-small  uppercase leading-none`}
									>
										Elysian <br />
										Media
									</h1>
								</div>
								<div>
									<p className='uppercase text-[18px] w-[600px] text-justify text-black '>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Malesuada blandit pretium, sed sit netus quis eros. <br />
										Lorem gravida mi gravida eu, commodo consectetur. Lorem
										ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
										blandit pretium, sed sit netus quis eros. <br />
										Lorem gravida mi gravida eu, commodo consectetur.
									</p>
								</div>
							</div>
							<div className='flex flex-col gap-y-16'>
								<div className='flex flex-col gap-8'>
									<h1
										className={`${archivo.className} responsive-header-small uppercase leading-none`}
									>
										Why Work
										<br />
										With Us
									</h1>
								</div>
								<div>
									<p className='uppercase text-[18px] w-[600px] text-justify text-black '>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Malesuada blandit pretium, sed sit netus quis eros. <br />
										Lorem gravida mi gravida eu, commodo consectetur.
									</p>
								</div>
								<div>
									<ul className='flex flex-col list-disc uppercase text-[18px] w-[450px] text-justify text-black  gap-y-4'>
										<li className=''>Keypoint 1</li>
										<li className=''>Keypoint 2</li>
										<li className=''>Keypoint 3</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='flex flex-col relative h-screen min-w-[100vw] snap-start'>
					<div className='flex mx-auto px-16 items-center justify-start h-full w-[80vw]'>
						<div className='flex h-[60vh] gap-24 gap-x-36'>
							<div className='flex flex-col gap-y-16'>
								<div className='flex flex-col gap-8'>
									<h1
										className={`${archivo.className} responsive-header-small  uppercase leading-none`}
									>
										Interested? <br />
										Let's Chat!
									</h1>
								</div>
								<div className='flex gap-8 mx-auto'>
									<p className='uppercase text-[18px] text-justify text-black'>
										HIRE US NOW - WE'RE HERE TO ASSIST YOU. DROP US A LINE, AND
										WE'LL GET BACK TO YOU IN A BLINK OF AN EYE.
									</p>
									<div className='flex w-[60vw]'>
										<ContactForm />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default Home;
