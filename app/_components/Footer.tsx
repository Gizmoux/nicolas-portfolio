'use client';
import Section from './Section';

const Footer = () => {
	return (
		<footer className="bg-card">
			<Section className="py-8">
				<p className="text-muted-foreground text-sm">
					©️ 2024 Nicolas de Riemacker. Tous droits réservés.
				</p>
			</Section>
		</footer>
	);

	return (
		<footer className="bg-card">
			<Section className="py-8">
				<p className="text-muted-foreground text-sm">
					© Copyright 2024 Nicolas de Riemacker
				</p>
			</Section>
		</footer>
	);
};

export default Footer;
