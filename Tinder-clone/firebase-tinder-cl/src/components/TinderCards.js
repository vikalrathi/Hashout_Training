import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import db from '../firebase'

const TinderCards = () => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    db.collection('people').onSnapshot((snapshot) => {
      setPeople(snapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  const swiped = (direction, nameToDelete) => {
    console.log('receiving ' + nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!!')
  }

  return (
    <div className="tinderCards">
      <div className="tinderCards__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
              {console.log('person :: ', person)}
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards
