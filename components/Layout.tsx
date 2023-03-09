import { motion } from 'framer-motion';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import SocialIcons from './SocialIcons';
import { useRouter } from 'next/router';

type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	const router = useRouter();
	return (
		<>
			<Header />
			<Sidebar />
			<motion.div
				key={router.route}
				initial='pageInitial'
				animate='pageAnimate'
				variants={{
					pageInitial: {
						opacity: 0,
						y: '5vh',
					},
					pageAnimate: {
						opacity: 1,
						y: '0',
						transition: {
							delay: 0.4,
							duration: 0.65,
						},
					},
				}}
			>
				{children}
			</motion.div>
			<SocialIcons />
		</>
	);
}
