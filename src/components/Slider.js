import React, { useState, useEffect } from 'react'
import clothes from '../asset/images/clothes.jpg'
import neckties from '../asset/images/neckties.jpg'
import woman from '../asset/images/woman.jpg'

const Slider = () => {
  const [slide, setSlide] = useState('0')

  const onClickArrowRight = () => {
    clearTimeout(time)
    if (slide > -200) {
      setSlide(slide - 100)
    } else {
      setSlide(0)
    }
  }

  const onClickArrowLeft = () => {
    clearTimeout(time)
    if (slide > -1) {
      setSlide(-200)
    } else {
      setSlide(slide + 100)

    }
  }

  let time;
  const sliderTimeOut = () => {
    time = setTimeout(() => {
      if (slide > -200) {
        setSlide(slide - 100)
      } else {
        setSlide(0)
      }
    }, 5000)
  }

  useEffect(() => {
    sliderTimeOut()
  }, [slide])

  return (
    <div className="slider" >
      <div className="wrapper" style={{ transform: `translateX(${slide}vw)` }}>
        <div className="add">
          <h1>Open soon</h1>
          <img src={clothes} alt="clothes" />
        </div>
        <div className="add">
          <h1>50% discount for neckties</h1>
          <img src={neckties} alt="neckties" />
        </div>
        <div className="add">
          <h1>Discount for Woman</h1>
          <img src={woman} alt="woman" />
        </div>
      </div>
      <i className="fas fa-arrow-right" onClick={onClickArrowRight}></i>
      <i className="fas fa-arrow-left" onClick={onClickArrowLeft}></i>
    </div>
  )
}

export default Slider
