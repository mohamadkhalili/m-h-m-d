import * as mdiIcons from "@mdi/js";
import { PropType } from "vue";
export const alertProps = {
    modelValue: { type: Boolean, default: true },
    icon: { type: String as PropType<keyof typeof mdiIcons>, default: "mdiAlertCircleOutline" },
    title: { type: String, default: "alert" },
    text: { type: String, default: "text for alert" },
}
