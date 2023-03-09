import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import SocialIcons from './SocialIcons';

type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Header />
			<Sidebar />
			{children}
			<SocialIcons />
		</>
	);
}
