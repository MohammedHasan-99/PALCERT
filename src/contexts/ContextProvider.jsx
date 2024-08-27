import React, {createContext, useContext, useState} from "react";

const StateContext = createContext();

const initialState = { 
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}



export const ContextProvider = ({ children }) => {
    const [activeMenue, setActiveMenue] = useState(false);
    const [isMenueHovered, setIsMenueHovered] = useState(false);
    

    const [isConnectedMetaMask, setIsConnectedMetaMask] = useState(false);
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);

    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)

    const handleClick = (clicked)  => {
        setIsClicked({...initialState, [clicked]:true});
        console.log(setIsClicked)
    }
    return(
        
        <StateContext.Provider value={{ activeMenue, setActiveMenue,isMenueHovered, isConnectedMetaMask, setIsConnectedMetaMask, web3, setWeb3, account, setAccount, setIsMenueHovered, isClicked, setIsClicked, handleClick, screenSize, setScreenSize}}>
            {children}
        </StateContext.Provider>

    )
}
export const useStateContext = () => useContext(StateContext);