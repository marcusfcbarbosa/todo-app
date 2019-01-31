import React  from 'react'

export default props =>(
    <header className="page-heder">
        <h2> {props.name} <small> { props.small }</small> </h2>
    </header>
)