'use client';
/* eslint-disable react/no-unescaped-entities */
import Section from './Section';
import { Badge } from '@/components/ui/badge';
import { Code } from './Code';
import ReactLogo from './icons/ReactLogo';
import TailwindLogo from './icons/TailwindLogo';
import NextIcon from './icons/NextIcon';
const Skills = () => {
	return (
		<Section className="flex flex-col items-start gap-4">
			<Badge variant={'outline'}>Skills</Badge>
			<h2 className="pb-2 text-2xl font-semibold tracking-tight first:mt-0">
				Mes domaines d'expertise 🔎
			</h2>
			<div className="flex max-md:flex-col gap-4">
				<div className="flex flex-col gap-2 flex-1">
					<div>
						<ReactLogo
							size={42}
							className="animate-spin"
							style={{ animationDuration: '10s' }}
						/>
					</div>
					<h3 className="text-2xl font-semibold tracking-tight">React</h3>
					<p className="text-muted-foreground text-sm">
						<Code>React</Code> est mon langage front-end principal. Je développe
						continuellement mes compétences et reste à l'écoute des meilleures
						pratiques.
					</p>
				</div>

				<div className="flex flex-col gap-2 flex-1">
					<NextIcon size={42} />
					<h3 className="text-2xl font-semibold tracking-tight">Next.js</h3>
					<p className="text-muted-foreground text-sm">
						<Code>Next.js</Code> est mon framework de prédilection. Je cherche
						constamment à approfondir ma maîtrise de ses fonctionnalités.
					</p>
				</div>

				<div className="flex flex-col gap-2 flex-1">
					<TailwindLogo size={42} />
					<h3 className="text-2xl font-semibold tracking-tight">TailwindCSS</h3>
					<p className="text-muted-foreground text-sm">
						Je conçois des interfaces avec <Code>TailwindCSS</Code>. Mon
						objectif : progresser et optimiser mes intégrations.
					</p>
				</div>
			</div>
		</Section>
	);
};

export default Skills;
