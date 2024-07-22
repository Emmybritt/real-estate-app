'use client';
import { Button } from '@/app/common/components/atoms/Button/Button';
import { CustomInput } from '@/app/common/components/atoms/Input/Input';
import { Image } from 'antd';
import Link from 'next/link';
import React from 'react';
import { useAuth } from '../../../infrastructure/hooks/useAuth';

const Register = () => {
	const { error, handleChange, register, user, loading } = useAuth();
	return (
		<div className='w-[632px] h-[713px] mx-auto my-auto font-cabinet shadow-md flex flex-col items-center justify-center'>
			<Image src='/images/logo.png' />
			<h3 className='text-[30px] font-bold leading-[44.8px] mt-2'>Sign Up</h3>
			<div className='space-y-[1rem]'>
				<CustomInput
					onChange={(e) => handleChange('firstName', e.target.value)}
					error={error?.firstName}
					value={user?.firstName}
					className='w-[504px]'
					label='First name'
					placeholder='Enter firstname'
				/>
				<CustomInput
					onChange={(e) => handleChange('lastName', e.target.value)}
					error={error?.lastName}
					value={user?.lastName}
					className='w-[504px]'
					label='Last name'
					placeholder='Enter lastname'
				/>
				<CustomInput
					onChange={(e) => handleChange('email', e.target.value)}
					error={error?.email}
					value={user?.email}
					className='w-[504px]'
					label='Email address'
					placeholder='Enter email address'
				/>
				<CustomInput
					onChange={(e) => handleChange('phoneNo', e.target.value)}
					error={error?.phoneNo}
					value={user?.phoneNo}
					className='w-[504px]'
					label='Phone number'
					placeholder='Enter your phone number'
				/>
				<CustomInput
					onChange={(e) => handleChange('password', e.target.value)}
					error={error?.password}
					value={user?.password}
					className='w-[504px]'
					label='Password'
					placeholder='Enter your password'
					type='password'
				/>
				<Button
					label={loading ? 'Please wait...' : 'Sign Up'}
					isDisabled={loading}
					activeClass
					onClick={register}
				/>
			</div>
			<p className='mt-2'>
				Already have an account{' '}
				<Link href='/login' className='text-[#1818A6]'>
					Login
				</Link>
			</p>
		</div>
	);
};

export default Register;
