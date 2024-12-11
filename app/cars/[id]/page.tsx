import SingleCar from '@/components/SingleCar';
import { fetchCars } from '@/utils';
import React from 'react'

const CarInformation = async () => {

    const car = await fetchCars({
        manufacturer: '',
        year: 2020,
        fuel: '',
        limit: 1,
        model: '',
    });

    const isDataEmpty = !Array.isArray(car) || car.length < 1 || !car;

    return (
        <>
            <main className="overflow-hidden">
                <SingleCar car={car[0]} />
            </main>
        </>
    )
}

export default CarInformation