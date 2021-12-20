import React from 'react';
import ListEntry from './ListEntry.jsx'


const List = ({ cows }) => (
  <ul>
    {
      cows.map((cow, index) => (
         <li> <ListEntry name={cow.name} key={cow.name} /> </li>
      ))
    }
  </ul>
)

export default List;