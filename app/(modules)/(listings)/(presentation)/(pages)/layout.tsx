import Footer from '@/app/common/components/organisms/Footer/Footer';
import Header from '@/app/common/components/organisms/Header/Header';
import React from 'react';

const HomePageLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className='flex flex-col min-h-screen'>
			<Header />
			<main className='flex-grow'>{children}</main>
			<Footer />
		</div>
	);
};

export default HomePageLayout;
