'use client';
/* eslint-disable @next/next/no-img-element */
import { Card } from '@/components/ui/card';
import Section from './Section';
import { Home } from 'lucide-react';
// import logoTwitter from '../_components/assets/Images/logoTwitter.jpg';
import { SIDE_PROJECTS, SideProject } from './SideProject';
import { ContactCard } from './ContactCard';
import { Work, WorkProps } from './Work';
const Status = () => {
	return (
		<Section className="flex max-md:flex-col items-start gap-2">
			<div className="flex-[3] w-full">
				<Card className="flex-[3] w-full p-4 flex flex-col gap-2">
					<p className="text-lg text-muted-foreground">Projets personnels</p>
					<div className="flex flex-col  gap-4">
						{SIDE_PROJECTS.map((project, index) => (
							<SideProject
								key={index}
								Logo={project.Logo}
								title={project.title}
								description={project.description}
								url="/"
							/>
						))}
					</div>
				</Card>
			</div>

			<div className="flex-[2] w-full flex flex-col h-full gap-4">
				<Card className="p-4 flex-1">
					<p className="text-lg text-muted-foreground">Dernière expérience</p>
					{WORKS.map((work, index) => (
						<Work
							key={index}
							image={work.image}
							title={work.title}
							role={work.role}
							date={work.date}
							url={work.url}
						/>
					))}
				</Card>
				<Card className="p-4 flex-1 flex flex-col gap-2">
					<p className="text-lg text-muted-foreground">Contactez-moi</p>
					<ContactCard
						name="@gizmoux"
						image="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
						mediumImage=""
						description="Twitter"
					/>
					<ContactCard
						name="Nicolas"
						image="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
						mediumImage=""
						description="Linkedin"
					/>
				</Card>
			</div>
		</Section>
	);
};
const WORKS: WorkProps[] = [
	{
		image: '',
		title: 'macoque.com',
		role: 'Manager',
		date: '2017-2023',
		url: 'https://macoque.com',
	},
];
export default Status;
