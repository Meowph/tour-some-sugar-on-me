import { getVenues, getBookings } from "./database.js"

const venues = getVenues()

export const Venues =() => {
  let venueHTML = "<ul>"

  for (const venue of venues) {
    venueHTML += `
    <li data-type = "venue"
        data-name = "${venue.name}"
        data-id = "${venue.id}"
        data-bookingId = "${venue.bookingId}"
    >${venue.name}
    </li>`
  }

  venueHTML += "</ul>"

  return venueHTML

}