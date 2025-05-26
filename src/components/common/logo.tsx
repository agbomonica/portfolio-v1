import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" className="font-bungee text-xl uppercase">
      monica
      <span className="text-secondary">.</span>
    </Link>
  )
}

export { Logo }
