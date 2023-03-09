import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import { BsTwitter, BsYoutube } from 'react-icons/bs';

export default function SocialIcons() {
	return (
		<>
			<div className='absolute flex justify-center items-center left-8 bottom-8 gap-2 mix-blend-overlay text-white z-50'>
				<p className='text-[18px]'>Social</p>
				<FaFacebookF className='' size={14} />
				<ImInstagram />
				<BsTwitter />
				<BsYoutube />
			</div>
			<div className='absolute flex justify-center items-center left-8 bottom-8 gap-2 mix-blend-overlay text-black z-0'>
				<p className='text-[18px]'>Social</p>
				<FaFacebookF className='' size={14} />
				<ImInstagram />
				<BsTwitter />
				<BsYoutube />
			</div>
		</>
	);
}
