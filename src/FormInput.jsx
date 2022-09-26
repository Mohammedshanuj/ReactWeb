import React, { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function FormInput() {
    const [err, setErr] = useState(false)
    const [errMsg, setErrMsg] = useState("")
    const [userName, setUserName] = useState("")
    const refname = useRef()
    useEffect(() => {
        refname.current.focus()
    })


    const onBlurChange = () => {
        if (userName === "")
            setErr(true)
        setErrMsg("Input required")

    };
    const onInputChange = (e, type) => {
        if (e.type === 'change' && e.type === 'un')
            setUserName(e.target.value)
    }
    return (
        <div style={{ marginTop: "50px" }}>
            <div>
                <label htmlFor="">Username:
                    <input
                        type="text"
                        aria-label='username'
                        ref={refname}
                        onBlur={onBlurChange}
                        name="userName"
                        // value={userName}
                        onChange={(e) => onInputChange(e, 'un')}


                    />
                </label><br /><br />
                <label htmlFor="">Password:
                    <input
                        type="password"
                        aria-label='password'
                    />
                </label>
            </div>
            <p>{errMsg}</p>
        </div>
    )
}

export default FormInput
