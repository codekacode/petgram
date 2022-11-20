import React, { useEffect, useRef, useState } from 'react'
import { Article, PhotoCardButton, PhotoCardImg, PhotoCardImgWrapper } from './styles'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useNearScreen } from '../hooks/useNearScreen';

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"

function PhotoCard({id, likes = 0, src = DEFAULT_IMAGE}) {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, elementRef] = useNearScreen()

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Article ref={elementRef}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <PhotoCardImgWrapper>
              <PhotoCardImg src={src} />
            </PhotoCardImgWrapper>
          </a>
          <PhotoCardButton onClick={() => setLiked(!liked)}>
            <Icon size="32px" />
            {likes} likes!
          </PhotoCardButton>
        </>
      )}
    </Article>
  );
}

export default PhotoCard