import "../src/styling/About.css";

const info = {
  name: "Kaushal Sharma",
  title: "Full Stack Web Developer",
  stack: "MERN stack, C++",
  hackathons: 4,
  hostedProjects: 6,
  leetcode: "200+",
  photo: "/assets/Photo.png",
};

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-title"><h1>ABOUT</h1></div>
      <div className="about-main">

        {/* Left: Profile Photo */}
        <div className="about-left">
          <img src={info.photo} alt="Profile" className="about-photo" />
        </div>

        {/* Right: Info */}
        <div className="about-right">
          <span className="about-role">{info.title}</span>
          <h1 className="about-name">{info.name}</h1>
          
          <p className="about-stack">
            <span className="about-highlight">{info.stack}</span>
          </p>

          {/* Stats Cards */}
          <div className="about-cards">
            <div className="about-card">
              <span className="card-count">{info.hackathons}</span>
              <span className="card-title">Hackathons</span>
            </div>
            <div className="about-card">
              <span className="card-count">{info.hostedProjects}</span>
              <span className="card-title">Hosted Projects</span>
            </div>
            <div className="about-card">
              <span className="card-count">{info.leetcode}</span>
              <span className="card-title">Leetcode Problems</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
