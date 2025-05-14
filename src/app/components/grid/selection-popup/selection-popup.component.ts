import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-selection-popup',
  templateUrl: './selection-popup.component.html',
  styleUrls: ['./selection-popup.component.scss'],
  animations: [
    // Animation definitions can be added here if needed
  ]
})
export class SelectionPopupComponent {
  @Input() count = 0;
  @Output() clearSelection = new EventEmitter<void>();
  
  onClearClick() {
    this.clearSelection.emit();
  }
  
  // Close popup when clicking outside (optional functionality)
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!(event.target as HTMLElement).closest('.selection-popup')) {
      // Uncomment if you want to close on outside click
      // this.clearSelection.emit();
    }
  }
}