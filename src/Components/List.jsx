import React, { useContext } from 'react'
import Style from './list.module.css'
import { Link } from 'react-router-dom'
import todo from './Context/Todocontext'

const List = () => {
    const savedata = useContext(todo)

    const deleteData = (id) => {
        savedata.setAlldata(savedata.allData.filter((ele, index) => index !== id))
    }


    return (
        <div className={ Style.main }>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Hobby</th>
                        <th>Select</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        savedata.allData.map((ele, index) => {

                            return (
                                <tr key={ index }>
                                    <th>{ index + 1 }</th>
                                    <th>{ ele.name }</th>
                                    <th>{ ele.email }</th>
                                    <th>{ ele.number }</th>
                                    <th>{ ele.hobby }</th>
                                    <th>{ ele.select }</th>
                                    <th>{ ele.gender }</th>

                                    <th>
                                        <button onClick={ () => deleteData(index) }>Delete</button>

                                        <Link to={ `/edit/${index}` }>
                                            <button>Edit</button>
                                        </Link>
                                    </th>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
            <Link to={ "/" }>
                <button type="button" class="btn btn-outline-warning">Cancle</button>
                <button type='button' className='btn btn-outline-danger'>Close</button>
            </Link>
        </div>


    )
}

export default List