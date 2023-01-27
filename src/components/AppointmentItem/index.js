// Write your code here

import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {AppointmentDetails, toggleIsStarred} = props
  const {titleInput, dateInput, isStarred, id} = AppointmentDetails
  const appointmentDate = format(new Date(dateInput), 'dd MMMM yyyy, EEEE')
  const imageUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onCLickStarred = () => {
    toggleIsStarred(id)
  }

  return (
    <li className="list-item">
      <div className="Horizontal-container">
        <div className="appoint">
          <h1 className="heading1">{titleInput}</h1>
          <p className="para1">{appointmentDate}</p>
        </div>
        <div>
          <button
            type="button"
            className="button"
            data-testid="star"
            onClick={onCLickStarred}
          >
            <img src={imageUrl} alt="star" className="img-style2" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default AppointmentItem
