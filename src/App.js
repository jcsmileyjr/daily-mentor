import './App.css';
import NextMeetups from './components/NextMeetup/NextMeetups.js';
import UpcomingMeetups from './components/UpComingMeetup/UpcomingMeetup.js';
import RecentBlogPosts from './components/RecentBlogPost/RecentBlogPost';
import BestBlogPost from './components/BestBlogPost/BestBlogPost';
import BestPodcasts from './components/BestPodcasts/BestPodcasts.js';
import BlogTitles from './components/BlogTitles/BlogTitles';

function App() {
  return (
    <div className="App">
      <header>Daily Mentor</header>
      <main>
        <section id="upcomingMeetups">
          <UpcomingMeetups />
        </section>
        <section id="nextMeetups">
          <NextMeetups />
        </section>
        <section id="recentBlogPosts">
          <RecentBlogPosts />
        </section>
        <section id="bestBlogPosts">
          <BestBlogPost />
        </section>
        <section id="bestPodcasts">
          <BestPodcasts />
        </section>
        <section id="blogPosts">
          <BlogTitles />
        </section>
      </main>
    </div>
  );
}

export default App;
