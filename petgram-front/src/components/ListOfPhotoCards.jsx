import React from 'react'
import PhotoCard from './PhotoCard'
import { ListOfPhotoCard } from './styles'

function ListOfPhotoCards() {
  return (
    <ListOfPhotoCard>
      {[1,2,3].map(id => <PhotoCard key={id}/>)}
    </ListOfPhotoCard>
  )
}

export default ListOfPhotoCards