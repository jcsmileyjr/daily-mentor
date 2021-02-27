import WomenInTech from '../../assets/wit-photo.jpg';
import PhotoComponent from '../PhotoComponent';
import './upcomingmeetup.css';

const UpcomingMeetups = () => {
    return(
        <div>
            <h1>UpComing Meetups</h1>
            <section className="mimimizeImage">
                <PhotoComponent photo={WomenInTech} title="Women in Tech Panel by Code Connector" link="https://www.meetup.com/memphis-technology-user-groups/events/wbgfwryccdbfc/" />
                <p>Panelist will describe their place in the tech community and how they got there as well as answer questions from the audience!</p>
            </section>
            
        </div>
    )
}

export default UpcomingMeetups;