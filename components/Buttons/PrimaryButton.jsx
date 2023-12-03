import React from 'react'
import Link from "next/link"

const PrimaryButton = ({ css }) => {
  return (
    <Link href="/#" className={css}>
        Merchant Login
  </Link>
  )
}

export default PrimaryButton
