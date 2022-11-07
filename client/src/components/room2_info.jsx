import React from 'react';

class Room2info extends React.Component {
  state = {
    rooms: "",
    setIsOpen: false,
    lat: null,
    lng: null,
    index: null,
  }
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({rooms: res}))
      .catch(err => console.log(err));
  }

  callApi = async() => {
    const res =await fetch('/api/non_room');
    const body = await res.json();
    let index = (window.location.pathname).slice(15,)
    let select_body = body[index]
    return select_body;
  }
  render() {
    // console.log(this.state.rooms)
    let name = this.state.rooms.r_name;
    let addr = this.state.rooms.r_addr;
    let phone = this.state.rooms.r_phone;
    let fee = this.state.rooms.r_fee;
    let window = this.state.rooms.r_window;
    let kitchen = this.state.rooms.r_kitchen;
    let direction = this.state.rooms.r_direction;
    let option = this.state.rooms.r_option;
    let price = this.state.rooms.r_price;
    let veranda = this.state.rooms.r_veranda;
    let size = this.state.rooms.r_size;

    let option_content = '';

    console.log(this.state.rooms) 
    const option_view = (op) => {
      if(option === 1) {
        option_content += '냉장고, 에어컨, 세탁기, 수납장, 책상'
      }
      if(option === 2) {
        option_content += '냉장고, 와이파이, 에어컨, 세탁기, 수납장, 침대, 책상, 전자레인지'
      }
      return option_content;
    }
    return(
      <ul>
        <li><img src="https://placeimg.com/500/500/any" alt="" /></li>
        <li>원룸이름: {name}</li>
        <li>주소: {addr}</li>
        <li>전화번호: {phone}</li>
        <li>가격(보증금/월세): {price}</li>
        <li>관리비: {fee}</li>
        <li>창문: {window ? '있음':'없음'}</li>
        <li>주방분리: {kitchen ? '예':'아니요'}</li>
        <li>베란다: {veranda > 0 ? '있음':'없음'}</li>
        <li>남향,북향: {direction === 'N' ? '북향':'남향'}</li>
        <li>평수: {size}평</li>
        <li>옵션: {option_view(option)}</li>
      </ul>
    )
  }
}

export default Room2info;