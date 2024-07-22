'use client';
import { useFetchPropertyDetailsQuery } from '@/app/(modules)/core/infrastructure/api/propertiesApiSlice';
import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';
import PropertyDetailsBanner from '../../../atoms/PropertyDetailsBanner/PropertyDetailsBanner';
import PropertiesDetails from '../../../molecules/PropertiesDetails/PropertiesDetails';
import PropertiesImage from '../../../atoms/PropertiesImage/PropertiesImage';

const PropertyDetails = () => {
	const searchParams = useSearchParams();
	const name = searchParams.get('name');

	const { id } = useParams();
	console.log(name, 'this is the name');

	const { data, error, isLoading } = useFetchPropertyDetailsQuery(id);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error loading property details</div>;

	const property = data?.data?.home;
	console.log(property);
	return (
		<div>
			<PropertyDetailsBanner image={property?.photos[0].href} />
			<PropertiesDetails
				address={property?.location.address?.line}
				description={property?.description?.text}
				name={name ?? ''}
				postedBy={property?.advertisers[0].name}
				price={property?.list_price}
				status={property.status}
				contactEmail={property?.advertisers[0].email}
			/>
			<PropertiesImage photos={property?.photos} />
		</div>
	);
};

export default PropertyDetails;
