import { Car } from "./Car.js"
import { useCars } from "./CarDataProvider.js"

const contentTarget = document.querySelector(".carList")

export const CarList = () => {
  const carDataArray = useCars()

  const carStringArray = carDataArray.map(carObject => {
    return Car(carObject)
  })

  contentTarget.innerHTML = carStringArray.join("")
}
