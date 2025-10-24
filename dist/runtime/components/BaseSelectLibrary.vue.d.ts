import type { ISelectMapping } from "../interfaces/common.interfaces.js";
interface IProps {
    label?: string;
}
type __VLS_Props = IProps;
type __VLS_ModelProps = {
    modelValue?: string | null | undefined | object | ISelectMapping;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | object | ISelectMapping | null | undefined) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | object | ISelectMapping | null | undefined) => any) | undefined;
}>, {
    label: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
