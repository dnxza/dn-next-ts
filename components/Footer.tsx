import * as React from 'react'
type Props = {
  title?: string
}

const Footer: React.FunctionComponent<Props> = () => (
  <div>
    <footer>
      <hr />
      <span>DNRatthee</span>
    </footer>
  </div>
)

export default Footer