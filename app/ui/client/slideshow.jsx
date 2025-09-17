import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import slide1 from '/Users/edsonmanuel/Documents/projetos/inovart/public/taca-pipocas.jpg'
import slide2 from '/Users/edsonmanuel/Documents/projetos/inovart/public/vercel.svg'
import Image from 'next/image';

export default function SlideShow (){

  return(

    <Carousel className="bg-pink-300 relative">
      <CarouselContent className="bg-orange-400 h-[60vh]">
        <CarouselItem className="w-full"> <Image src={slide1}  alt="Random image" className="object-cover"/> </CarouselItem>
        <CarouselItem className="w-full"> <Image src={slide2}  alt="Random image" /> </CarouselItem>
        <CarouselItem className="w-full"> <Image src={slide1}  alt="Random image" /> </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className=" absolute left-2 top-1/2" />
      <CarouselNext className="absolute right-2 top-1/2"/>
    </Carousel>

  )
}