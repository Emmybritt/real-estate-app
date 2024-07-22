import { useAppSelector } from '@/app/(modules)/core/infrastructure/store';
import { useRouter } from 'next/navigation';
import { useEffect, ReactNode, ComponentType } from 'react';

interface WithProtectedRouteProps {
	children?: ReactNode;
}

const withProtectedRoute = <P extends object>(
	WrappedComponent: ComponentType<P>,
) => {
	const ComponentWithAuth = (props: P & WithProtectedRouteProps) => {
		const { user, loading } = useAppSelector((state) => state.userSlice);
		const router = useRouter();

		useEffect(() => {
			if (!loading && !user) {
				router.push('/login');
			}
		}, [user, loading, router]);

		if (loading || !user) {
			return <div>Loading...</div>;
		}

		return <WrappedComponent {...props} />;
	};

	return ComponentWithAuth;
};

export default withProtectedRoute;
