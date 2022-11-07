import React from 'react';

class PlaceInfo extends React.Component {
  state = {
    place: "",
    setIsOpen: false,
    lat: null,
    lng: null,
    index: null,
    type: null,
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({place: res}))
      .catch(err => console.log(err));
  }

  callApi = async() => {
    const loc = (window.location.pathname)
    const type = ((loc.split('/'))[2].split(':'))
    const res = await fetch('/api/and_'+type[0]);
    this.setState({type: type[0]})
    const body = await res.json();
    let index = type[1].slice(5,);
    let select_body = body[index]
    return select_body;
  }
    
  render() {
    return(
      <ul>
        <li><img src="https://placeimg.com/500/500/any" alt="" /></li>
        <li>원룸이름: {this.state.place.r_name}</li>
        <li>주소: {this.state.place.r_addr}</li>
        {(this.state.type !== "play" && <li> 전화번호: {this.state.place.r_phone}</li>)}
        <li>구분: {this.state.place.r_sort}</li>
        {(this.state.type === "food" && <li> 대표메뉴: {this.state.place.r_menu}</li>)}
        {(this.state.type === "play" && <li> 이용요금: {this.state.place.r_fee}</li>)}
      </ul>
    )
  }
}

export default PlaceInfo;