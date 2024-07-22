'use client';
import { Button } from '@/app/common/components/atoms/Button/Button';
import { CustomInput } from '@/app/common/components/atoms/Input/Input';
import { Image } from 'antd';
import Link from 'next/link';
import React from 'react';
import { useAuth } from '../../../infrastructure/hooks/useAuth';

const Login = () => {
	const { handleChange, loginUser, user, error, loading } = useAuth();
	return (
		<div className='w-[632px] h-[713px] mx-auto my-auto font-cabinet shadow-md flex flex-col items-center justify-center'>
			<Image src='/images/logo.png' preview={false} />
			<h3 className='text-[32px] font-bold leading-[44.8px] mt-2'>Sign in</h3>
			<div className='space-y-[1rem]'>
				<CustomInput
					onChange={(e) => handleChange('email', e.target.value)}
					className='w-[504px]'
					label='Email address'
					error={error?.email}
					placeholder='Enter email address'
					value={user?.email}
				/>
				<CustomInput
					onChange={(e) => handleChange('password', e.target.value)}
					error={error?.password}
					className='w-[504px]'
					label='Password'
					placeholder='Enter your password'
					type='password'
					value={user?.password}
				/>
				<Button
					label={loading ? 'Please Wait...' : 'Sign In'}
					activeClass
					onClick={loginUser}
					isDisabled={loading}
				/>
			</div>
			<p className='mt-2'>
				Don't have an account{' '}
				<Link href='/register' className='text-[#1818A6]'>
					Register
				</Link>
			</p>
		</div>
	);
};

export default Login;
