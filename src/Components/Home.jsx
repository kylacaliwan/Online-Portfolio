import Navbar from "./Navbar";

function Home() {
  const handleMessageClick = () => {
    window.location.href = "mailto:kylacaliwan@example.com"; // Replace with your email
  };

  return (
    <section className="Home">
      <div className="leftdiv slide-left">
        <div className="greet">
          <p className="greeting">Hi There I'm</p>
          <h1 className="username">Kyla Caliwan</h1>
          <h3 className="job">Front-End Developer</h3>
          <p className="desc">
            I'm a front-end developer passionate about building clean,
            responsive, and accessible user interfaces with HTML, CSS,
            JavaScript, and React. <br /> <br /> Let’s create something great
            together.
          </p>
        </div>

        <div className="socmed">
          <a href="https://facebook.com/kylie.caliwan5" target="_blank">
            <img className="fb icon" src="/FB.png" alt="Facebook" />
          </a>
          <a
            href="https://github.com/kylacaliwan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="git icon" src="/Git.png" alt="GitHub" />
          </a>
          <a
            href="https://instagram.com/kylachiiii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="ig icon" src="/IG.png" alt="Instagram" />
          </a>
        </div>

        <button className="msgbtn hover-grow" onClick={handleMessageClick}>
          Message me!
        </button>
      </div>

      <div className="rightdiv slide-right">
        <img className="profile" src="/kylaqt.jpeg" alt="Kyla Caliwan" />
      </div>
    </section>
  );
}

export default Home;
