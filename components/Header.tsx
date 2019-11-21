import * as React from 'react'
import Link from 'next/link'

type Props = {
  title?: string
}

const Header: React.FunctionComponent<Props> = () => (
  <div>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
      </nav>
    </header>
  </div>
)

export default Header