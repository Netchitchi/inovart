"use client"

import Image from 'next/image';
import Link from 'next/link';
import Logo from '/Users/edsonmanuel/Documents/projetos/inovart/public/next.svg'
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


export default function Navbar() {

  const [isMenuOpen, setisMenuOpen] = useState(false);
  const pathName = usePathname();

  return (
    <>
      <div className='relative flex flex-row justify-between items-center py-6 px-8 w-full'>
        <Link href="/client/home">
          <Image
          width={10}
          height={10}
          src={Logo}
          alt='Inovart logo' 
          className=' w-32 hover:scale-105 transition-all'
        />
        </Link>
   

        <div className='xl:flex hidden'>
          <ul className=' flex flex-row gap-3'>
            <li className={clsx( 
              'rounded-md p-1',
              {
                'bg-amber-50 text-amber-600  transition-all': pathName === "/client/home"
              },
              )}> <Link href='/client/home'> Home </Link> </li>
            <li className={clsx(
              'rounded-md p-1',
              {
                'bg-amber-50 text-amber-600  transition-all': pathName === "/client/servicos"
              },
            )}> <Link href='/client/servicos'> Servicos </Link> </li>
            <li className={clsx(
              'rounded-md p-1',
              {
                'bg-amber-50 text-amber-600  transition-all': pathName === "/client/catalogo"
              },
            )}> <Link href='/client/catalogo'> Catalogo </Link> </li>
            <li className={clsx(
              'rounded-md p-1',
              {
                'bg-amber-50 text-amber-600  transition-all': pathName === "/client/qsomos"
              },
            )}> <Link href='/client/qsomos'> Quem somos </Link></li>
            <li className={clsx(
              'rounded-md p-1',
              {
                'bg-amber-50 text-amber-600  transition-all': pathName === "/client/contatos"
              },
            )}> <Link href='/client/contatos'> Contatos </Link> </li>
          </ul>
        </div>

        <div className='xl:hidden cursor-pointer' onClick={ () => setisMenuOpen(!isMenuOpen)}>
          <Menu />
        </div>

        <div className={` absolute  xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-5 ${isMenuOpen? "opacity-100": "opacity-0"} transition-transform `} style={{ transition: 'transform 0.2s ease, opacity 0.2s ease'}}>
          <li className='list-none hover:text-amber-300'> Home </li>
          <li className='list-none hover:text-amber-300'> Servicos </li>
          <li className='list-none hover:text-amber-300'> Catalogo </li>
          <li className='list-none hover:text-amber-300'> Quem somos</li>
          <li className='list-none hover:text-amber-300'> Contatos</li>
        </div>
        
      </div>
      <hr /> 

      
    </>
  )
}