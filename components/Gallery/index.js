import React, { Component } from 'react'
import Slider from 'react-slick'

function SimpleNextArrow(props) {
  const { className, style, onClick } = props
  return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />
}

function SimplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
      }}
      onClick={onClick}
    />
  )
}

export default class Gallery extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 2220,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 1900,
      centerMode: true,
      nextArrow: <SimpleNextArrow />,
      prevArrow: <SimplePrevArrow />,
    }
    return (
      <Slider {...settings}>
        <div>
          <img
            className="box-border p-0 m-0 bg-white border-2 border-gray-500 rounded-2xl dark:bg-gray-900 aspect-h-9 aspect-w-16"
            src="/static/images/twitter-card.png"
            alt="twitter card & banner"
          />{' '}
        </div>{' '}
        <div>
          <img
            className="box-border p-0 m-0 bg-white border-2 border-gray-500 rounded-2xl dark:bg-gray-900 aspect-h-9 aspect-w-16"
            src="/static/images/twitter-card-variant01.png "
            alt="twitter card & banner"
          />{' '}
        </div>{' '}

		<div>
          <img
            className="box-border p-0 m-0 bg-white border-2 border-gray-500 rounded-2xl dark:bg-gray-900 aspect-h-9 aspect-w-16"
            src="/static/images/1.png"
            alt="twitter card & banner"
          />{' '}
        </div>{' '}
		<div>
          <img
            className="box-border p-0 m-0 bg-white border-2 border-gray-500 rounded-2xl dark:bg-gray-900 aspect-h-9 aspect-w-16"
            src="/static/images/3.png"
            alt="twitter card & banner"
          />{' '}
        </div>{' '}
		<div>
          <img
            className="box-border p-0 m-0 bg-white border-2 border-gray-500 rounded-2xl dark:bg-gray-900 aspect-h-9 aspect-w-16"
            src="/static/images/4.png"
            alt="twitter card & banner"
          />{' '}
        </div>{' '}
      </Slider>
    )
  }
}
