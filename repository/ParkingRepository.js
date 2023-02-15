const ParkingRepository = (parkingCapacity) => {
    let cars = [];
    const capacity = parkingCapacity;

    const addCar = (newCar) => {
        return new Promise((resolve) => {
            setTimeout( async () => {
                cars.push(newCar);
                resolve('Success add')
            }, 3000)
        })
    }

    const getOne = (searchCar) => {
        return new Promise((resolve) => {
            const existCar = cars.find((car) => car.plateNumber === searchCar.plateNumber);
            if (existCar) {
                resolve(existCar)
            } else {
                resolve(null)
            }
        })
    }

    const deleteCar = (car) => {
        return new Promise((resolve) => {
            setTimeout( async () => {
                const parkingNumber = cars.findIndex((c) => c.plateNumber === car.plateNumber);
                cars.splice(parkingNumber, 1);
                resolve('Success delete');
            }, 1500)
        })
    }

    const getAll = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({capacity, remaining: capacity - cars.length, parkedCars: cars})
            }, 500)
        })
    }

    const getCurrentCar = () => {
        return cars.length;
    }


    return {
        addCar, deleteCar, getAll, getOne, getCurrentCar, capacity
    }
};

module.exports = {
    ParkingRepository
}