
import { Component, Input, Output, EventEmitter }from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/events-list.component.html'
})
export class EventThumbnailComponent {
    @Input() event:any
    @Output() eventClick = new EventEmitter()
}