import axios from "axios";
import React, {useContext, useEffect, useState} from "react";

const AppContext = React.createContext();


const AppProvider = ({children}) => {

    const [showIp, setShowIp] = useState(true);
    const [lat, setLat] = useState(6.4474);
    const [long, setLong] = useState(3.3903)
    const [ipAddress, setIpAddress] = useState([]);

    useEffect(() => {
        axios.get('https://ipapi.co/json/')
        .then(response => {
            setIpAddress(response.data)
            setLat(response.data.latitude);
            setLong(response.data.longitude);
        })
        .catch (error => {
            console.log(error)
        })
    },[])
    
    return <AppContext.Provider value={{
        showIp,setShowIp, ipAddress, setIpAddress, lat, setLong, long, setLat
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, AppContext}