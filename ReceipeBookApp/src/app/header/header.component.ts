import {Component, EventEmitter, Output} from '@angular/core';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() featureSelectedEvent = new EventEmitter<string>();
  onSelect(feature: string) {
    this.featureSelectedEvent.emit(feature);
  }
}
