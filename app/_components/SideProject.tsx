"use client";
import Link from "next/link";
import { LucideIcon, Drama, Rss, DollarSign, Bitcoin } from "lucide-react";

export type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

export const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Drama,
    title: "Marvel-App",
    description: "Une plateforme pour vos persos Marvel préférés",
    url: "https://marvel-application-three.vercel.app/",
  },
  {
    Logo: Bitcoin,
    title: "Argent Bank",
    description: "Authentification et accès à son compte personnel",
    url: "https://github.com/Gizmoux/wealth-health",
  },
  {
    Logo: Rss,
    title: "AriMayi",
    description: "AriMayi",
    url: "https://www.arimayi.fr/",
  },
  {
    Logo: DollarSign,
    title: "Billed",
    description: "Testing with Jest",
    url: "https://github.com/Gizmoux/P9---Billed",
  },
];

export const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-lg text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
