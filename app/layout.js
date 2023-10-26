import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })
import { StoreProvider } from '@/utils/GlobalState';


export const metadata = {
  title: 'Villainy Quiz',
  description: 'Learn which type of villain you may or may not be. Quiz others to find out about them',
}

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
    <html lang="en" style={{ height: '100%' }}>
      <body className={inter.className} style={{ height: '100%' }} >
      <Header/>
      <main className="mainClass flex min-h-screen pb-[11rem] max-w-[100%] flex-col items-center justify-between" >
        {children}
      </main>  
      <Footer/>
      </body>
    </html>
    </StoreProvider>
  )
}
//flex-col items-center justify-between were in main but took out when doing about page