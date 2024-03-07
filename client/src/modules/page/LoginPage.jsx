import React, { useState } from 'react'
import Login from '../../components/Login/Login'
import Register from '../../components/Login/Register'
import ModalView from '../../components/Modal/ModalView'

function LoginPage() {
    const [page, setPage] = useState(false)
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <button onClick={()=>setOpen(!open)}>Modal</button>
            <ModalView open={open} handleClose={handleClose}>
                <div className="loginView">
                    {page ? <Login login={page} setLogin={setPage} /> :
                        <Register login={page} setLogin={setPage}/>}
                </div>
            </ModalView>
        </div>
    )
}

export default LoginPage
