import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    correct: 0,
    wrong: 0,
}
const useranswerslice = createSlice({
    name: 'userans',
    initialState,
    reducers: {
        setcorrect: (state)=>{
            state.correct = state.correct + 1
        },
        setwrong: (state)=>{
            state.wrong = state.wrong + 1
        },
    }
})

export const {setcorrect,setwrong} = useranswerslice.actions
export default useranswerslice.reducer