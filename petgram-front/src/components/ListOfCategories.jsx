import React, { useEffect, useState } from 'react'
import Category, { CategorySkeleton } from './Category'
import { Item, List } from './styles'

// custom hook 
function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(function(){
    fetch("https://petgram-server-edsf8xpy2.now.sh/categories")
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
    }, [])
    return {categories, loading}
}

function ListOfCategories() {
  const {categories, loading} = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);
  
  useEffect(function(){
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener("scroll", onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map(cat => loading ? <CategorySkeleton/> :<Item key={cat.id} ><Category {...cat} /></Item>)}
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