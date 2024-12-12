import { CarCard } from '@/components'
import { fetchCars, showCapitalize } from '@/utils';
import Image from 'next/image';

const RentCar = async () => {

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
            <div className="hero">
                <div className="flex-1 pt-36 padding-x">
                    <CarCard car={car[0]} />
                </div>
                <div className="hero__image-container">
                    <div className="hero__image">
                        <Image src="/hero.png" alt="hero" fill className="object-contain" />
                    </div>
                    <div className="hero__image-overlay" />
                </div>
            </div>
        </>
    )
}

export default RentCar