
import moment from "moment"
import { useState } from "react";

export const Clock = () => {
    const hoy = moment().format('DD/MM/YYYY HH:mm:ss');
    const [fecha, setFecha] = useState(hoy)

    setInterval( () => {
        const hoy = moment().format('DD/MM/YYYY HH:mm:ss');
        setFecha(hoy);
    },1000)
   
  return (
    <>
        {fecha}
    </>
  )
}
