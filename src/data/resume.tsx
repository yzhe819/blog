import { Icons } from "@/components/icons";
import { BrainIcon, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "yzhe819",
  initials: "YZ",
  url: "https://github.com/yzhe819",
  location: "Auckland, New Zealand",
  locationLink: "https://www.google.com/maps/place/auckland",
  description:
    "I studied Software Engineering and Mathematics from the world. Now I'm building code I love—life’s too short for boring code.",
  summary: "With a passion for building wonderful web3 products.",
  avatarUrl: "https://avatars.githubusercontent.com/u/68207314?v=4",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Supabase",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
    "C",
    "Matlab",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/thoughts", icon: BrainIcon, label: "Thoughts" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yzhe819",
        icon: Icons.github,
        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,
        navbar: true,
      },
      // email: {
      //   name: "Send Email",
      //   url: "#",
      //   icon: Icons.email,
      //   navbar: false,
      // },
    },
  },

  work: [
    {
      company: "RSS3",
      href: "https://rss3.io/",
      badges: [],
      location: "Remote",
      title: "Senior Software Engineer",
      logoUrl: "/rss3.webp",
      start: "Jul 2024",
      end: "Dec 2025",
      description:
        "RSS3 is the open information layer. It is by far the biggest information network with more than 1.4 billion requests in 2022. By constructing a network covering all decentralized networks, RSS3 bridges Web3 to AI, search, and social.",
    },
    {
      company: "RSS3",
      href: "https://rss3.io/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/rss3.webp",
      start: "Oct 2023",
      end: "Jul 2024",
      description:
        "RSS3 is a decentralized network indexing and structuring open information, making it accessible and valuable for the next Twitter, Google, and OpenAI.",
    },
  ],
  education: [
    {
      school: "University of Auckland",
      href: "https://www.auckland.ac.nz/",
      degree: "Master of Science (MSc) in Mathematics",
      logoUrl: "/uoa.jpg",
      start: "2026",
      end: "?",
      details: [
        "Postgraduate study in Mathematics increases knowledge and understanding across a broader and deeper range of topics.",
      ],
    },
    {
      school: "University of Auckland",
      href: "https://www.auckland.ac.nz/",
      degree: "Bachelor of Engineering (Honours) in Software Engineering",
      logoUrl: "/uoa.jpg",
      start: "2020",
      end: "2023",
      details: [
        "Focused on Software Engineering as caffeine intake increased proportionally with code complexity.",
      ],
    },
    {
      school: "University of Auckland",
      href: "https://www.auckland.ac.nz/",
      degree: "Bachelor of Engineering (Honours) in General Engineering",
      logoUrl: "/uoa.jpg",
      start: "2019",
      end: "2020",
      details: [
        "Learned a bit of everything in general engineering (and how to survive group assignments).",
      ],
    },
  ],
  projects: [
    {
      title: "xLog",
      href: "https://xlog.app/about",
      dates: "2025",
      active: true,
      description:
        "Write. Own. Earn.\n\nAn open-source creative community written on the blockchain.",
      technologies: ["Editor", "Web3", "Markdown"],
      links: [
        {
          type: "Website",
          href: "https://xlog.app/about",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "MIT-6.S081 Labs",
      href: "https://github.com/yzhe819/MIT-6.S081",
      dates: "2022",
      active: true,
      description:
        "MIT 6.S081 lab code sprint. The actual kernel development of the operating system. An eternal classic—a holy grail of computer science.",
      technologies: ["C", "Operating Systems", "Kernel", "MIT"],
      links: [
        {
          type: "Source",
          href: "https://github.com/yzhe819/MIT-6.S081",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "C Compiler",
      href: "https://github.com/yzhe819/CCompiler",
      dates: "2022",
      active: true,
      description:
        "A personal C compiler project built for fun and growth. From parsing to codegen—where C turns into magic.",
      technologies: ["C", "Interpreter", "Tokenizer"],
      links: [
        {
          type: "Source",
          href: "https://github.com/yzhe819/CCompiler",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Be-Vue (Build Your Own Vue3)",
      href: "https://github.com/yzhe819/Be-Vue",
      dates: "2022",
      active: true,
      description:
        "Roll your own Vue3. A minimal reimplementation using TypeScript, to feel the true magic of reactivity from scratch.",
      technologies: ["Vue.js", "TypeScript", "Frontend"],
      links: [
        {
          type: "Source",
          href: "https://github.com/yzhe819/Be-Vue",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Open Network",
      dates: "November 2024",
      location: "Remote",
      description:
        "Open is a series of endeavors, accelerating the course of the Open Web.",
      image: "/open.webp",
      mlh: "https://open.network/",
      links: [],
    },
  ],
} as const;
