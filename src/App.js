import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Jitsi from "react-jitsi";


function App() {
  const [showForm, setShowForm] = useState(false);
  const [meetingName, setMeetingName] = useState('');
  const [userName, setUserName] = useState('');
  const [meetingDate, setMeetingDate] = useState('');
  const [participant, setParticipant] = useState('');
  const [participants, setParticipants] = useState([]);
  const [meetings, setMeetings] = useState([]);
  const [editedMeetingIndex, setEditedMeetingIndex] = useState(null);
  const [callIsActive, setCallIsActive] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
    setEditedMeetingIndex(null); // Reset the edited meeting index when toggling the form
  };

  const handleMeetingNameChange = (event) => {
    setMeetingName(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleMeetingDateChange = (event) => {
    setMeetingDate(event.target.value);
  };

  const handleParticipantChange = (event) => {
    setParticipant(event.target.value);
  };

  const handleAddParticipant = () => {
    if (participant.trim() === '') {
      alert('Please enter a valid participant name.');
      return;
    }

    setParticipants([...participants, participant]);
    setParticipant('');
  };

  const handleAddMeeting = () => {
    if (!meetingName || !userName || !meetingDate || participants.length === 0) {
      alert('Please fill in all the details and add at least one participant before adding a meeting.');
      return;
    }

    const newMeeting = {
      meetingName,
      userName,
      meetingDate,
      participants,
    };

    if (editedMeetingIndex !== null) {
      // If we are editing a meeting, update the existing meeting
      const updatedMeetings = [...meetings];
      updatedMeetings[editedMeetingIndex] = newMeeting;
      setMeetings(updatedMeetings);
    } else {
      // If it's a new meeting, add it to the list
      setMeetings([...meetings, newMeeting]);
    }

    setMeetingName('');
    setUserName('');
    setMeetingDate('');
    setParticipants([]);
    setEditedMeetingIndex(null); // Reset the edited meeting index after adding/editing a meeting
  };

  const handleJoinMeeting = (meetingName) => {
    console.log(`You have joined the meeting: ${meetingName}`);
    setCallIsActive(!callIsActive);
  };

  const handleEditMeeting = (index) => {
    const meetingToEdit = meetings[index];
    setMeetingName(meetingToEdit.meetingName);
    setUserName(meetingToEdit.userName);
    setMeetingDate(meetingToEdit.meetingDate);
    setParticipants(meetingToEdit.participants);
    setEditedMeetingIndex(index);
    setShowForm(true);
  };

  const handleAPI = async (api) => {
    api.addEventListener("videoConferenceJoined", async () => {
      // let data = {num :  await api.getNumberOfParticipants()} 
      // await axios.post('/api/set-number-of-participants', data)
      console.log("ROOMS INFO",api.getRoomsInfo())
    });
    let check = true
    api.addEventListener('videoConferenceLeft',  function ()  {
      if ( check === true){
        console.log("ROOMS INFO",api.getRoomsInfo())

        let data = {num :  api.getNumberOfParticipants() * -1} 
        console.log("PARTICIPANT LEFT",data)
        // axios.post('/api/decrease-number-of-participants',data)
        check =false
        setCallIsActive(false);

      }
    })  
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <button className="btn btn-primary btn-lg rounded-circle mb-3" onClick={toggleForm}>
        <span className="plus">+</span>
      </button>
      {showForm ? (
        <form>
          <div className="form-group">
            <label htmlFor="userName">Your Name:</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              value={userName}
              onChange={handleUserNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="meetingName">Meeting Name:</label>
            <input
              type="text"
              className="form-control"
              id="meetingName"
              value={meetingName}
              onChange={handleMeetingNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="meetingDate">Date of Meeting:</label>
            <input
              type="date"
              className="form-control"
              id="meetingDate"
              value={meetingDate}
              onChange={handleMeetingDateChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="participant">Participants:</label>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                id="participant"
                value={participant}
                onChange={handleParticipantChange}
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button" onClick={handleAddParticipant}>
                  Add Participant
                </button>
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-primary" onClick={handleAddMeeting}>
            {editedMeetingIndex !== null ? 'Save Changes' : 'Add Meeting'}
          </button>
        </form>
      ) : (
        <div className="label h5">Create Meeting</div>
      )}

      {meetings.length > 0 && (
        <div className="mt-5">
          <h3>Meetings Added:</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Meeting Name</th>
                <th>Your Name</th>
                <th>Date of Meeting</th>
                <th>Participants</th>
                <th>Join</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {meetings.map((meeting, index) => (
                <tr key={index}>
                  <td>{meeting.meetingName}</td>
                  <td>{meeting.userName}</td>
                  <td>{meeting.meetingDate}</td>
                  <td>{meeting.participants.join(', ')}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => handleJoinMeeting(meeting.meetingName)}
                    >
                      Join
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => handleEditMeeting(index)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}


      {callIsActive ? (
        <div>VIDEO CALL PART
        <Jitsi
        roomName={"Apple"}
        displayName={"guy"}
        onAPILoad={handleAPI}
        containerStyle={{ width: '800px', height: '600px' }}
        // onMeetingJoined={(url) => handleMeetingJoined(url)}

        config={{
          prejoinPageEnabled: false,
          disableDeepLinking: true,
          transcribingEnabled: true,
          startWithAudioMuted: true,
          startWithVideoMuted: true,
          p2p: true,
        }}
        interfaceConfig={{
          APP_NAME: "Video Chat App",
          TOOLBAR_BUTTONS: ["microphone", "camera", "chat", "hangup"],
          TOOLBAR_ALWAYS_VISIBLE: true,
        }}
      />
        </div>

      ) : (
        <div>OTHER PART</div>
      )}

    </div>
  );
}

export default App;

// <div className="App">
//   {   condition === 'A' ? <ComponentA /> 
//     : condition === 'B' ? <ComponentB />
//     : condition === 'C' ? <ComponentC />
//     : <DefaultComponent />
//   }
// </div>