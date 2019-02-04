import React  from 'react'

export default props =>{
    const renderRows =() =>{
        //const list = props.list || []
        return(
            <tr>
                <td>Ok</td>
            </tr>
        )
    }
    return (
        <table className="table">
            <thead>
                <tr>Descrição</tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>   
    )

}

