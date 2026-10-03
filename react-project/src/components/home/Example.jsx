import React from 'react'

// export default function Example(props) {
   export default function Example({nom="reda" ,year=2026,isStudent=false,picture}){ 
    // const nom ='reda'
    // const year=2026
  return (
    <div>
       {/* <h1>Boujour {nom}</h1>
      <h3>nous somme en {year}</h3>
      <h3>dans 2 ans ce sera {year}</h3>  */}


      {/* <h1>boujour {props.nom}</h1>
      <h3>nous somme en {props.year} </h3>
      <h4>dans 2 ans ce sera {Number(props.year)+2}</h4> */}

      <h1 className='title' id='title'>boujour {nom}</h1>
      <h3>nous somme en {year} </h3>
      <h4>dans 2 ans ce sera {year+2}</h4>
      <img src={picture} alt="" />
      {isStudent && <h3>she is a student</h3>}
      {isStudent ? <h3>she is a student</h3>:<h3>she is not a student</h3>}

    </div>
  )
}
