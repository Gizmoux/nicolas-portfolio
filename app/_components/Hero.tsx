import React from 'react';
import Section from './Section';
import profilPicture from '../_components/assets/Images/profil-pic.jpg';
import Image from 'next/image';

const Hero = () => {
	return (
		<Section className="flex max-md:flex-col items-start">
			<div className="flex-[2]">
				<h2 className="font-caption text-3xl">NIcolas de Riemacker</h2>
				<h3>React Developper</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ut,
					voluptatem perferendis, odit nesciunt dicta ipsa quibusdam illo
					ratione
				</p>
			</div>
			<div className="flex-1">
				<Image
					src={profilPicture}
					className="rounded-xl w-full h-auto max-w-xs"
					alt="Profil Picture"
				/>
			</div>
		</Section>
	);
};

export default Hero;
