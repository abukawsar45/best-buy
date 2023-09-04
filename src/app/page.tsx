'use client'
import Image from 'next/image'
import {Button} from "@material-tailwind/react"

export default function Home() {
  return (
    <div>
      <h3 className='text-3xl'>This home page</h3>
      <Button>Button</Button>
    </div>
  );
}
