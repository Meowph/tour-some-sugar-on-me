import { Bands } from "./bands.js"
import { Bookings } from "./bookings.js"
import { Venues } from "./tourvenues.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour Some Sugar On Me</h1>
<article class="details">
    <section class="detail--column list details__bands">
        <h2>Bands</h2>
        ${Bands()}
    </section>
    <section class="detail--column list details__bookings">
        <h2>Bookings</h2>
        ${Bookings()}
    </section>
</article>

<article class="venues">
    <h2>Venues</h2>
    ${Venues()}
</article>
`

mainContainer.innerHTML = applicationHTML