import React from 'react'
import ColourCard from './ColourCard'
import SizeCard from './SizeCard'
export default class QuizCard extends React.Component {
  render () {
    return (
      <>
        <div className='wraper'></div>
        <div className='box'>
          <div> <ColourCard /> </div>
          <div> <SizeCard /> </div>
          <input className="btn-submit" name="btn-submit" onClick={this.handleClick} type="submit" value="Submit" />
        </div>
      </>
    )
  }
}