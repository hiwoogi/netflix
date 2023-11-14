import React, { useEffect, useState } from 'react'
import "./Nav.css"
export default function Nav() {

const [show, setShow] = useState(false);

useEffect(() => {
  window.addEventListener("scroll", ()=>{
    if(window.scrollY>50) {
      setShow(true)
    }else {
      setShow(false)
    }
  })

  return () => {
    window.removeEventListener("scroll", ()=>{

    })
  }
}, [])


  return (
    <nav className={`nav ${show && "nav__black"} `}>
        <img
            alt='Netflix logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
            className='nav__logo'
            //새로고침 window.location.reload()
            onClick={()=>window.location.reload()}
        />
        <img
            alt="User logged"
            src="https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMTgy/MDAxNjA0MjI4ODc1NDMw.Ex906Mv9nnPEZGCh4SREknadZvzMO8LyDzGOHMKPdwAg.ZAmE6pU5lhEdeOUsPdxg8-gOuZrq_ipJ5VhqaViubI4g.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%ED%95%98%EB%8A%98%EC%83%89.jpg?type=w800"
            className="nav__avatar"
        />
    </nav>
  )
}
