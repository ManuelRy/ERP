import cars from "@/data/cars.json";

export default defineEventHandler((event) => {
    console.log("I am hit");
    const { city } = event.context.params;
    const { make, minPrice, maxPrice } = getQuery(event);
    let filteredCars = cars;

    filteredCars = filteredCars.filter((car) => {
        return car.city.toLowerCase() === city.toLowerCase();
    });

    if (make) {
        filteredCars = filteredCars.filter((car) => {
            return car.make.toLowerCase() === make.toLowerCase();
        });
    }

    if(minPrice) {
        filteredCars = filteredCars.filter((car) => {
            return car.price.toLowerCase() >= parseInt(minPrice);
        });
    };

    if(maxPrice) {
        filteredCars = filteredCars.filter((car) => {
            return car.price.toLowerCase() >= parseInt(maxPrice);
        });
    };

    return filteredCars;
});