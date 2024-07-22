'use client';
import { useFetchPropertiesQuery } from '@/app/(modules)/core/infrastructure/api/propertiesApiSlice';
import { useEffect, useRef, useState } from 'react';

export const useProperties = () => {
	const [offset, setOffset] = useState(0);
	const [properties, setProperties] = useState<Array<Record<string, any>>>([]);
	const loader = useRef<HTMLDivElement | null>(null);

	const { data, error, isLoading, isFetching } = useFetchPropertiesQuery({
		offset,
		limit: 20,
	});

	useEffect(() => {
		if (data && !isLoading) {
			setProperties((prev) => [...prev, ...data.data.home_search.results]);
		}
	}, [data, isLoading]);

	const handleObserver = (entries: IntersectionObserverEntry[]) => {
		const target = entries[0];
		if (target.isIntersecting && !isFetching) {
			setOffset((prev) => prev + 20);
		}
	};

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '20px',
			threshold: 1.0,
		};
		const observer = new IntersectionObserver(handleObserver, options);
		if (loader.current) {
			observer.observe(loader.current);
		}
		return () => {
			if (loader.current) {
				observer.unobserve(loader.current);
			}
		};
	}, [isFetching]);

	return { properties, isLoading, error, loader, isFetching };
};
