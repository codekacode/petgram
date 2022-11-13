import React, { useEffect, useState } from 'react'
import Category from './Category'
import { Item, List } from './styles'

function ListOfCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(function(){
    fetch("https://petgram-server-edsf8xpy2.now.sh/categories")
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])
  return (
    <List>
      {categories.map(cat => <Item><Category {...cat} /></Item>)}
    </List>
  )
}

export default ListOfCategories