import './bestblogpost.css';
import PhotoComponent from '../PhotoComponent';
import Tips from '../../assets/tips-blog.png';
import Resume from '../../assets/resume-blog.png';
import AspiringDev from '../../assets/aspiring-dev-blog.png';

const BestBlogPost = () => {
    return(
        <div>
            <h1>Best Blog Posts</h1>
            <section class="blog-section">
                <PhotoComponent link="https://dev.to/jcsmileyjr/tips-for-writing-a-great-resume-1kjj" photo={Resume} title="Tips for Writing a Great Resume" />
                <PhotoComponent link="https://dev.to/jcsmileyjr/what-steps-do-you-need-to-take-as-an-aspiring-web-developer-in-order-to-increase-your-chances-of-landing-a-job-3ih5" photo={AspiringDev} title="What steps do you need to take as an aspiring web developer in order to increase your chances of landing a job?" />
                <PhotoComponent link="https://dev.to/jcsmileyjr/8-tips-for-learning-to-code-deliberately-increasing-the-code-quality-46hb" photo={Tips} title="8 Tips for Learning to Code Deliberately & Increasing the Code Quality" />
            </section>

        </div>
    );
}

export default BestBlogPost;