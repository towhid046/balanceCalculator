import { createContext, useReducer } from "react";
import App from "./../App";
export const GlobalContext = createContext("");

const reducer = (state, action) => {

}

    
const  initialValue = {
    transactions: []
}
const ContextProvider = () => {
        // 
        function addTransaction(transaction) {
            dispatch({
              type: "ADD_TRANSACTION",
              payload: transaction,
            });
          }

    const [state, dispatch] = useReducer(reducer, initialValue)
    
  return (
    <>
      <div>
        <GlobalContext.Provider value={{state, dispatch, addTransaction}}>
          <App />
        </GlobalContext.Provider>
      </div>
    </>
  );
};

export default ContextProvider;
