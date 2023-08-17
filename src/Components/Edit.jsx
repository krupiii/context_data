/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import Style from './add.module.css'
import { Link, useParams } from 'react-router-dom'
import todo from './Context/Todocontext'

const Edit = () => {
    const { id } = useParams()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")
    const [hobby, setHobby] = useState("")
    const [select, setSelect] = useState("")
    const [gender, setGender] = useState("")

    const savedata = useContext(todo)
    useEffect(() => {
        const xyz = savedata.allData[id]
        setName(xyz.name)
        setEmail(xyz.email)
        setNumber(xyz.number)
        setPassword(xyz.password)
        setHobby(xyz.hobby)
        setSelect(xyz.select)
        setGender(xyz.gender)
    }, [])

    const updateDta = () => {
        const obj = {
            name,
            email,
            number,
            password,
            hobby,
            select,
            gender
        }
        savedata.allData[id] = obj;
        savedata.setAlldata(savedata.allData);
    }
    return (

        <center>
            <div className={ Style.main }>
                <div className="fild">

                    <h1>Input Form</h1>
                    <div className={ Style.inputbox }>
                        <label
                            htmlFor="">Name :
                            <input
                                type="text"
                                value={ name }
                                name='Name'
                                onChange={ (e) => setName(e.target.value) }
                                required="required" />
                        </label>
                        <br />

                        <label htmlFor="">Email :
                            <input type="email"
                                value={ email }
                                name='Email'
                                onChange={ (e) => setEmail(e.target.value) }
                            />
                        </label><br />

                        <label htmlFor="">Number :
                            <input type="number"
                                value={ number }
                                name='Number'
                                onChange={ (e) => setNumber(e.target.value) } />
                        </label><br />

                        <label htmlFor="">Password :
                            <input type="password"
                                value={ password }
                                name='Password'
                                onChange={ (e) => setPassword(e.target.value) } />
                        </label><br />

                        <label htmlFor="">Hobby :
                            <input type="checkbox"
                                name='Hobby'
                                value='Music'
                                onChange={ (e) => setHobby(e.target.value) } />Music
                            <input type="checkbox"
                                name='Hobby'
                                value='cricket'
                                onChange={ (e) => setHobby(e.target.value) } />cricket
                            <input type="checkbox"
                                name='Hobby'
                                value='dance'
                                onChange={ (e) => setHobby(e.target.value) } />Dance

                        </label><br />

                        <label for="cars">Choose a  courses:</label>
                        <select name="cars"
                            onChange={ (e) => setSelect(e.target.value) }>
                            <option value="Choose">Choose</option>
                            <option value="full stack">Full stack</option>
                            <option value="flutter ">Flutter </option>
                            <option value="web design">Web design</option>
                        </select><br />

                        <label htmlFor="">Gender :
                            <input type="radio"
                                value='male'
                                checked={ gender === 'male' }
                                onChange={ (e) => setGender(e.target.value) }
                                name='gender'
                            />
                            male
                            <input required
                                type="radio"
                                value='female'
                                checked={ gender === 'female' }
                                onChange={ (e) => setGender(e.target.value) }
                                name='gender' />Female
                        </label><br />

                        <div className='btnbox'>
                            <button type='button' className='btn btn-outline-info m-5' onClick={ updateDta }>Update</button>
                            <Link to={ '/list' }>
                                <button type='button' className='btn btn-outline-danger m-5'>Close</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </center>


    )
}

export default Edit