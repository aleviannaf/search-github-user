import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface HistoryState {
    search: string
    timestamp: string
}

const initialState: HistoryState[] = []

const historySlice =  createSlice({
    name: 'history',
    initialState,
    reducers: {
        historyAdded: {
            reducer(state, action: PayloadAction<HistoryState>) {
                state.unshift(action.payload)
            },
            prepare(search: string) {
                return {
                    payload: {
                        search,
                        timestamp: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
                    }
                }
            }
        },
        loadFromLocalStorage: () => {
            const dataFromLocalStorage = JSON.parse(localStorage.getItem('historic-search') || '[]');
            return dataFromLocalStorage;
          },
    }
})

export const { historyAdded, loadFromLocalStorage} = historySlice.actions
export default historySlice.reducer