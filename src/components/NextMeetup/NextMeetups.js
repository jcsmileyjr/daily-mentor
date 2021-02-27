import JDHH from '../../assets/jdhh-meetup.jpeg';
import VL from '../../assets/vl-meetup.jpeg';
import './nextMeetups.css'

import PhotoComponent from '../PhotoComponent';

const NextMeetups = () => {
    return(
        <div style={{width: "90%", margin:"auto"}}>
            <section className="nextMeetupImages" style={{marginBottom: "20px"}}>
                <PhotoComponent photo={VL} link="https://www.meetup.com/memphis-technology-user-groups/events/rdfvcsyccdbdc/" title="Virtual Lunch with Code Connector" />
            </section>
            
            <section className="nextMeetupImages">
                <PhotoComponent photo={JDHH} link="https://www.meetup.com/Junior-Developer-Happy-Hour/" title="AMA with Free Code Camp SF Organizers" />
            </section>
        </div>
    );
}

export default NextMeetups;