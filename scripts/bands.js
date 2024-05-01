import { getBands, getBookings } from "./database.js"

const bands = getBands()
const bookings = getBookings()

export const Bands =() => {
  let bandHTML = "<ul>"

  for (const band of bands) {

    bandHTML += `
    <li data-type = "band"
        data-name = "${band.name}"
        data-id = "${band.id}"
        data-venueName = "${band.venueName}"
        data-bookingDate = "${band.bookingDate}"
    >${band.name}
    </li>`
  }

  bandHTML += "</ul>"

  return bandHTML

}

document.addEventListener (
  "click",
  (clickEvent) => {
      const itemClicked = clickEvent.target

      if (itemClicked.dataset.type === "band") {

        } 
        window.alert(`${itemClicked.dataset.name} are playing at ${itemClicked.dataset.venueName}`)

      }
)