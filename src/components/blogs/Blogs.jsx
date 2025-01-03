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

            {/* <BlogItem blogURL="https://plausible-tune-8e4.notion.site/University-of-Waterloo-and-Tech-Jobs-131da84986758011a24cd414180eb938" imageURL="/images/blogs/job-and-waterloo.jpg"
            category="Sharing" blogDate="Nov 18, 2024" title="University of Waterloo and Tech Jobs"
            blogDesc="As I am just two months into my first full-time job, I wanted to share a little bit about the job hunting process for me to get my full-time job as well as the Waterloo co-op finding process."/>
            
            <BlogItem blogURL="https://plausible-tune-8e4.notion.site/Exploring-Backstage-131da8498675807f9139ca8393553a52" imageURL="/images/blogs/backstage.png"
            category="Tech" blogDate="Oct 18, 2024" title="Exploring Backstage"
            blogDesc="Came across a really cool tool at work built based on Backstage, wanted to share a little bit more about this open source framework."/> */}

            <BlogItem blogURL="https://plausible-tune-8e4.notion.site/Monitoring-Github-Actions-131da849867580d994bfcfa1d9108f15" imageURL="/images/blogs/gha.png"
            category="Tech" blogDate="Aug 30, 2024" title="Monitoring Github Actions"
            blogDesc="Some thoughts on monitoring jobs, workflows, and runners for GHA. Throughout my internship at Trend Micro, observability of GHA has been a pain point for me."/>
    
            <BlogItem blogURL="https://plausible-tune-8e4.notion.site/Different-Types-of-Dental-Specialists-131da849867580829e1ddf1ca3fb7ab2" imageURL="/images/blogs/dental.jpg"
            category="Random" blogDate="June 18, 2023" title="Different Types of Dental Specialists"
            blogDesc="One of my friend just started a career in denturist. Before knowing what a denturist is, I thought dentist is your teeth guy and takes care of everything. I did a little research on the difference between Dentist, Denturist, Orthodontist, and some more."/>

            <BlogItem blogURL="https://plausible-tune-8e4.notion.site/Meepoer-12bda8498675803a96e8d9b57d8a1c01" imageURL="/images/blogs/meepoer-intro.png"
            category="Project" blogDate="March 1, 2022" title="Building a Social Media Post Generator"
            blogDesc="Meepoer was the first fullstack project I built, which generated Instagram styled posts based on AI."/>

            <BlogItem blogURL="https://plausible-tune-8e4.notion.site/Turtle-132da84986758095bbbcf5c8d654143e" imageURL="/images/blogs/mira-hub.jpeg"
            category="Project" blogDate="Jan 12, 2022" title="Light-weight (literally) video compressor and transcoder"
            blogDesc="MiraHub, project name turtle, was a video compressor and transcoder I built during my internship at Baixing based on Nvidia Jetson Nano. Find out more about it in this blog."/>

            <BlogItem blogURL="https://plausible-tune-8e4.notion.site/Media-Search-Engine-132da84986758033aae8c59d3baba76a" imageURL="/images/blogs/search_demo.png"
            category="Project" blogDate="Jan 12, 2022" title="Building a Media Search Engine"
            blogDesc="I built a Media Search Engine for hundred of video editors during my internship at MiraVideo. It supports querying videos by categories, colors, people, attributes, and more. Find out more about it in this blog."/>

            <BlogItem blogURL="https://plausible-tune-8e4.notion.site/Some-Thoughts-After-My-First-Internship-12cda8498675804f943de6c37b8b3d9b" imageURL="/images/blogs/weijing.jpg"
            category="Sharing" blogDate="Dec 25, 2021" title="Some Thoughts After My First Internship"
            blogDesc="Just wrapped up my first (year-long) internship at Baixing, lots of learnings and wanted to reflect back upon them."/>
          </ul>
          <div className="load-more-btn-container">
            <a href="https://plausible-tune-8e4.notion.site/Blogs-129da84986758046810aebebe2a3637a" 
            target="_blank" rel="noopener noreferrer" className="load-more-btn">Load More</a>
          </div>
        </section>
    </article>
    )
}

export default Blogs;
