import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, GridComponent],
  standalone: true,
  imports: [CommonModule, SidebarComponent, ContentComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  sidebarExpanded = false;
  sidebarPinned = false;
  
  toggleSidebar() {
    this.sidebarExpanded = !this.sidebarExpanded;
    if (!this.sidebarExpanded) {
      this.sidebarPinned = false;
    }
  }
  
  onExpandChange(expanded: boolean) {
    this.sidebarExpanded = expanded;
  }
  
  onPinnedChange(pinned: boolean) {
    this.sidebarPinned = pinned;
    if (pinned) {
      this.sidebarExpanded = true;
    }
  }
}
