import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="site-logo" aria-label="Luka Partenadze — home">
      <span className="site-logo__mark">LP</span>
      <span className="site-logo__name">
        Luka <br /> Partenadze
      </span>
    </Link>
  )
}
