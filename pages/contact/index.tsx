import type { NextPage } from 'next';

import { Archivo_Black, Raleway } from '@next/font/google';
import { FaFacebookF } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import { BsTwitter, BsYoutube } from 'react-icons/bs';

import ContactForm from '../../components/ContactForm';

const archivo = Archivo_Black({
	subsets: ['latin'],
	weight: '400',
});

const raleway = Raleway({
	subsets: ['latin'],
	weight: '600',
});

const Contact: NextPage = () => {
	return (
		<>
			<main
				className={`${raleway.className} flex justify-start items-center w-[100vw] overflow-x-scroll snap-x snap-mandatory overscroll-none z-[10]`}
			>
				<section className='flex flex-col relative h-screen min-w-[100vw] snap-start'>
					<div className='flex mx-auto px-16 items-center justify-start h-full w-[80vw]'>
						<div className='flex h-[60vh] gap-24 gap-x-36'>
							<div className='flex flex-col gap-y-16'>
								<div className='flex flex-col gap-8'>
									<h1
										className={`${archivo.className} responsive-header-small  uppercase leading-none`}
									>
										Like What <br />
										You See? <br />
										Let's Talk.
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

export default Contact;
