import WITBLOG from '../../assets/wocintech-blog.jpg';
import './recentBlogPosts.css';


const RecentBlogPosts = () => {
    return(
        <div className="recent-blog-container">
            
            <h1>Most Recent Blog Post</h1>
                <img id="recentBlogImage" src={WITBLOG} alt="something"  />
                
            
            <a id="recentBlogLink" href="https://dev.to/jcsmileyjr/how-can-we-use-adversity-to-shape-our-tech-careers-37if" target="_blank" rel="noopener noreferrer">How can we use Adversity to shape our tech careers?</a>
            <p>The key to overcoming adversity is attitude and how you plan on achieving your goals. 
            Sometimes you have to first go through the challenge to realize that the worst part was in your head. 
            Read more by clicking the link above.
            </p>
        </div>
    )
}

export default RecentBlogPosts;