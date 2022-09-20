import React, {Fragment} from 'react'

const ItemListContainer = (greeting) => {
  return (
    <Fragment>
        <h2 style={{color:"red", height:"50px"}}>Hola {greeting.persona}</h2>
    </Fragment>
  )
}

export default ItemListContainer