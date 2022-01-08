import react, { useEffect, useState } from 'react'
import axios from 'axios'
import Child from './Child'

const HookAPI = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('https://www.breakingbadapi.com/api/characters')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Child data={data} />
    </>
  )
}

export default HookAPI
