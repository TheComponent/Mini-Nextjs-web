"use client";

import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";
import Image from "next/image"
import CustomButton from "./CustomButton";

interface CarCardProps {
    car: CarProps;
}

const SingleCar = ({ car }: CarCardProps) => {

    console.log(car);
    const { city_mpg, year, make, model, transmission, drive } = car;
    const carRent = calculateCarRent(city_mpg, year);

    return (
        <>
            <div className="hero">
                <div className="flex-1 pt-36 padding-x">
                    <h1 className="hero__title">
                        {make.toUpperCase()} {model.toUpperCase()}
                    </h1>
                    <p className="flex mt-6 text-[32px] font-extrabold">
                        <span className="font-thin text-[28px] text-gray-700">Rent price:&nbsp;</span>
                        <span className="text-red-400 self-start text-[12px] font-semibold">
                            $
                        </span>
                        <span className="text-red-400 text-[30px] line-through">
                            {(Number(carRent) * 1.2).toPrecision(2)}
                        </span>
                        <span className="text-red-400 self-end text-[12px] font-medium">
                            /day
                        </span>
                    </p>
                    <p className="flex text-[32px] font-extrabold">
                        <span className="text-green-400 self-start text-[20px] font-semibold">
                            $
                        </span>
                        <span className="text-green-600 text-[40px]">
                            {carRent}
                        </span>
                        <span className="text-green-400 self-end text-[20px] font-medium">
                            /day
                        </span>
                    </p>
                    <CustomButton
                        title="Rent Now"
                        containerStyle="w-full py-[16px] rounded-full bg-primary-blue mt-5"
                        textStyle="text-white text-[24px] font-light leading-[17px] font-bold py-3"
                    />
                </div>
                <div className="hero__image-container">
                    <div className="hero__image">
                        <Image src="/hero.png" alt="hero" fill className="object-contain" />
                    </div>
                    <div className="hero__image-overlay" />
                </div>
            </div>

            <div className="hero">
                <div className="flex-1 padding-x">
                    <div>
                        <p className="font-thin mt-6 text-[28px] text-gray-700">Information:</p>
                        <table className="min-w-full table-auto mt-4">
                            <tbody>
                                <tr>
                                    <td className="px-4 py-2 text-gray-600">Year:</td>
                                    <td className="px-4 py-2 text-green-500 font-medium">{year}</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-gray-600">Fuel consume:</td>
                                    <td className="px-4 py-2">
                                        <div className="flex flex-col">
                                            <span className="text-green-500 font-medium">{city_mpg} miles / gallon</span>
                                            <span className="text-green-500 font-medium">{(235.214 / city_mpg).toPrecision(2)} Liter / 100km</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-gray-600">Transmission:</td>
                                    <td className="px-4 py-2 text-green-500 font-medium">
                                        {transmission === 'a' ? 'Automatic' : 'Manual'}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-gray-600">Drive:</td>
                                    <td className="px-4 py-2 text-green-500 font-medium">
                                        {drive === 'fwd' ? 'Front-wheel drive' : 'Rear-wheel drive'}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SingleCar