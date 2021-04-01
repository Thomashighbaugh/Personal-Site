import React, { Component } from 'react'
import Slider from 'react-slick'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />
}

export default class Gallery extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 7000,
      centerMode: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    }
    return (
      <Slider {...settings}>
        <div>
          <img
            className="box-border p-0 m-0 bg-white border-2 border-gray-500 rounded-2xl dark:bg-gray-900 "
            src="/static/images/twitter-card.png"
            alt="twitter card & banner"
          />{' '}
        </div>
        <div>
          <img
            className="box-border p-0 m-0 bg-white border-2 border-gray-500 rounded-2xl dark:bg-gray-900 "
            src="/static/images/1.png"
            alt="twitter card & banner"
          />{' '}
        </div>
        <div>
          <img
            className="box-border p-0 m-0 bg-white border-2 border-gray-500 rounded-2xl dark:bg-gray-900 "
            src="/static/images/3.png"
            alt="twitter card & banner"
          />{' '}
        </div>
        <div>
          <img
            className="box-border p-0 m-0 bg-white border-2 border-gray-500 rounded-2xl dark:bg-gray-900 "
            src="/static/images/4.png"
            alt="twitter card & banner"
          />{' '}
        </div>
        <div>
          <img
            className="box-border p-0 m-0 bg-white border-2 border-gray-500 rounded-2xl dark:bg-gray-900 "
            src="/static/images/5.jpg"
            alt="twitter card & banner"
          />{' '}
        </div>
        <div>
          <img
            className="box-border p-0 m-0 bg-white border-2 border-gray-500 rounded-2xl dark:bg-gray-900 "
            src="/static/images/6.jpg"
            alt="twitter card & banner"
          />{' '}
        </div>{' '}
        <div>
          <img
            className="box-border p-0 m-0 bg-white border-2 border-gray-500 rounded-2xl dark:bg-gray-900 "
            src="/static/images/7.png"
            alt="twitter card & banner"
          />{' '}
        </div>{' '}
        <div>
          <img
            className="box-border p-0 m-0 bg-white border-2 border-gray-500 rounded-2xl dark:bg-gray-900 "
            src="/static/images/8.jpg"
            alt="twitter card & banner"
          />{' '}
        </div>{' '}
        <div>
          <img
            className="box-border p-0 m-0 bg-white border-2 border-gray-500 rounded-2xl dark:bg-gray-900 "
            src="/static/images/9.jpg"
            alt="twitter card & banner"
          />{' '}
        </div>{' '}
      </Slider>
    )
  }
}
