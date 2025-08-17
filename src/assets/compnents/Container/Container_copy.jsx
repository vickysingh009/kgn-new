import React from 'react'
import css from  "./Containerbanner.module.css"

function Containerbanner({children}) {
  return (
    <>
    <div className={`w-full ${css.Container} mx-auto`}>

        {children}

    </div>
    </>
  )
}

export default Containerbanner
