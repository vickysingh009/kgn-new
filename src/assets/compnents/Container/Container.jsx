import React from 'react'
import css from  "./Container.module.css"

function Container({children}) {
  return (
    <>
    <div className={`w-full ${css.Container} mx-auto`}>

        {children}

    </div>
    </>
  )
}

export default Container
