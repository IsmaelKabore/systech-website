import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 w-full max-w-2xl">

  {/* Email */}
  <Link
    href="mailto:contact@systech.com"
    className="flex items-center gap-4 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
  >
    <span className="text-3xl">✉️</span>
    <div>
      <p className="font-semibold text-white">Email</p>
      <p className="text-sm text-gray-400">contact@systech.com</p>
    </div>
  </Link>

  {/* GitHub */}
  <Link
    href={siteMetadata.github}
    target="_blank"
    className="flex items-center gap-4 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
  >
    <span className="text-3xl">🐙</span>
    <div>
      <p className="font-semibold text-white">GitHub</p>
      <p className="text-sm text-gray-400">Voir nos projets</p>
    </div>
  </Link>

  {/* LinkedIn */}
  <Link
    href="https://www.linkedin.com/in/sys-tech-4537503a8"
    target="_blank"
    className="flex items-center gap-4 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
  >
    <span className="text-3xl">💼</span>
    <div>
      <p className="font-semibold text-white">LinkedIn</p>
      <p className="text-sm text-gray-400">Connectez-vous avec nous</p>
    </div>
  </Link>

  {/* Facebook */}
  <Link
    href="https://www.facebook.com/share/1AYVuQvXSy/?mibextid=wwXIfr"
    target="_blank"
    className="flex items-center gap-4 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
  >
    <span className="text-3xl">📘</span>
    <div>
      <p className="font-semibold text-white">Facebook</p>
      <p className="text-sm text-gray-400">Suivez-nous</p>
    </div>
  </Link>

  {/* Instagram */}
  <Link
    href="https://www.instagram.com/syst.tech/"
    target="_blank"
    className="flex items-center gap-4 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
  >
    <span className="text-3xl">📸</span>
    <div>
      <p className="font-semibold text-white">Instagram</p>
      <p className="text-sm text-gray-400">Notre actualité</p>
    </div>
  </Link>

  {/* WhatsApp */}
  <Link
    href="https://wa.me/message/BVF3OPRGALESC1"
    target="_blank"
    className="flex items-center gap-4 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
  >
    <span className="text-3xl">💬</span>
    <div>
      <p className="font-semibold text-white">WhatsApp</p>
      <p className="text-sm text-gray-400">Discutez avec nous</p>
    </div>
  </Link>

{/* TikTok */}
<Link
  href="https://www.tiktok.com/@systtechnologie?lang=fr"
  target="_blank"
  className="flex items-center gap-4 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
>
  <span className="text-3xl">🎵</span>
  <div>
    <p className="font-semibold text-white">TikTok</p>
    <p className="text-sm text-gray-400">Suivez-nous sur TikTok</p>
  </div>
</Link>
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
