// [Imports]
// - Interface
import type { IBaseListItems } from "../../../../src/runtime/interfaces/common.interfaces";

//  Items to use in the BaseList sidebar layout
export function useSideBar() {
  const items = ref<IBaseListItems[]>([
    {
      id: 1,
      title: "Components",
      icon: "mdi-home",
      items: [
        {
          id: "2",
          title: "Simple Components",
          path: "/",
        },
        {
          id: "2",
          title: "Complex Components",
          path: "/complex-components",
        },
      ],
    },
    {
      id: 3,
      title: "Utilities",
      icon: "mdi-function-variant",
      path: "/utilities",
    },
  ]);

  return { items };
}
