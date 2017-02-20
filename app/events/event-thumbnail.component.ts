
import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html',
    styleUrls: ['app/events/event-thumbnail.component.css']
})
export class EventThumbnailComponent {
    @Input() event: any
    @Output() eventClick = new EventEmitter()

    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time === '8:00 am';
        return { green: isEarlyStart, bold: isEarlyStart }
    }
}