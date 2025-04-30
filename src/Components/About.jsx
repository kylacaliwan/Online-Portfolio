function About() {
  return (
    <section className="About">
      <div className="abouttag">
        <h1 className="abouttitle">ABOUT ME</h1>
      </div>
      <div className="about-container">
        <div className="leftdiv">
          <img src="/about.jpg" alt="" />
        </div>
        <div className="rightdiv">
          <h1>
            Hello, I'm <strong>Kyla Caliwan</strong>, an IT student pursuing a
            degree at Dalubhasaan ng Lungsod ng Lucena, with a specialization in
            Front-End developing.
          </h1>
          <p>
            During my studies, I’ve worked on different projects that show how I
            can combine IT skills with user-friendly design. I have a good
            understanding of programming and experience in web development,
            which helps me create both functional and visually appealing
            solutions. Feel free to check out my portfolio to see my work and
            how I focus on detail, creativity, and user experience. If you’d
            like to work together or have any questions, you can reach me at
            <strong> kylacaliwan7@gmail.com</strong> I’m always happy to connect
            with others in tech!
          </p>
          <div className="download-cv">
            <button>
              <a href="/logo.png" download={"logo.png"}>
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
