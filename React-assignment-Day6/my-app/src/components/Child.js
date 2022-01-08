import React from 'react'

const Child = (props) => {
  console.log(props.data)
  return (
    <div className="container">
      {props.data &&
        props.data.map((item, key) => {
          return (
            <>
              {/* <div className="img-container">
                <img src={item.img} />
              </div> */}
              <img src={item.img} />
              <div class="info">
                <span class="number">{item.nickname}</span>
                <h3 class="name">{item.name}</h3>
              </div>
            </>
          )
        })}
    </div>
  )
}

export default Child
