import * as mdiIcons from "@mdi/js";
import { PropType } from "vue";
export const alertProps = {
    modelValue: { type: Boolean, default: true },
    icon: { type: String as PropType<keyof typeof mdiIcons>, default: "mdiAlertCircleOutline" },
    title: { type: String, default: "alert" },
    text: { type: String, default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!" },
}
