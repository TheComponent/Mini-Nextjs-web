"use client";

import { useState } from "react"
import Image from "next/image";

import { CarProps } from "@/types";
import CustomButton from "./CustomButton";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import CarDetails from "./CarDetails";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {

    const { city_mpg, year, make, model, transmission, drive } = car;
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const carRent = calculateCarRent(city_mpg, year);

    function handleSentCar(carClass: string): void {
        router.push(`/rents/${carClass}`)
    }

    return (
        <div className="car-card group border">
            <Link className="group border-none w-full rounded-3xl p-3" href={`/cars/1`}>
                <div className="car-card__content">
                    <h2 className="car-card__content-title">
                        {make} {model}
                    </h2>
                </div>

                <p className="flex mt-6 text-[32px] font-extrabold">
                    <span className="self-start text-[14px] font-semibold">
                        $
                    </span>
                    {carRent}
                    <span className="self-end text-[14px] font-medium">
                        /day
                    </span>
                </p>

                <div className="relative w-full h-40 my-3 object-contain">
                    {/* <Image src={generateCarImageUrl(car)} alt="car model"
                    fill priority className="object-contain" /> */}
                    <Image src="/hero.png" alt="car model" fill priority className="object-contain" />
                </div>
            </Link>

            <div className="relative flex w-full mt-2">
                <div className="flex group-hover:invisible w-full justify-between text-gray">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/steering-wheel.svg" width={20} height={20}
                            alt="steering wheel" />
                        <p className="text-[14px]">
                            {transmission === 'a' ? 'Automatic' : 'Manual'}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/tire.svg" width={20} height={20}
                            alt="tire" />
                        <p className="text-[14px]">
                            {drive?.toUpperCase()}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/gas.svg" width={20} height={20}
                            alt="gas" />
                        <p className="text-[14px]">
                            {city_mpg} MPG
                        </p>
                    </div>
                </div>

                <div className="car-card__btn-container flex flex-row gap-2 mt-3">
                    <CustomButton
                        title='Rent now'
                        containerStyle="w-full py-[12px] rounded-full bg-green-500"
                        textStyle="text-white text-[12px] leading-[12px] font-bold"
                        rightIcon="/rent.svg"
                        handleClick={() => handleSentCar(car.class)}
                    />
                    <CustomButton
                        title='View more'
                        containerStyle="w-full py-[12px] rounded-full bg-primary-blue"
                        textStyle="text-white text-[12px] leading-[12px] font-bold"
                        rightIcon="/right-arrow.svg"
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
                <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
            </div>
        </div>
    )
}

export default CarCard