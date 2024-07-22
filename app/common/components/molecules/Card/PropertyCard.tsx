import { HeartOutlined } from '@ant-design/icons';
import { Image, Rate } from 'antd';
import React from 'react';
import { Button } from '../../atoms/Button/Button';
import {
	formatNumber,
	truncateText,
} from '@/app/(modules)/(listings)/infrastructure/helper';
import Link from 'next/link';

interface PropertyCardProp {
	image: string;
	name: string;
	amount: number;
	address: string;
	rating: number;
	advertisers: string;
	status: string;
	property_id: string;
}

const PropertyCard: React.FC<PropertyCardProp> = ({
	address,
	amount,
	image,
	name,
	advertisers,
	status,
	property_id,
}) => {
	return (
		<div className='font-cabinet h-[559px] bg-[#D1D1ED] drop-shadow'>
			<Image
				className='object-cover'
				style={{ height: '415px', width: '100%' }}
				src={image}
				alt={name}
				preview={false}
			/>
			<div className='p-[1rem]'>
				<div className='flex text-[12px] capitalize font-medium text-[#696969] items-center justify-between'>
					<p>{status.split('_').join(' ')}</p>
					<HeartOutlined />
				</div>
				<div className='flex items-center justify-between'>
					<div>
						<h3 className='text-[18px] font-bold leading-[24.8px]'>
							{truncateText(name, 15)}
						</h3>
						<p className='text-[14px] font-bold'>{address}</p>
						<p className='text-[#696969] font-normal text-[12px]'>
							{truncateText(advertisers, 15)}
						</p>
					</div>
					<div>
						<p className='text-[#1818A6] font-bold'>${formatNumber(amount)}</p>
						<Link
							href={`/property/${property_id}?name=${encodeURIComponent(name)}`}
						>
							<Button label='View details' activeClass />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PropertyCard;
