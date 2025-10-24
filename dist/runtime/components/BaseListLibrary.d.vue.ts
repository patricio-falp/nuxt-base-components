import type { IBaseListItems } from "../interfaces/common.interfaces.js";
interface IProps {
    items: IBaseListItems[];
    divider?: boolean;
    activeClass?: string;
    tooltip?: boolean;
}
type __VLS_Props = IProps;
type __VLS_ModelProps = {
    "itemSelected"?: IBaseListItems | null;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:itemSelected": (value: IBaseListItems | null | undefined) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:itemSelected"?: ((value: IBaseListItems | null | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
