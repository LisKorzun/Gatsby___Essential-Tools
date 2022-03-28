import React, { FC } from 'react'

import { Link, PageProps } from 'gatsby'

const NotFoundPage: FC<PageProps> = () => {
  return (
    <main>
      <title>Not found</title>
      <h1>Page not found</h1>
      <Link to="/">Go home</Link>.
    </main>
  )
}

export default NotFoundPage
