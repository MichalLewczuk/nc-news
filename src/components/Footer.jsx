import githubLogo from "../img/GitHub-Mark-32px.png";

function Footer() {
  return (
    <footer className="footer">
      Created by Michal Lewczuk 2022
      <a href="https://github.com/MichalLewczuk" target="_blank">
        <img className="git-hub-logo" src={githubLogo} alt="github logo" />
      </a>
    </footer>
  );
}

export default Footer;
