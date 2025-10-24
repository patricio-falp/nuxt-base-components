/**
 * INTERFACE
 */
interface IBaseListItem {
    id: number | string;
    title: string;
    icon?: string;
    path?: string;
}
interface IBaseListItems extends IBaseListItem {
    items?: IBaseListItem[];
}
interface ISelectMapping {
    label: string;
    value: any;
}
export type { ISelectMapping, IBaseListItems };
