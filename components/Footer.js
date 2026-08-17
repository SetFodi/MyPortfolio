import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/SetFodi', icon: FaGithub },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/luka-partenadze-394675348/', icon: FaLinkedin },
    { name: 'Instagram', href: 'https://www.instagram.com/fartenadzeluka/', icon: FaInstagram },
  ]

  return (
    <footer className="editorial-footer" id="contact">
      <div className="editorial-footer__inner">
        <p className="eyebrow">Have a project in mind?</p>
        <div className="editorial-footer__headline">
          <h2>Let’s make it <em>useful,</em><br />then unforgettable.</h2>
          <a className="circle-link" href="mailto:lukafartenadze2004@gmail.com" aria-label="Email Luka Partenadze">
            <ArrowUpRight size={28} />
          </a>
        </div>
        <a className="editorial-footer__email" href="mailto:lukafartenadze2004@gmail.com">
          lukafartenadze2004@gmail.com
        </a>
        <div className="editorial-footer__bottom">
          <span>© 2026 Luka Partenadze</span>
          <span>Tbilisi, Georgia · GMT+4</span>
          <div className="editorial-footer__socials">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                <social.icon />
              </a>
            ))}
          </div>
          <Link href="/projects">Selected work ↗</Link>
        </div>
      </div>
    </footer>
  )
}
