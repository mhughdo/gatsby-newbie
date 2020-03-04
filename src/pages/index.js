import React from 'react'
import Layout from '../components/layout'
import usePosts from '../hooks/use-posts'
import Hero from '../components/hero'
import PostPreview from '../components/post-preview'
import Insta from '../components/insta'

const Index = () => {
    const posts = usePosts()

    return (
        <>
            <Hero />
            <Layout>
                <h2> Read my blog</h2>
                {posts.map(post => {
                    return <PostPreview key={post.slug} post={post} />
                })}
                <Insta />
            </Layout>
        </>
    )
}

export default Index
