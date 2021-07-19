import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Car } from "../../components/car";
import { ICar } from "../../../typings/car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import Car2 from "../../../assets/images/chr.png"


const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

// const EmptyCars = styled.div`
//   ${tw`
//     w-full
//     flex
//     justify-center
//     items-center
//     text-sm
//     text-gray-500
//   `};
// `;

// const LoadingContainer = styled.div`
//   ${tw`
//     w-full
//     mt-9
//     flex
//     justify-center
//     items-center
//     text-base
//     text-black
//   `};
// `;

const testCar: ICar = {
  name: "Audi S3 Car",
  mileage: "10k",
  thumbnailSrc:"https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
  dailyPrice: 70,
  monthlyPrice: 1600,
  gearType: "Auto",
  gas: "Petrol",
};

const testCar2: ICar = {
  name: "HONDA cITY 5 Seater Car",
  mileage: "20k",
  thumbnailSrc: "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
  dailyPrice: 50,
  monthlyPrice: 1500,
  gearType: "Auto",
  gas: "Petrol",
};

const testCar3: ICar = {
  name: "Toyota CHR hybrid",
  mileage: "30k",
  thumbnailSrc: "https://m.atcdn.co.uk/a/media/w800h600/fa5c6bf37b294855aeb62c604179981d.jpg",
  dailyPrice: 40,
  monthlyPrice: 1200,
  gearType: "Auto",
  gas: "Petrol",
};
const testCar4: ICar = {
  name: "Audi RS6 Avant",
  mileage: "20k",
  thumbnailSrc: "https://m.atcdn.co.uk/a/media/w800h600/e7e8f8e0ab8943828d8db568475ee577.jpg",
  dailyPrice: 60,
  monthlyPrice: 1800,
  gearType: "Auto",
  gas: "Petrol",
};
const testCar5: ICar = {
  name: "Citroen C3 Aircross",
  mileage: "25k",
  thumbnailSrc: "https://m.atcdn.co.uk/a/media/w800h600/6bb644a60ca8483fa79b7d442a7f96ed.jpg",
  dailyPrice: 60,
  monthlyPrice: 1800,
  gearType: "Manual",
  gas: "Petrol",
};
const testCar6: ICar = {
  name: "Audi RS6 Avant",
  mileage: "20k",
  thumbnailSrc: "https://m.atcdn.co.uk/a/media/w800h600/57c06293367947c88e27030c80245a16.jpg",
  dailyPrice: 20,
  monthlyPrice: 500,
  gearType: "Manual",
  gas: "Petrol",
};
const testCar7: ICar = {
  name: "BMW 3",
  mileage: "20k",
  thumbnailSrc: "https://m.atcdn.co.uk/a/media/w800h600/0077036b3cc047d79d69695737b311a1.jpg",
  dailyPrice: 60,
  monthlyPrice: 1800,
  gearType: "Auto",
  gas: "Petrol",
};
const testCar8: ICar = {
  name: "Mercedes-Benz E-Class Saloon",
  mileage: "20k",
  thumbnailSrc: "https://m.atcdn.co.uk/a/media/w800h600/31debb14194044f6bdbc8b408dbb6199.jpg",
  dailyPrice: 60,
  monthlyPrice: 1800,
  gearType: "Auto",
  gas: "Petrol",
};
const testCar9: ICar = {
  name: "A RS6 Avant",
  mileage: "20k",
  thumbnailSrc: "https://m.atcdn.co.uk/a/media/w800h600/e7e8f8e0ab8943828d8db568475ee577.jpg",
  dailyPrice: 60,
  monthlyPrice: 1800,
  gearType: "Auto",
  gas: "Petrol",
};
export function TopCars(){
  const [current, setCurrent] = useState(0);
  
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const cars =[
          <Car {...testCar}/>, 
          <Car {...testCar2}/>, 
          <Car {...testCar3}/>, 
          <Car {...testCar4}/>, 
          <Car {...testCar5}/>,
          <Car {...testCar6}/>,
          <Car {...testCar7}/>,
          <Car {...testCar8}/>,
          <Car {...testCar9}/>,
  ]
  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length - 2);
  
  return <TopCarsContainer>
    <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        <Carousel 
        value={current} 
        onChange={setCurrent} 
        slides={ cars } 
        plugins={[
          "clickToChange",
          {
            resolve:slidesToShowPlugin,
            options:{
              numberOfSlides:3,
            }
          }
        ]}
        breakpoints={{
          640: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
            ],
          },
          900: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2,
                },
              },
            ],
          },
        }}
       />
      <Dots value={current} onChange={setCurrent} number={numberOfDots} />
      </CarsContainer>
  </TopCarsContainer>
}