import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerGlobal } from '../store/slices/trainer.slice'

const Home = () => {

    const dispatch = useDispatch()
    const navigator = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainerGlobal(e.target.name.value.trim()))
        e.target.name.value = ''
        navigator('/pokedex')
    }


  return (
    <div className='wallpaper__ask'>
      <br />
        <img className='img__initial' src="/Home/pokmeon.png" alt="" />
        <br />
        <br />
        <br />
        <h1 className='hello'>Hi Trainer</h1>
        <p className='user__name'>Give me your name to start</p>
        <br />
        <form onSubmit={handleSubmit}>
            <input className='input__name' id='name' type="text" />
            <br />
            <br />
            <button className='pokeball'></button>
        </form>
    </div>
  )
}

export default Home