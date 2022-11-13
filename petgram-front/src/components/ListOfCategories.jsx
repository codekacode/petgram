import React, { useEffect, useState } from 'react'
import Category from './Category'
import { Item, List } from './styles'

function ListOfCategories() {
  const [categories, setCategories] = useState([]);
  const [showFixed, setShowFixed] = useState(false);

  useEffect(function(){
    fetch("https://petgram-server-edsf8xpy2.now.sh/categories")
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])
  
  useEffect(function(){
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener("scroll", onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : '' }>
      {categories.map(cat => <Item key={cat.id} ><Category {...cat} /></Item>)}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export default ListOfCategories