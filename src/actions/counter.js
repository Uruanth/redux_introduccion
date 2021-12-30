import { counter as counterTypes } from '../constants/actionsType'

export const incrementarContador = () => async (dispatch) => {
    dispatch({
        type: counterTypes.INCREMENTAR
    })
}

export const decrementarContador = () => async (dispatch) => {
    dispatch({
        type: counterTypes.DECREMENTAR
    })
}

export default{
    incrementarContador,
    decrementarContador
}