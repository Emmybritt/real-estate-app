import React from 'react';
import { CustomInput } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';

const SubscribeSection = () => {
	return (
		<div className='h-[301px] px-[3rem] flex flex-col items-center justify-center bg-white font-cabinet py-[2rem]'>
			<div className='flex flex-col items-center'>
				<h3 className='text-[32px] font-bold leading-[39.68px]'>
					Get More Updates
				</h3>
				<p className='pb-[1rem] text-center'>
					Want to be one of the first few to get updated about our new property
					listings and discounts? Subscribe to our email list today.
				</p>
			</div>
			<div className='flex items-center md:w-[668px] mx-auto'>
				<CustomInput
					placeholder='Input email address'
					className='rounded-r-none'
				/>
				<Button label='Subscribe' activeClass className='w-[138px] h-[64px]' />
			</div>
		</div>
	);
};

export default SubscribeSection;
