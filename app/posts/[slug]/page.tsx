import { getPostBySlug, getPosts } from '@/lib/posts'
import { ArrowLeftIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import { formatDate } from '@/lib/utils'
import MdxContent from '@/components/mdx-content'

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map(post => ({slug: post.slug}))

  return slugs
}

async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, image, author, publishedAt } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href={'/posts'}
          className='mb-8 inline-flex items-center gap-2 text-sm font-light'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to posts</span>
        </Link>

        {image && (
          <div>
            <Image
              src={image}
              alt={title || ''}
              className='mb-4 object-contain'
              width={500}
              height={500}
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose mt-16 dark:prose-invert'>
          <MdxContent source={content} />
        </main>
      </div>
    </section>
  )
}

export default Post
