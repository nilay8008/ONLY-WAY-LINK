export const useProfile = () => {
  const profile = {
    name: 'NILAY PATEL',
    bio: "I'm Nilay | Mapping on chain alpha & decoding Web3 systems ⚡",
    avatar: '../assets/images/ni.jpg', // replace with real avatar URL
    socials: [
      { id: 'facebook',   icon: 'uil:facebook',   label: 'Facebook',  href: '#' },
      { id: 'twitter',    icon: 'uil:twitter',     label: 'Twitter',   href: '#' },
      { id: 'instagram',  icon: 'uil:instagram',   label: 'Instagram', href: '#' },
      { id: 'telegram',   icon: 'uil:telegram',    label: 'Telegram',  href: '#' },
      { id: 'whatsapp',   icon: 'uil:whatsapp',    label: 'WhatsApp',  href: '#' },
      { id: 'youtube',    icon: 'uil:youtube',     label: 'YouTube',   href: '#' },
      { id: 'email',      icon: 'uil:envelope',    label: 'Email',     href: 'mailto:john@example.com' },
      { id: 'github',     icon: 'uil:github',      label: 'GitHub',    href: '#' },
      { id: 'linkedin',   icon: 'uil:linkedin',    label: 'LinkedIn',  href: '#' },
    ],
    links: [
      {
        id: 'website',
        icon: 'uil:globe',
        label: 'My Website',
        href: 'https://example.com',
      },
      {
        id: 'amazon',
        icon: 'uil:amazon',
        label: 'Amazon wishlist',
        href: '#',
      },
      {
        id: 'react',
        icon: 'uil:atom',
        label: 'React JS course',
        href: '#',
      },
      {
        id: 'donate',
        icon: 'uil:heart-medical',
        label: 'Donate for our cause',
        href: '#',
      },
      {
        id: 'resume',
        icon: 'uil:file-alt',
        label: 'Download my resume',
        href: '#',
      },
    ],
  }

  return { profile }
}
