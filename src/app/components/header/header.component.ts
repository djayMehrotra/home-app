import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})
export class HeaderComponent {

  @Input() sidebarExpanded = false;
  @Input() sidebarPinned = false;
  @Output() toggleSidebar = new EventEmitter<void>();
  
  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

}
