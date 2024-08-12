'use client';
import Section from './Section';
import { Badge } from '@/components/ui/badge';
import { ContactCard } from './ContactCard';

const Skills = () => {
	return (
		<Section className="flex flex-col items-start gap-4">
			<Badge variant={'outline'}>Contact me</Badge>
			<h2 className="pb-2 text-2xl font-semibold tracking-tight first:mt-0">
				Vous pouvez me contacter ici, je serai heureux de travailler avec vous
			</h2>
			<div className="flex max-md:flex-col gap-4 w-full">
				<ContactCard
					name="Nicolas"
					image="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
					mediumImage=""
					description="Linkedin"
				/>
				<ContactCard
					url="mailto:nicolas.deriemacker@hotmail.fr"
					name="contact@nicolas.fr"
					image="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_mail_gmail_logo_icon_159346.png"
					mediumImage=""
					description="Email"
				/>
			</div>
		</Section>
	);
};

export default Skills;
