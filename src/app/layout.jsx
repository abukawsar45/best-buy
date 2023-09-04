
'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import classNames from './../utils/classNames';
import Footer from './../components/Footer';
import StickyNavbar from './../components/Navbar';

// const roboto = Roboto({
//   weight: ['100', '300', '400', '500', '700', '900'],
//   subsets: ['latin'],
//   variable: '--font-roboto'
// });

export const metadata = {
  title: "Best Buy",
  description: 'Best Buy is an e-commerce web application'
};

const RootLayout = ({children}) => {
  return (
    <html lang='en' data-theme='dark' className='transition-all'>
      <body
        className='container mx-auto px-2 '
        
      >
        <div className='flex min-h-screen flex-col justify-between'>
          <div>
            <StickyNavbar/>
            <main>{children}</main>
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
export default RootLayout;