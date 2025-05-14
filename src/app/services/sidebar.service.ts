import { Injectable } from '@angular/core';
import { NavigationItem } from '../models/navigation-item.model';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private navigationItems: NavigationItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'dashboard-icon',
      active: true
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: 'projects-icon'
    },
    {
      id: 'tasks',
      label: 'Tasks',
      icon: 'tasks-icon'
    },
    {
      id: 'calendar',
      label: 'Calendar',
      icon: 'calendar-icon'
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: 'messages-icon'
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: 'analytics-icon'
    },
    {
      id: 'team',
      label: 'Team',
      icon: 'team-icon'
    },
    {
      id: 'help',
      label: 'Help & Support',
      icon: 'help-icon'
    }
  ];

  constructor() { }

  getNavigationItems(): NavigationItem[] {
    return this.navigationItems;
  }

  toggleItemActive(id: string) {
    this.navigationItems = this.navigationItems.map(item => ({
      ...item,
      active: item.id === id
    }));
    
    return this.navigationItems;
  }
}