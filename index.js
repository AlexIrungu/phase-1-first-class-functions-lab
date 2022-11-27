// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = () => {
    let newDrivers = drivers.slice(0,2)
    return newDrivers
}
returnFirstTwoDrivers()
const returnLastTwoDrivers = () => {
    let lastDrivers = ['Amari', 'Mo']
    return lastDrivers
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(){
    return function fareMultiplier(){
        let num1 = 5
        return num1*num1
    }
}
createFareMultiplier()
function fareDoubler(fare){
    return fare * 2
    }
fareDoubler()
function fareTripler(fare){
    return fare * 3
    }
fareTripler()
function selectDifferentDrivers(arrayOfDrivers,fx){
    return fx(arrayOfDrivers)
}
selectDifferentDrivers()


