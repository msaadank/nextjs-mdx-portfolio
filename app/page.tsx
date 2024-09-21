import Intro from '@/components/intro'
import RecentPosts from '@/components/recent-posts'
import React from 'react'

function Home() {

  const content = `
    # This is markdown heading
  `

  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />

        <RecentPosts />
      </div>
    </section>
  )
}

export default Home