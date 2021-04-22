import React from 'react';
import {  Avatar } from 'antd';
import "../App.scss"

export default function DoctorDetails(props) {
  return (
    <div className="doctor-details-container">
      <div>
        <Avatar size = {90} src={props.doctor.picture} />
        <div className="card-info">
          <h2 className="doctor-name">{props.doctor.name}</h2>
          <p className="doctor-id">{props.doctor.doctorId}</p>
          <p className="location">{props.doctor.city}, {props.doctor.location}</p>
        </div>
      </div>
      <p>{props.doctor.about}</p>
    </div>
  )
}
