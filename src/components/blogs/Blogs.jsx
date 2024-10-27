import "./Blogs.css"

import BlogItem from "./blog-item/BlogItem";

function Blogs() {
    return (
    <article className="blog" data-page="blog">

        <header>
          <h2 className="h2 article-title">Blogs</h2>
        </header>

        <section className="blog-posts">
          <ul className="blog-posts-list">

            <BlogItem blogURL="https://code.org/helloworld" imageURL="/images/blogs/job-and-waterloo.jpg"
            category="Sharing" blogDate="Nov 18, 2024" title="University of Waterloo and Tech Jobs"
            blogDesc="As I am just two months into my first full-time job, I wanted to share a little bit about the job hunting process for me to get my full-time job as well as the Waterloo co-op finding process."/>
            
            <BlogItem blogURL="https://code.org/helloworld" imageURL="/images/blogs/backstage.png"
            category="Tech" blogDate="Oct 18, 2024" title="Exploring Backstage"
            blogDesc="Came across a really cool tool at work built based on Backstage, wanted to share a little bit more about this open source framework."/>

            <BlogItem blogURL="https://code.org/helloworld" imageURL="/images/blogs/gha.png"
            category="Tech" blogDate="Aug 30, 2024" title="Monitoring Github Actions"
            blogDesc="Some thoughts on monitoring jobs, workflows, and runners for GHA. Throughout my internship at Trend Micro, observability of GHA has been a pain point for me."/>
    
            <BlogItem blogURL="https://code.org/helloworld" imageURL="/images/blogs/dental.jpg"
            category="Random" blogDate="June 18, 2023" title="Different Types of Dental Specialists"
            blogDesc="One of my friend just started a career in denturist. Before knowing what a denturist is, I thought dentist is your teeth guy and takes care of everything. I did a little research on the difference between Dentist, Denturist, Orthodontist, and some more."/>

            <BlogItem blogURL="https://plausible-tune-8e4.notion.site/Meepoer-12bda8498675803a96e8d9b57d8a1c01" imageURL="/images/blogs/meepoer-intro.png"
            category="Project" blogDate="March 1, 2022" title="Building a Social Media Post Generator"
            blogDesc="Meepoer was the first fullstack project I built, which generated Instagram styled posts based on AI."/>

            <BlogItem blogURL="https://code.org/helloworld" imageURL="/images/blogs/weijing.jpg"
            category="Sharing" blogDate="Dec 25, 2021" title="Some Thoughts After My First Internship"
            blogDesc="Just wrapped up my first (year-long) internship at Baixing, lots of learnings and wanted to reflect back upon them."/>

          </ul>
        </section>

    </article>
    )
}

export default Blogs;
