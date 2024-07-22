import React from 'react';
import { Button } from '../../atoms/Button/Button';
import { Image } from 'antd';
import Link from 'next/link';

const AboutSection = () => {
	return (
		<div
			className='grid 
        md:grid-cols-2 
        items-center 
        justify-between 
				px-[1rem]
				md:px-[3rem]
        lg:px-[6rem] 
        gap-[3rem] 
        py-[2rem]'
		>
			<div>
				<h3 className='text-[16px] text-[#1818A6] font-cabinet font-bold mb-[2rem]'>
					ABOUT US
				</h3>
				{/* <h1 className='text-[64px] font-cabinet font-bold lg:leading-[79.36px]'>
					We are the best among the rest
				</h1> */}
				<p className='text-[20px] font-medium font-cabinet text-[#696969]'>
					We are your No.1 stop for impeccable deals such as lands, houses,
					rents, lease and everything real estate. Affilestate is built to help
					you solve all your real estate problem from getting reasonable prices
					for your properties to buying affordable and secured properties.
				</p>
				<Link href='/properties'>
					<Button
						activeClass
						className='mt-[2rem] w-[240px]'
						label='Find Property'
						rightIcon={<Image preview={false} src='/images/arrowright.png' />}
					/>
				</Link>
			</div>
			<div>
				<Image preview={false} src='/images/banner.png' />
			</div>
		</div>
	);
};

export default AboutSection;
