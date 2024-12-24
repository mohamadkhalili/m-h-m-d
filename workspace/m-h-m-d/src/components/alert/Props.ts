import * as mdiIcons from "@mdi/js";
import { PropType } from "vue";
export const alertProps = {
    modelValue: { type: Boolean, default: true },
    icon: { type: String as PropType<keyof typeof mdiIcons>, default: "mdiAlertCircleOutline" },
    title: { type: String, default: "alert" },
    text: { type: String, default: "text of alert" },
    alertClass: { type: String, default: ""},
    iconClass: { type: String, default: ""},
    titleClass: { type: String, default: ""},
    textClass: { type: String, default: ""}
}
