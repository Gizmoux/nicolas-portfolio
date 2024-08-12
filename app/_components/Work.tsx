'use client';
import Link from 'next/link';
import Image from 'next/image';
import logoMC from '../_components/assets/Images/logoMC.png';

export type WorkProps = {
	image: string;
	title: string;
	role: string;
	date: string;
	url: string;
};
export const Work = (props: WorkProps) => {
	return (
		<Link
			href={props.url}
			className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
		>
			<Image
				width={24}
				height={24}
				src={logoMC}
				alt={props.title}
				className="w-10 h-10 object-contain rounded-md"
			/>

			<div>
				<p className="text-lg font-semibold">{props.title}</p>
				<p className="text-lg text-muted-foreground">{props.role}</p>
			</div>
			<div className="ml-auto">
				<p className="text-md text-muted-foreground">{props.date}</p>
			</div>
		</Link>
	);
};
