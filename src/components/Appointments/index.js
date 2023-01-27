import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    appointmentsList: [],
    titleInput: '',
    dateInput: '',
    isStarredBtn: false,
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state
    const newAppointment = {
      id: uuidv4(),
      titleInput,
      dateInput,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      titleInput: '',
      dateInput: '',
    }))
  }

  onClickisStarredBtn = () => {
    this.setState(prevState => ({isStarredBtn: !prevState.isStarredBtn}))
  }

  toggleIsStarred = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  onUpdateTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onUpdateDate = event => {
    this.setState({dateInput: event.target.value})
  }

  render() {
    const {titleInput, dateInput, appointmentsList, isStarredBtn} = this.state
    const StarredList = appointmentsList.filter(
      eachItem => eachItem.isStarred === true,
    )

    const displayList = isStarredBtn ? StarredList : appointmentsList
    console.log(displayList)
    return (
      <div className="linear-background">
        <div className="white-background">
          <div className="horizontal-style">
            <form className="form-container" onSubmit={this.onAddAppointment}>
              <h1 className="heading">Add Appointment</h1>
              <label htmlFor="titleInput" className="label-style">
                TITLE
              </label>
              <input
                type="search"
                placeholder="Title"
                className="input-style"
                id="titleInput"
                onChange={this.onUpdateTitle}
                value={titleInput}
              />
              <label htmlFor="dateInput" className="label-style">
                DATE
              </label>
              <input
                type="date"
                placeholder="dd/mm/yyyy"
                className="input-style"
                id="dateInput"
                onChange={this.onUpdateDate}
                value={dateInput}
              />
              <button type="submit" className="Add-button">
                Add
              </button>
            </form>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="img-style"
              />
            </div>
          </div>
          <hr />
          <div className="Horizontal-container2">
            <div className="horizontal-style2">
              <div>
                <h1 className="paragraph">Appointments</h1>
              </div>
              <div>
                <button
                  className="starred-button"
                  type="button"
                  onClick={this.onClickisStarredBtn}
                >
                  Starred
                </button>
              </div>
            </div>
            <ul className="lists-container">
              {displayList.map(eachAppointment => (
                <AppointmentItem
                  AppointmentDetails={eachAppointment}
                  key={eachAppointment.id}
                  toggleIsStarred={this.toggleIsStarred}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
