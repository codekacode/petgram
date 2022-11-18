import React, { useEffect, useRef, useState } from 'react'
import { Article, PhotoCardButton, PhotoCardImg, PhotoCardImgWrapper } from './styles'
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"

function PhotoCard({id, likes = 0, src = DEFAULT_IMAGE}) {
  const [show, setShow] = useState(false);

  const elementRef = useRef()

  useEffect(function () {
    import('intersection-observer')
      .then(()=> {
        //esta o no en el viewport
        const observer = new window.IntersectionObserver(
          function(entries){
            const {isIntersecting} = entries[0]
            console.log({isIntersecting})
            if(isIntersecting){
              setShow(true)
              observer.disconnect()
            }
          }
        )
        observer.observe(elementRef.current)
      })
    
  },[elementRef])

  return (
    <Article ref={elementRef}>
      {show && <>
         <a href={`/detail/${id}`}>
        <PhotoCardImgWrapper>
          <PhotoCardImg src={src}/>
        </PhotoCardImgWrapper>
        </a>
        <PhotoCardButton>
          <MdFavoriteBorder size="32px"/>{likes} likes!
        </PhotoCardButton>
      </>}
    </Article>
  )
}

export default PhotoCard