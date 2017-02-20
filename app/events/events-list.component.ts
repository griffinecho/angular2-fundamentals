
import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr>
        <event-thumbnail [event]="event1" ></event-thumbnail>
    </div>`
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: "Angular Connect",
        date: "2017-02-20",
        time: "10:00 AM",
        price: 3125,
        imageUrl: "/app/assets/images/angularconnect-shield.png",
        location: {
            address: "1057 DT",
            city: "London",
            country: "England"
        }
    }
}