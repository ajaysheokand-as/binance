 import { createContext, useState} from "react";
 export  const historyContext =  createContext()

export default function HistoryContextProvider({children}){
   const [withdrawals ,setWithdrawals]  = useState([ { id: 1, currency: 'USDT', amount: '-48', timestamp: '2025-03-30 11:36:04', status: 'Completed' },{ id: 1, currency: 'TRX', amount: '-48', timestamp: '2025-03-30 11:36:04', status: 'Completed' },])
    const [totalValue , setTotalValue] = useState(136.963448)
    const [address, setAddress] = useState("");
    const [amount, setAmount] = useState("");
return(
    <historyContext.Provider value={{withdrawals , setWithdrawals , totalValue ,address ,setAddress , amount ,setAmount }}>
        {children}
    </historyContext.Provider>
)
}



   // const withdrawals = [
    //     { id: 1, currency: 'TRX', amount: '-48', timestamp: '2025-03-30 11:36:04', status: 'Completed' },
    //     { id: 2, currency: 'TRX', amount: '-59.47815', timestamp: '2025-03-28 15:08:13', status: 'Completed' },
    //     { id: 3, currency: 'TRX', amount: '-39.912928', timestamp: '2025-03-27 16:49:03', status: 'Completed' },
    //     { id: 4, currency: 'TRX', amount: '-29', timestamp: '2025-03-27 15:34:31', status: 'Completed' },
    //     { id: 5, currency: 'TRX', amount: '-40', timestamp: '2025-03-27 15:31:53', status: 'Completed' },
    //     { id: 6, currency: 'TRX', amount: '-40', timestamp: '2025-03-27 15:28:36', status: 'Completed' },
    //     { id: 7, currency: 'TRX', amount: '-49', timestamp: '2025-03-27 11:04:25', status: 'Completed' },
    //     { id: 8, currency: 'TRX', amount: '-69', timestamp: '2025-03-27 11:03:48', status: 'Completed' },
    //     { id: 9, currency: 'TRX', amount: '-64.003105', timestamp: '2025-03-26 14:16:26', status: 'Completed' },
    //     { id: 10, currency: 'TRX', amount: '-49.70529', timestamp: '2025-03-26 13:25:47', status: 'Completed' },
    //   ];