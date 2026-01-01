'use client'

import { useParams, useRouter } from 'next/navigation'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import ServiceDetail from '../../../components/DetailedServices'

export default function ServiceDetailPage() {
  const params = useParams()
  const router = useRouter()
  
  // In a real app, you'd fetch the service data based on params.id
  // For now, we'll pass the id to the component
  return (
    <>
      <Header />
      <ServiceDetail serviceId={params.id} />
      <Footer />
    </>
  )
}

