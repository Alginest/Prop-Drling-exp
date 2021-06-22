import React, { useState } from 'react'
import { data } from '../../../data'

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data)
  const handleRemove = (id) => {
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <section>
      <h3>prop Driling</h3>
      <List people={people} handleRemove={handleRemove} />
    </section>
  )
}
const List = ({ people, handleRemove }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SignlePerson
            key={person.id}
            {...person}
            handleRemove={handleRemove}
          />
        )
      })}
    </>
  )
}
const SignlePerson = ({ id, name, handleRemove }) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button className='btn' onClick={() => handleRemove(id)}>
        Remove
      </button>
    </div>
  )
}
export default PropDrilling
