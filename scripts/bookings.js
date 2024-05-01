import { getBookings, getVenues, getBands } from "./database.js"

const bookings = getBookings()
const venues = getVenues()
const bands = getBands()


const findVenues = (booked, allVenues) => {
    let venuesBooked = null

    for (const venue of allVenues) {
        if (venue.id === booked.venueId) {
            venuesBooked = venues
        }
    }
    return venuesBooked
}

const findBands = (booked, allBands) => {
    let currentBands = []

    for (const band of allBands) {
        if (band.id === booked.bandId) {
          currentBands = bands
        }
    }

    return currentBands
}



export const Bookings =() => {
  let bookingHTML = "<ul>"

  for (const booking of bookings) {
      const venue = findVenues(booked, venues)
        const band = findBands(booked, bands)

    bookingHTML += 
    `<li> ${band.name} is currently booked at ${venue.name} for ${new Date(booking.date).toLocaleDateString}</li>` //Nothing is showing here.. look more at 5/2/24
  }

  bookingHTML += "</ul>"

  return bookingHTML

}