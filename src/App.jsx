import React, { useEffect, useState } from 'react'
import { db } from './firebase/config'
import { collection, addDoc } from 'firebase/firestore'
import './App.css'

function App() {
  const [paymentInfo, setPaymentInfo] = useState(null);
  useEffect(() => {

    fetch(`https://bs-i4ni.onrender.com/CompraFinalizada`)
      .then(response => response.json())
      .then(data => setPaymentInfo(data))
      .catch(error => console.error('Error al obtener la información del pago:', error));



  }, []);

  useEffect(() => {
    const guardarInformacion = async () => {
      if (paymentInfo && paymentInfo.RequestBodyInfo) {
        const clienteData = {
          Nombre: paymentInfo.RequestBodyInfo.nombre,
          Apellido: paymentInfo.RequestBodyInfo.apellido,
          Producto: paymentInfo.RequestBodyInfo.description,
          Local: paymentInfo.RequestBodyInfo.local,
          Horario: paymentInfo.RequestBodyInfo.horario,
          telefono: paymentInfo.RequestBodyInfo.telefono,
          IdCompra: paymentInfo.QueryParams.payment_id
        };
  
        try {
          // Referencia a la colección en tu base de datos
          const pagosCollection = collection(db, 'Pagos');
  
          // Agregar un nuevo documento con la información del pago
          const nuevoPago = await addDoc(pagosCollection, clienteData);
  
          
        } catch (error) {
          console.error('Error al guardar la información del pago:', error);
        }
      }
    };
  
    guardarInformacion();
  }, [paymentInfo]);

  return (
    <div className='CompraFinalizada'>



    <h3 className='aaa'>Tu compra se realizo con exito</h3>

    {paymentInfo && paymentInfo.RequestBodyInfo && (
      <>
        <p>Nombre: {paymentInfo?.RequestBodyInfo?.nombre ?? 'No disponible'}</p>
        <p>Producto: {paymentInfo?.RequestBodyInfo?.description ?? 'No disponible'} ${paymentInfo?.RequestBodyInfo?.price ?? 'No disponible'}</p>
        <p>Local: {paymentInfo?.RequestBodyInfo?.local ?? 'No disponible'}</p>
        <p>{paymentInfo?.RequestBodyInfo?.horario ?? 'No disponible'}</p>
        <p>Id de la compra: {paymentInfo?.QueryParams?.payment_id ?? 'No disponible'}</p>

      </>
    )}






  </div>
  )
}

export default App
