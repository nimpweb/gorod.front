import React from 'react'
import ModalForm from './../Modal';

const ServiceModal = ( { setModal }) => {
  return (
    <ModalForm
        title="Добавление услуги к профилю"
        setModal={setModal}
    >
        <p>Some services</p>
    </ModalForm>  
  )
}

export default ServiceModal