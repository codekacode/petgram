import React from 'react'
import { Anchor, ContainerCategorySkeleton, Image, Title } from './styles';

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

export const CategorySkeleton = props => {
  console.log(props)
  return(
    <ContainerCategorySkeleton>
      <Image light={props.light}></Image>
      <Title light={props.light}></Title>
    </ContainerCategorySkeleton>
  )
}

function Category({cover = DEFAULT_IMAGE, path, emoji = "?"}) {
  return(
    <Anchor href={path}>
      <Image src={cover} />
      {emoji}
    </Anchor>
  ) 
}

export default Category

