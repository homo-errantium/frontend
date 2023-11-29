import './Footer.scss'
import ResumeLogo from '../../img/resume.svg'
import PlusLogo from '../../img/plus-logo.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__flex-container">
        <div className="footer__logo">
          <img alt="резюме" src={ResumeLogo} className="footer__logo-resume" />
          <img alt="плюс" src={PlusLogo} className="footer__logo-plus" />
        </div>
        <div className="footer__contacts">
          <span className="footer__contact">8 (800) 555 35 35</span>
          <span className="footer__contact">pochta@gmail.com</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
