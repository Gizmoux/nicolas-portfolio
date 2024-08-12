'use client';
import React from 'react';
import Section from './Section';
import profilPicture from '../_components/assets/Images/profil-pic.jpg';
import Image from 'next/image';
import { Code } from './Code';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import GithubIcon from './icons/GithubIcon';
import NextIcon from './icons/NextIcon';

const Hero = () => {
	return (
		<Section className="flex max-md:flex-col items-start gap-10">
			<div className="flex-[3] w-full flex flex-col gap-4">
				<h2 className="font-caption font-bold text-4xl text-primary">
					Nicolas de Riemacker
				</h2>
				<h3 className="font-caption text-3xl">Développeur React</h3>
				<p className="text-base">
					Vous pouvez voir mes projets sur
					<Link href="http://github.com/Gizmoux">
						<Code className="inline-flex items-center gap-2 mb-2">
							<GithubIcon size={16} className="inline" />
							Github
						</Code>
					</Link>
					, codés avec certaines technologies comme
					<Code className="inline-flex items-center gap-2 ml-4">
						<NextIcon size={18} className="inline" /> Next.js
					</Code>
				</p>
			</div>
			<div className="flex-[2] max-md:m-auto ml-auto">
				<Image
					src={profilPicture}
					priority
					className="rounded-xl w-40 h-auto max-w-xs"
					alt="Profil Picture"
				/>
			</div>
		</Section>
	);
};

export default Hero;
