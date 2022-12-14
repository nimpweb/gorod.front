import Image from 'next/image'
import React from 'react'
import {Layout, Container} from '../components'

const backgroundOptions = {
  background: 'rgba(255,255,255,0.5) url(./Data_security_05.jpg)',
  // backgroundImage: 'url(./90466.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundColor: 'rgb(241, 245, 249)',
  backgroundOpacity: '0.85',
  withOpacity: true
}

const login = () => {
  return (
    <Layout 
      pageTitle="Авторизация::Удобные платежи"
      backgroundOptions={backgroundOptions}
      options={{fixedHeight: "700px"}}
      
    >
      <Container>
        <h1 className="font-bold text-xl text-center mb-10">Авторизация</h1>

        <div className="shadow-2xl w-full h-full p-20 rounded-2xl bg-white opacity-80 flex gap-10">

          <Image 
            src="/two.png"
            alt="logo" 
            width={200}
            height={200}
          />
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non cum repellat cupiditate deleniti consequatur facilis quasi soluta ullam. Vero repellendus facilis error corrupti consequuntur eaque quis tenetur fugit unde odio!
            Qui ex aliquam eligendi vel libero ullam cumque commodi vero laudantium similique debitis id a nulla eum fugiat atque, velit architecto odio nesciunt ducimus! Tempore velit esse neque temporibus nam.
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default login