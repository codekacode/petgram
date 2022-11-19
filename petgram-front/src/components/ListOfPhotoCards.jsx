import React from 'react'
import PhotoCard from './PhotoCard'
import { ListOfPhotoCard } from './styles'

function ListOfPhotoCards() {
  return (
    <ListOfPhotoCard>
      {[1,2,3,4,5,6].map(id => <PhotoCard id={id} key={id} />)}
    </ListOfPhotoCard>
  )
}

export default ListOfPhotoCards