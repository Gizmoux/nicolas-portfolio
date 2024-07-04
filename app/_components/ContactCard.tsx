/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import imagePerso from '../_components/assets/Images/profil-pic.jpg';

export const ContactCard = (props: {
	image: string;
	mediumImage: string;
	name: string;
	description: string;
	url?: string;
}) => {
	return (
		<Link href={props.name} className="w-full">
			<Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
				<div className="relative w-10 h-10">
					<Image
						width={100}
						height={100}
						src={imagePerso}
						alt={props.name}
						className="w-10 h-10 rounded-full object-cover"
					/>
					<img
						width={100}
						height={100}
						src={props.image}
						alt={props.name}
						className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-cover"
					/>
				</div>
				<div className="flex-1">
					<div className="flex items-center gap-2">
						<p className="text-lg font-semibold">{props.name}</p>
					</div>
					<p className="text-md text-muted-foreground">{props.description}</p>
				</div>
				<ArrowUpRight
					size={24}
					className="group-hover:translate-x-2 mr-2 group-hover:-translate-y-2 transition-transform"
				/>
			</Card>
		</Link>
	);
};
