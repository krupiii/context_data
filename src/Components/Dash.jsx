import React from 'react'
import { Link } from 'react-router-dom'

const Dash = () => {
    return (
        <>


            <center>

                <Link to={ '/add' }>
                    <button type="button" class="btn btn-outline-light">AddData +</button>
                </Link>

                <Link to={ '/list' }>
                    <button type="button" class="btn btn-outline-light m-5">= ListData</button>
                </Link>

            </center>

        </>
    )
}

export default Dash