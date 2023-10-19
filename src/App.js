import React, { useState } from 'react'
import { Container } from "react-bootstrap";
import { personData } from './components/data';
import DatesCount from './components/DatesCount';
import DatesList from './components/DatesList';
import DatesAction from './components/DatesAction';

const App = () => {

  const [person, setPerson] = useState(personData);

  // Cacher tout les rendez-vous
  const disappearAllDates = () => {
    setPerson([])
  }
  // Afficher tout les rendez-vous
  const displayAllDates = () => {
    setPerson(personData)
  }

  return (
    <div className='font color-body'>
      <Container className='py-5'>
        <DatesCount person={person} />
        <DatesList person={person} />
        <DatesAction dispalyOn={displayAllDates} dispalyOff={disappearAllDates} />
      </Container>
    </div>
  )
}

export default App;