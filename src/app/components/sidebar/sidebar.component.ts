import { Component, Input, Output, EventEmitter, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SidebarService } from '../../services/sidebar.service';
import { NavigationItem } from '../../models/navigation-item.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [
  trigger('sidebarState', [
    state('collapsed', style({
      width: '64px'
    })),
    state('expanded', style({
      width: '240px'
    })),
    transition('collapsed <=> expanded', [
      animate('300ms ease')
    ])
  ])
]
})
export class SidebarComponent {
  @Input() expanded = false;
  @Input() pinned = false;
  @Output() expandChange = new EventEmitter<boolean>();
  @Output() pinnedChange = new EventEmitter<boolean>();
  
  navigationItems: NavigationItem[] = [];
  
  constructor(private sidebarService: SidebarService) {}
  
  ngOnInit() {
    this.navigationItems = this.sidebarService.getNavigationItems();
  }
  
  onMouseEnter() {
    if (!this.pinned) {
      this.expanded = true;
      this.expandChange.emit(this.expanded);
    }
  }
  
  onMouseLeave() {
    if (!this.pinned) {
      this.expanded = false;
      this.expandChange.emit(this.expanded);
    }
  }
  
  togglePin() {
    this.pinned = !this.pinned;
    this.pinnedChange.emit(this.pinned);
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth < 768 && !this.pinned) {
      this.expanded = false;
      this.expandChange.emit(this.expanded);
    }
  }

}
