import React from 'react';
import { MouseEventHandler } from 'react';
import { Button as AntButton, Flex } from 'antd';

type VariantKeys = 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger';
type TSize = 'small' | 'normal' | 'large';
type ButtonTypeKeys = 'outline' | 'solid';

interface IButton {
	isDisabled?: boolean;
	backgroundColor?: string;
	variant?: VariantKeys;
	size?: TSize;
	label: string;
	className?: string;
	type?: ButtonTypeKeys;
	activeClass?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
}
export const Button: React.FC<IButton> = ({
	label,
	onClick,
	className,
	backgroundColor,
	isDisabled,
	leftIcon,
	rightIcon,
	activeClass,
}) => {
	const classNameData = `
		${className} 
		h-[48px] 
		rounded-sm 
		space-x-2 
		justify-center 
		flex flex-row 
		items-center 
		w-[100%] 
		border-[#1818A6]
		border
		${activeClass ? 'bg-[#1818A6]' : `bg-[${backgroundColor}]`}
		${activeClass ? 'text-[white]' : `bg-[${backgroundColor}]`}
		`;

	return (
		<AntButton
			onClick={onClick}
			disabled={isDisabled}
			className={classNameData}
		>
			<div>{leftIcon}</div>
			<p className='font-[500] text-[16px] font-cabinet'>{label}</p>
			<div>{rightIcon}</div>
		</AntButton>
	);
};
