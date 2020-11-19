import React from 'react';
import '../css/AboutPage.css';
import NavBar from './NavBar';
import Footer from './footer';

const AboutPage = () => {
  return (
    <body>
      <NavBar />
      <div className="title">
        <p>About Us</p>
      </div>
      <div className="story">
        <h3 className="ourstory">Our Story</h3>
        <p>
          In 1958, Joe Coulombe took over a small chain of convenience stores
          around the LA area. These were called Pronto Markets. The whole idea
          was fast. Pronto – quick, right? And they were convenience stores,
          before we really even know what convenience stores were. The kind of
          place where you could get anything from, say, a pack of gum to some
          pantyhose.
        </p>

        <p>
          {' '}
          After 10 years of running Pronto Markets, the convenience store
          formula just didn’t continue to make sense. So, Joe, the classic
          entrepreneur, took note that the demographics were changing in the
          United States because of the G.I. Bill of Rights, a large experiment
          in mass higher education, and identified an opportunity to deliver…
          something different.
        </p>
      </div>
      <Footer />
    </body>
  );
};

export default AboutPage;
