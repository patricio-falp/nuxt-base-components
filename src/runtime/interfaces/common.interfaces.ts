/**
 * INTERFACE
 */
// Defines the structure for a basic list item
interface IBaseListItem {
  id: number | string; // Unique identifier for the item
  title: string; // Display title for the item
  icon?: string; // Optional icon for the item
  path?: string; // Optional path for navigation
}
// Extends IBaseListItem to include a list of items, allowing for nested structures
interface IBaseListItems extends IBaseListItem {
  items?: IBaseListItem[]; // Optional array of IBaseListItem for nested items
}
// Interface for components that use select mappings
interface ISelectMapping {
  label: string;
  value: any;
}

export type { ISelectMapping, IBaseListItems };
