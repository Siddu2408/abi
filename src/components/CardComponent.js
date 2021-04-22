import React from 'react';
import { Card, Avatar } from 'antd';
import { EnvironmentOutlined, SlackOutlined } from '@ant-design/icons';

export default function CardComponent(props) {

  function handleClick(e) {
    e.preventDefault();
    props.onSelect(props.doctor)
  }

  return (
    <div className={`${'card-container'}  ${(props.doctor._id === props.selected._id ? 'card-active': '')}`}>
      <Card style={{ width: 275}} onClick={handleClick}>
        <div className="card-content">
          <Avatar size = {50} src={props.doctor.picture} />
          <div className="card-info">
            <p className="doctor-name">{props.doctor.name}</p>
            <p className="doctor-id">{props.doctor.doctorId}</p>
          </div>
        </div>
        <div className="location-container">
          <div> <EnvironmentOutlined /><span className="location">{props.doctor.city}, {props.doctor.location}</span></div>
          <div> <Avatar icon={<SlackOutlined />} /></div>      
        </div>
      </Card>
    </div>
  )
}
