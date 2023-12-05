import React from 'react';
import Link from 'next/link';

const SecondaryButton = ({ text }: Button) => {
  return (
    <Link href="/#" className="btn-primary">
      {text}
    </Link>
  )
}

export default SecondaryButton
