import Image from 'next/image'
import React from 'react'
import authorImage from '@/public/Images/authors/profilePic-02.jpg'

const Intro = () => {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Saadan</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&apos;m a frontend developer and graphic designer with a computer science
          background, specializing in web applications. I work with the MERN
          stack, Next.js, and React, focusing on clean, user-friendly
          interfaces. My design skills complement my development work, ensuring
          visually appealing and functional solutions. I&apos;m a fast learner,
          problem solver, and excited to contribute to creating great digital
          experiences.
        </p>
      </div>
      <div>
        <Image
          src={authorImage}
          alt='Saadan Khalid'
          className='flex-1 rounded-lg'
          width={175}
          height={175}
        />
      </div>
    </section>
  )
}

export default Intro
