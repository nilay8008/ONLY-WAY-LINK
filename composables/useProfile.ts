export const useProfile = () => {
  const profile = {
    name: 'NILAY PATEL',
    bio: "I'm Nilay | Web3 & DeFi researcher focused on On chain intelligence",
    avatar: 'https://raw.githubusercontent.com/nilay8008/MyImages/main/nip.jpeg', // replace with real avatar URL
    socials: [
      { id: 'twitter',    icon: 'uil:twitter',     label: 'Twitter',   href: 'https://x.com/0xnilay' },
      { id: 'telegram',   icon: 'uil:telegram',    label: 'Telegram',  href: 'https://t.me/OxNilay' },
      { id: 'email',      icon: 'uil:envelope',    label: 'Email',     href: 'mailto:nilaypatel309@gmail.com' },
      { id: 'github',     icon: 'uil:github',      label: 'GitHub',    href: 'https://github.com/nilay8008' },
      { id: 'linkedin',   icon: 'uil:linkedin',    label: 'LinkedIn',  href: 'https://www.linkedin.com/in/0xnilay/' },
    ],
    links: [
      {
        id: 'website',
        icon: 'uil:globe',
        label: 'My Website',
        href: 'https://example.com',
      },
      {
        id: 'Resume',
        icon: 'uil:file-alt',
        label: 'Download my resume',
        href: 'https://drive.google.com/file/d/1WFLzrFG9HUu-SvNVTAB8QmXoVqtdgiAt/view?usp=sharing',
      },
    ],
  }

  return { profile }
}
