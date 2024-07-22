import Image from 'next/image';
import AboutSection from './common/components/organisms/AboutUs/AboutSection';
import VisionSection from './common/components/organisms/Vision/VisionSection';
import OurStoriesSection from './common/components/organisms/OurStories/OurStoriesSection';
import OurTeam from './common/components/organisms/OurTeam/OurTeam';
import OurReview from './common/components/organisms/OurReview/OurReview';
import SubscribeSection from './common/components/organisms/Subscribes/SubscribeSection';
import Header from './common/components/organisms/Header/Header';
import Footer from './common/components/organisms/Footer/Footer';

export default function Home() {
	return (
		<main className='relative'>
			<Header />
			<AboutSection />
			<VisionSection />
			<OurStoriesSection />
			<OurTeam />
			<OurReview />
			<SubscribeSection />
			<Footer />
		</main>
	);
}
