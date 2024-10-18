export async function fetchCars() {
    const headers = {
        'x-rapidapi-key': '677d638cf2msh9ec367fdb4a60a1p152f16jsn960af3b88042',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
        {
            headers: headers
        },
    );

    const result = await response.json();

    return result;
}