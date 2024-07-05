import { buttonVariants } from '@/components/ui/button';
import Section from './Section';
import GithubIcon from './icons/GithubIcon';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import TwitterIcon from './icons/TwitterIcon';
import LinkedinIcon from './icons/LinkedinIcon';

const Header = () => {
	return (
		<header className="top-0 py-4 ">
			<Section className="flex items baseline">
				<h1 className="text-lg font-bold text-primary">Nicolas</h1>
				<div className="flex-1"></div>
				<ul className="flex items-center gap-2">
					<Link
						href="https://github.com/Gizmoux"
						className={cn(buttonVariants({ variant: 'outline' }), 'size-6 p-0')}
					>
						<GithubIcon size={14} className="text-foreground" />
					</Link>
					<Link
						href="https://x.com/nicogizmoux"
						className={cn(buttonVariants({ variant: 'outline' }), 'size-6 p-0')}
					>
						<TwitterIcon size={14} className="text-foreground" />
					</Link>
					<Link
						href="https://www.linkedin.com/in/nicolas-de-riemacker"
						className={cn(buttonVariants({ variant: 'outline' }), 'size-6 p-0')}
					>
						<LinkedinIcon size={14} className="text-foreground" />
					</Link>
				</ul>
			</Section>
		</header>
	);
};

export default Header;
