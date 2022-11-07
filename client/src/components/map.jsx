import React from 'react';
import { useState } from 'react';
import { CustomOverlayMap, Map, MapInfoWindow, MapMarker } from 'react-kakao-maps-sdk';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from '../App';
import '../css/map.css'
import Main from './main';


class MapBox extends React.Component {
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
    const res = await fetch('/api/sol_room');
    const body = await res.json();
    return body;
  }
  render() {
    let positions = [];
    for(let i = 0; i < this.state.rooms.length; i++) {
      positions.push({title: this.state.rooms[i].r_name, 
                    latlng: { lat: this.state.rooms[i].lat, lng: this.state.rooms[i].lon},
                    addr: this.state.rooms[i].r_addr,
                    price: this.state.rooms[i].r_price});
    }
    return (
      <div>
        {/* <RemovableCustomOverlayStyle></RemovableCustomOverlayStyle> */}
        <Map // 지도를 표시할 Container
          center={{
            // 지도의 중심좌표
            lat: 36.532155,
            lng: 128.792270,
          }}
          style={{
            // 지도의 크기
            width: "100%",
            height: "3200px",
            position: "fixed"
          }}
          level={3} // 지도의 확대 레벨
          // draggable= { false }
        >
          {positions.map((position, index) => (
            <MapMarker
              key={index}
              position={position.latlng} // 마커를 표시할 위치
              image={{
                src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
                size: {
                  width: 24,
                  height: 35
                }, // 마커이미지의 크기입니다
              }}
              clickable={true}
              title={position.title} 
              addr={position.addr}
              price={position.price}
              onClick={() => {
                this.setState({setIsOpen: true})
                this.setState({lat: position.latlng.lat})
                this.setState({lng: position.latlng.lng})
                this.setState({index: index})
              }}
            >
            {(this.state.setIsOpen && this.state.index === index) && (
              <CustomOverlayMap position={position.latlng} zIndex={10}>
                <div className="wrap">
                  <div className="info">
                    <div className="title">
                      {position.title}
                      <div
                        className="close"
                        onClick={() => this.setState({setIsOpen: false})}
                        title="닫기"
                      ></div>
                    </div>
                    <div className="body">
                      <div className="img">
                        <img
                          src="//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/cfile/2170353A51B82DE005"
                          width="73"
                          height="70"
                          alt={position.title}
                        />
                      </div>
                      <div className="desc">
                        <div className="ellipsis">
                          경상북도 안동시 {position.addr}
                        </div>
                        <div className="jibun ellipsis">
                          보증금/계약금: {position.price}
                        </div>
                        <div>
                          <Link to={`/room/sol/:r_num${this.state.index}`}><p>상세보기</p></Link>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <br /> 
              </CustomOverlayMap>
            )}
            </MapMarker>
          ))}
        </Map>
        </div>
    )
  }
}

export default MapBox;