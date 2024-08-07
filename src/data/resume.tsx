import { Icons } from "@/components/icons";
import { HomeIcon,FolderIcon , } from "lucide-react";

export const DATA = {
  name: "Sai Kumar",
  initials: "M",
  url: "https://dillion.io",
  location: "India, Tamil Nadu",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Junior Web3 Developer. Passionate about empowering change through decentralized technology",
  summary:
    "Almost done with my IT degree, and I've landed in the heart of Web3. The idea of making the web more open yet private? It's electrifying. I'm throwing myself into projects that don't just talk the talk but walk the walk.",
  avatarUrl: "/itzme.jpg",
  skills: [
    "Solidity",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express.js",
    "ethers.js",
    "Java",
    "TailwindCSS"
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
        url: "https://github.com/Saiwebdev2005",
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
      degree: "Bachelor's Degree of Information Technology (BCS)",
      logoUrl: "/kgcas.jpeg",
      start: "2022",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "ZK-RWA-Tracker",
      href: "https://chatcollect.com",
      dates: "June 2024 - Aug 2024",
      active: true,
      description:
        "Zero Knowledge Real Asset Verifier: Mint NFTs for real-world assets with privacy. Verify ownership and details without revealing sensitive information. Secure, private, and blockchain-powered",
      technologies: [
        "Solidity",
        "Zokrates",
        "ethers.js",
        "Next.js",
        "Typescript",
        "Express.js",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Ez-CryptoPay",
      href: "https://llm.report",
      dates: "May 2024 - June 2024",
      active: true,
      description:
        "EzCryptoPay: Versatile Ethereum payment platform. One-to-one and one-to-many transfers with automatic splitting. Generate and scan QR codes for easy wallet-to-wallet transactions.",
      technologies: [
        "Solidity",
        "ethers.js",
        "Next.js",
        "Typescript",
        "Web3.js",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "DCEX",
      href: "https://magicui.design",
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
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    
    {
      title: "Smart-Lease",
      href: "https://automatic.chat",
      dates: "February 2024 - March 2024",
      active: true,
      description:
        "SmartLease: Blockchain rental platform. Automated payments, collateral, and instant access keys. Secure and efficient for all parties.",
      technologies: [
        "Solidity",
        "ethers.js",
        "Next.js",
        "Typescript",
        "react-moralis",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
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
