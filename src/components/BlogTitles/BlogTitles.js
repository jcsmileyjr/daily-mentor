import './blogtitles.css';


const BlogTitles = () => {
    return(
        <div>
            <h1 id="blog-section-title">Blogs</h1>
            <section>
                <article className='blogtitles-section'>
                    <h4><a href="https://dev.to/jcsmileyjr/15-important-tips-about-mentorship-502f" target="_blank" rel="noopener noreferrer">15 Important tips about Mentorship</a></h4>
                    <p>There is a reason why high performance athletes and successful business leaders always have coaches and mentors. The shortest path from struggling to being productive is advice from someone who has been where you are going. These successful individuals seek out help early and often because they recognize the value of mentorship.</p>
                </article>
                <article className='blogtitles-section'>
                    <h4><a href="https://dev.to/jcsmileyjr/what-are-good-developer-habits-2bfp" target="_blank" rel="noopener noreferrer">What are good developer habits?</a></h4>
                    <p>Communication skills like public speaking (demos), writing (technical pitches or design documents), and group conversation etiquette (inclusive communication) are really important. For example, it doesn’t matter how good you are at coding if you interrupt people in meetings so they don’t want to work with you.</p>
                </article>
                <article className='blogtitles-section'>
                    <h4><a href="https://medium.com/codeconnective/learning-new-skills-while-breaking-into-tech-b8793f61a1c2?source=friends_link&sk=df5c9187686a2c0dcc0e59bb9773e925" target="_blank" rel="noopener noreferrer">Learning new skills while breaking into tech</a></h4>
                    <p>I have been trying to get into tech for a long time and have made every classic mistake possible. I hope by reading this, you can avoid these painful mistakes and get into the tech industry faster.</p>
                </article>
                <article className='blogtitles-section'>
                    <h4><a href="https://dev.to/jcsmileyjr/how-do-you-improve-your-programming-skills-1dk0" target="_blank" rel="noopener noreferrer">How do you improve your programming skills?</a></h4>
                    <p>This all comes down to keys on the keyboard. Repeated practice is the mantra here and increased skill doesn't yield itself to any other shortcuts</p>
                </article>
                <article className='blogtitles-section'>
                    <h4><a href="https://dev.to/jcsmileyjr/athletes-train-their-physical-abilities-and-their-sports-specific-skills-how-can-developers-do-the-same-using-that-analogy-mbi" target="_blank" rel="noopener noreferrer"> Athletes train their physical abilities and their sports specific skills. How can developers do the same using that analogy?</a></h4>
                    <p>Athletes train hard to be able to handle any situation encountered in their sport. Therefore, in tech if we expose ourselves to many concepts, we will build a powerful arsenal of resources to handle any situation.</p>
                </article>
                <article className='blogtitles-section'>
                    <h4><a href="https://dev.to/jcsmileyjr/all-my-heroes-start-early-153c" target="_blank" rel="noopener noreferrer">All my heroes start early</a></h4>
                    <p>Its 5am and I noticed through social media that my heroes were already up and active. They were creating content, sharing resources, and learning. This got me thinking if this was a common theme among high performers.</p>
                </article>
            </section>
        </div>
    );
}

export default BlogTitles;