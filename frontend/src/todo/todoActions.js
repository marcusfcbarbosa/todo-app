//ActionCreator, representam os eventos que sao disparados no componente
//Lembrando que toda ActionCreator tera um atributo chamado type
//Por padrão o retorno de um action creator é um payload
//Após isso, necessita fazer um binding com o compoente que no qual o evento será disparado
export const changeDescription = (event) => ({
    type:'DESCRIPTION_CHANGED',
    payload: event.target.value
})