import React from 'react';
// import image1 from './images/거성원룸/거성원룸_3.jpg'
// import { imagelist } from './image.js';

class ImageSlide extends React.Component {
  render () {
        // let content = '';
        // let name = this.props.name;
        // console.log(imagelist);
        // console.log(image1)
        console.log(process.env)
        let img = [];
        console.log(this.props.num)
        let num = this.props.num;
        function imgCreate() {
          for(let i = 0; i < 5; i++) {
            img.push(<img src={process.env.PUBLIC_URL + `/images/${num}/${i+1}.jpg`} alt="" />)
          }
          return img;
        }
        return (
          <div>
            {imgCreate()}
          </div>
        )
    }
}

export default ImageSlide;