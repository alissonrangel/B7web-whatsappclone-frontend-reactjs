import React, {useState, useEffect} from 'react';

import './ChatIntro.css'

export default () => {

  return (
    <div className="chatIntro">
      <img src="https://techloverhd.com/wp-content/uploads/2016/04/How-to-use-WhatsApp-Web-and-keep-your-phone-connected-1200x675.jpg" alt="" />
      <h1>Mantenha seu celular conectado</h1>
      <h2>O WhatsApp conecta ao seu telefone para sincronizar suas mensagens.
        Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.
      </h2>
    </div>
  )
}