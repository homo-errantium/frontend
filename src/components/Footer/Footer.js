import './Footer.scss'

function Footer() {
  const date = new Date()
  const thisYear = date.getFullYear()
  return (
    <footer className="footer">
      <p className="footer__author">&copy; {thisYear}. Яндекс.Practicum</p>
    </footer>
  )
}

export default Footer
