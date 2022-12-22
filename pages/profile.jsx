import React from 'react'
import { Layout, Container } from '../components'
import { Sidebar } from '../container'

const profile = () => {
  return (
    <Layout pageTitle="Профиль::Удобные платежи">
      <Container>
        <h1 className="font-bold text-xl text-center mb-5">Профиль</h1>
        <div className="flex gap-10">
            <Sidebar />
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg" style={{width: '80%'}} >
                <p className="w-full text-slate-300 flex items-center justify-center">Some profile data</p>
            </div>
        </div>
      </Container>
    </Layout>
  )
}

export default profile