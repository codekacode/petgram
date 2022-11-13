import React from 'react'
import Category from './Category'
import { Item, List } from './styles'

function ListOfCategories() {
  return (
    <List>
      {[1,2,3].map(cat => <Item><Category/></Item>)}
    </List>
  )
}

export default ListOfCategories