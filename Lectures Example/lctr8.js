import React, {useState, useEffect} from 'react'
import axios from 'axios'

function List() {
  const [data, loadData] = useState(null)
  useEffect(async () => {
    let listItems = await axios(
      'http://imaginaryurl.com/api/listItems'
    )
    loadData(listItems.data)
  }, [])
  
  let listItems   
  if (data) {
    listItems = data.map((item, i) => {
      <p key={i}>{item.name}</p>
    }
  } else {
   listItems = <p>Loading...</p>
  }
  return {listItems}
}