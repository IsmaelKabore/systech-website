import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center" />
       <div className="mb-3 flex space-x-4">
         <SocialIcon kind="mail" href="mailto:contact@systech.com" size={10} />
         <SocialIcon kind="github" href={siteMetadata.github} size={10} />
         <SocialIcon kind="facebook" href="https://www.facebook.com/me/" size={10} />
         <SocialIcon kind="linkedin" href="https://www.linkedin.com/in/sys-tech-4537503a8" size={10} /> 
         <SocialIcon kind="whatsapp" href="https://wa.me/message/BVF3OPRGALESC1" size={10} />
         <SocialIcon kind="instagram" href="https://www.instagram.com/syst.tech/" size={10} />
         <SocialIcon kind="tiktok" href="https://www.tiktok.com/@systtechnologie?lang=fr" size={10} />
       </div>
       <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div>
    </footer>
  )
}
