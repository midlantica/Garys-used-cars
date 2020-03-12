export const Car = carObject => {
  return `
  <section class="dh-panel car">
    <h4>${carObject.model}</h4>
    <p class="car__make">${carObject.make}</p>
    <p class="car__details">${carObject.color} ${carObject.year}</p>
  </section>
  `
}
