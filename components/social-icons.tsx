// components/social-icons.tsx
import { Mail, Github, Facebook, Linkedin, MessageCircle, Instagram, Music } from 'lucide-react'

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  linkedin: Linkedin,
  whatsapp: MessageCircle,
  instagram: Instagram,
  tiktok: Music,
}

interface SocialIconProps {
  kind: string
  href: string
  size?: number
}

export default function SocialIcon({ kind, href, size = 8 }: SocialIconProps) {
  const SocialSvg = components[kind as keyof typeof components]

  if (!SocialSvg) return null

  return (
    <a
      className="text-sm text-gray-500 transition-all duration-300 hover:text-gray-600 transform hover:scale-125 hover:-translate-y-1"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg 
        className="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 transition-colors duration-300"
        style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
      />
    </a>
  )
}