const database = {

  venues: [ 
  {
    id: 1,
    name: "The Cellar Door",
    address: "Tucson, Arizona",
    size: "25 yards",
    max: "250 occupants"  
  }, {
    id: 2,
    name: "Danger Pit",
    address: "Big Sky, Montana",
    size: "100 yards",
    max: "500 occupants"  
  }, {
    id: 3,
    name: "Thirsty Horse",
    address: "Forks,Washington",
    size: "50 yards",
    max: "325 occupants"  
  }
  ],

  bands: [
    {
      id: 1,
      name: "Garden Of Thorns",
      members: 5,
      genre: "Heavy Metal, Alternative",
      established: "2013"
    }, {
      id: 2,
      name: "A Whisker Away",
      members: 4,
      genre: "Funk, Electronic",
      established: "2005"
    }, {
      id: 3,
      name: "V Energy",
      members: 6,
      genre: "Synthwave, Pop",
      established: "2021"
    }
  ], 

  bookings: [
    {
      id: 1,
      bandId: 3,
      venueId: 3,
      date: "12/05/25"
    }, {
      id: 2,
      bandId: 1,
      venueId: 1,
      date: "10/13/2024"
    }, {
      id: 3,
      bandId: 2,
      venueId: 2,
      date: "05/18/24"
    }
  ],

}

export const getVenues = () => {
  return database.venues.map(venue => ({...venue}))
}

export const getBands = () => {
  return database.bands.map(band => ({...band}))
}

export const getBookings = () => {
  return database.bookings.map(booking => ({...booking}))
}