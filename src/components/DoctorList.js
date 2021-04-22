import React, { Component } from 'react';
import CardComponent from './CardComponent';
import DoctorDetails from './DoctorDetails';
import Select from 'react-select';
import Header from './Header';

const options = [
  { value: 'location', label: 'Location' },
  { value: 'language', label: 'Language' },
  { value: 'Hospital', label: 'Hospital' },
];


class DoctorList  extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      detailsEnabled: false,
      selectDoctorDetails: {},
      selectedOption: {},
      doctorDate: props.data,
      search: null
    };
  }

 componentDidMount() {
   const {data} = this.props;
   const sorted = data.sort((a,b) => (a[options[0].value] > b[options[0].value]) ? 1 : ((b[options[0].value] > a[options[0].value]) ? -1 : 0))
   this.setState({ selectedOption: options[0], doctorDate: sorted  });
 }

 selectDoctorHandler(doctor){
  this.setState({selectDoctorDetails: doctor, detailsEnabled: true})
 }

 onSearchFilter(value){
  this.setState({search: value})
 }

 handleChange = selectedOption => {
  const {doctorDate} = this.state;
  const sorted = doctorDate.sort((a,b) => (a[selectedOption.value] > b[selectedOption.value]) ? 1 : ((b[selectedOption.value] > a[selectedOption.value]) ? -1 : 0))
  this.setState({ selectedOption: selectedOption, doctorDate: sorted  });
};




 render() {
   const { detailsEnabled, selectDoctorDetails, selectedOption, doctorDate, search } = this.state;
    return(
      <div>
        <Header onSearchHandler={this.onSearchFilter.bind(this)}></Header>
        <div className="select-container"> <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        /></div>
        
        <div className="card-list-container"> 
          <div className="card-list">
            {doctorDate.filter((data) => {
              if(search === null) return data;
              else if(data.name.toLowerCase().includes(search.toLowerCase()) || data.location.toLowerCase().includes(search.toLowerCase()) || data.Hospital.toLowerCase().includes(search.toLowerCase())){
                return data
              }
            }).map((doctor) => (
              <CardComponent key={doctor._id} selected={selectDoctorDetails} onSelect={this.selectDoctorHandler.bind(this)} doctor={doctor}></CardComponent>
            ))}
          </div>
          {detailsEnabled ? <div className="doctor-deatils-content"><DoctorDetails doctor={selectDoctorDetails}></DoctorDetails></div>: <></>}
        </div>
      </div>
      )
   }
 }


export default DoctorList;