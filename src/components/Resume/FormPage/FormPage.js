import './FormPage.scss'
import { Outlet, useLocation } from 'react-router-dom'
import Recommendations from '../Recommendations/Recommendations'

function FormPage() {
  const location = useLocation()

  return (
    <section className="form-page">
      <Outlet />
      {location.pathname === '/resume/result' ? '' : <Recommendations />}
    </section>
  )
}

export default FormPage
