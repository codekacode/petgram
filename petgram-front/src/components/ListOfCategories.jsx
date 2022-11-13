import React from 'react'
import Category from './Category'
import { Item, List } from './styles'
import db from '../db.json'

function ListOfCategories() {
  return (
    <List>
      {db.categories.map(cat => <Item><Category {...cat} /></Item>)}
    </List>
  )
}

export default ListOfCategories