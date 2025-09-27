import Footer from '@/components/Footer'
import Header from '@/components/Header'
import WatchList from '@/components/WatchList'

export default async function page() {
  return (
    <div className='w-full h-full'>
        <Header/>
        <WatchList/>
        <Footer/>
    </div>
  )
}
