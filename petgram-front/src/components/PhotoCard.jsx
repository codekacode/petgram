import React from 'react'
import { PhotoCardButton, PhotoCardImg, PhotoCardImgWrapper } from './styles'
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"

function PhotoCard({id, likes = 0, src = DEFAULT_IMAGE}) {
  return (
    <div>
      <a href={`/detail/${id}`}>
        <PhotoCardImgWrapper>
          <PhotoCardImg src={src}/>
        </PhotoCardImgWrapper>
      </a>
      <PhotoCardButton>
        <MdFavoriteBorder size="32px"/>{likes} likes!
      </PhotoCardButton>
    </div>
  )
}

export default PhotoCard