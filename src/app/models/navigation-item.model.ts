export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  route?: string;
  children?: NavigationItem[];
  active?: boolean;
}