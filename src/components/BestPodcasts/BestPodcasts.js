import PhotoComponent from '../PhotoComponent';
import CodeNewbie from '../../assets/Code-Newbie.jpg';
import BISPodcast from '../../assets/BIS-podcast.png';
import Ladybug from '../../assets/ladybug2.png';
import './bestpodcasts.css';

const BestPodcasts = () => {
    return(
        <div>
            <h1>Best Podcasts</h1>
            <section className="bestPodCastSection">
                <PhotoComponent photo={CodeNewbie} link="https://www.codenewbie.org/podcast/how-to-get-that-first-coding-job" title="How to stay motivated and get your first job Danny Thompson" />
                <PhotoComponent photo={BISPodcast} link="https://breakingintostartups.com/kesha-lake-how-a-mom-became-a-remote-software-engineer-at-stitch-fix/" title="#121: Kesha Lake – How a Mom from Atlanta became a Remote Software Engineer at Stitch Fix" />
                <PhotoComponent photo={Ladybug} link="https://www.ladybug.dev/episodes/resumes" title="Building A Resume" />
            </section>
        </div>
    );
}

export default BestPodcasts;