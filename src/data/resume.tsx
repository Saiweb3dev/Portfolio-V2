import { Icons } from "@/components/icons";
import { HomeIcon,FolderIcon , } from "lucide-react";

export const DATA = {
  name: "Sai Kumar",
  initials: "M",
  url: "https://github.com/Saiwebdev2005",
  location: "India, Tamil Nadu",
  locationLink: "https://www.google.com/maps/place/tamilnadu",
  description:
    "Junior Web3 Developer. Passionate about empowering change through decentralized technology",
  summary:
    "Really into decentralized stuff and how it's spreading. Comes up with wild, creative fixes for tricky distributed systems issues. All about using cutting-edge tech to boost digital fairness and openness.",
  avatarUrl: "/itzme.jpg",
  skills: [
    "Solidity",
    "React",
    "Next.js",
    "Typescript",
    "TailwindCSS",
    "Golang",
    "Gin",
    "Node.js",
    "Express.js",
    "ethers.js",
    "Hardhat",
    "MongoDB"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/Projects", icon: FolderIcon, label: "Projects" },
  ],
  contact: {
    email: "saiweb3dev@gmail.com",
    tel: "+919843445529",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Saiweb3dev",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sai-kumar-a2486424a",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/SaixDev",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "KGXperience",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Frontend Intern",
      logoUrl: "/KGX.jpeg",
      start: "September 2023",
      end: "December 2023",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "Cyfrin Updraft",
      href: "https://updraft.cyfrin.io/",
      degree: "Advanced Foundry",
      logoUrl: "/CyfrinUpdraft.jpeg",
      start: "January 2024",
      end: "April 2024",
    },
    {
      school: "KG College of Arts and Science",
      href: "https://www.kgcas.com/",
      degree: "Bachelor's Degree of Information Technology",
      logoUrl: "/kgcas.jpeg",
      start: "2022",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "ZeroKnowledge_RWA_Tracker",
      href: "https://github.com/Saiweb3dev/ZeroKnowledge_RWA_Tracker",
      dates: "June 2024 - Aug 2024",
      active: true,
      description:
        "Zero Knowledge Real Asset Verifier: Mint NFTs for real-world assets with privacy. Verify ownership and details without revealing sensitive information. Secure, private, and blockchain-powered",
      technologies: [
        "Solidity",
        "Zokrates",
        "IPFS",
        "Next.js",
        "Typescript",
        "Express.js",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Saiweb3dev/ZeroKnowledge_RWA_Tracker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ZK_RWA.png",
      video:
        "",
    },
    {
      title: "CrossChain_Token_Bridge",
      href: "https://github.com/Saiweb3dev/Cross-Chain_Token_Bridge",
      dates: "Aug 2024 - Oct 2024",
      active: true,
      description:
        "CrossChain_Token_Bridge: A decentralized, secure cross-chain token bridge for seamless transfers of custom tokens between different blockchain networks.",
      technologies: [
        "Solidity",
        "CCIP",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Golang",
        "Gin",
        "MongoDB"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Saiweb3dev/Cross-Chain_Token_Bridge",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/CrossChain_TB.png",
      video: "",
    },
    {
      title: "DCEX",
      href: "https://github.com/Saiwebdev2005/DecentraContent",
      dates: "April 2024 - May 2024",
      active: true,
      description:
        "Digital Content Exchange: Secure blockchain platform for digital content exchange. NFT-based, with escrow and smart contracts for seamless creator-customer transactions.",
      technologies: [
        "Solidity",
        "ethers.js",
        "Next.js",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Saiwebdev2005/DecentraContent",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/DCEX.png",
      video: "",
    },
    
    {
      title: "Kite_EEDU",
      href: "https://github.com/Saiweb3dev/kite-educational-dapp",
      dates: "July 2024 - Aug 2024",
      active: true,
      description:
        "Kite_EEDU: Blockchain-based educational platform offering courses in classical languages, where students can progress through lessons and assessments to earn NFT certificates of mastery.",
      technologies: [
        "Solidity",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Express.js",
        "ethers.js",
        "IPFS"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Saiweb3dev/kite-educational-dapp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Kite_EEDU.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Block Magic Hackathon",
      dates: "April 29, 2024",
      location: "Remote",
      description:
        "Developed an Secure blockchain platform for digital content exchange. NFT-based, with escrow and smart contracts for seamless creator-customer transactions.",
      image:
        "/blockmagic.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
    {
      title: "Smart India Hackathon",
      dates: "December 19, 2023",
      location: "Remote",
      description:
        "Developed an  academic networking platform. Showcase projects, find mentors, join forums, and access tech blogs. Personalized connections for students, mentors, and institutions",
      image:
        "/SIH.webp",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
