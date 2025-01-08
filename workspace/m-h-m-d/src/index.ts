// src/index.ts
import { App } from 'vue';
import pagination from './components/pagination/Ui.vue';
import modal from './components/modal/Ui.vue';
import Button from './components/button/Ui.vue';
import input from './components/input/Ui.vue';
import menu from './components/menu/Ui.vue';
import tab from './components/tab/Ui.vue';
import ChatBubble from './components/ChatBubble/Ui.vue';
import Loader from './components/Loader/Ui.vue';
import Switch from './components/Switch/Ui.vue';
import Breadcrumb from './components/breadcrumb/Ui.vue'
import CheckBox from './components/CheckBox/Ui.vue';
import Card from './components/Card/Ui.vue';
import Divider from './components/Divider/Ui.vue';
import list from './components/list/Ui.vue'
import { tooltip } from './directives/TooltipDirective';
import clickOutside from './directives/clickOutSide';
import stepper from './components/stepper/Core.vue';
import RangeSlider from './components/RangeSlider/Ui.vue';
import RadioGroup from './components/RadioGroup/Ui.vue';
import InputFile from './components/InputFile/Ui.vue';
import progressLinear from './components/progressLinear/Ui.vue';
import alert from './components/alert/Ui.vue';
import Radio from './components/Radio/Ui.vue';
import CountDown from './components/CountDown/Ui.vue';
import progressCircular from './components/progressCircular/Ui.vue'
import datePicker from './components/datePicker/Core.vue'
import Skeleton from './components/Skeleton/Ui.vue'
import Carousel from './components/Carousel/Ui.vue'
import dateRange from './components/dateRange/Core.vue'
import combobox from './components/combobox/Ui.vue'
import Drawer from './components/Drawer/Ui.vue'
import expansionPanel from './components/expansionPanel/Ui.vue';


const components = [
    { name: 'Pagination', ...pagination },
    { name: 'modal', ...modal },
    { name: 'Button', ...Button },
    { name: 'Input', ...input },
    { name: 'Menu', ...menu },
    { name: 'Tab', ...tab },
    { name: 'ChatBubble', ...ChatBubble },
    { name: 'Card', ...Card },
    { name: 'Switch', ...Switch },
    { name: 'CheckBox', ...CheckBox },
    { name: 'Divider', ...Divider },
    { name: 'List', ...list },
    { name: 'Stepper', ...stepper },
    { name: 'Loader', ...Loader },
    { name: 'Breadcrumb', ...Breadcrumb },
    { name: 'ProgressLinear', ...progressLinear},
    { name: 'RangeSlider', ...RangeSlider},
    { name: 'RadioGroup', ...RadioGroup},
    { name: 'InputFile', ...InputFile},
    { name: 'Alert', ...alert},
    { name: 'Radio', ...Radio},
    { name: 'CountDown', ...CountDown},
    { name: 'ProgressCircular', ...progressCircular},
    { name: 'DatePicker', ...datePicker},
    { name: 'Skeleton', ...Skeleton},
    { name: 'Carousel', ...Carousel},
    { name: 'DateRange', ...dateRange},
    { name: 'ComboBox', ...combobox},
    { name: 'Drawer', ...Drawer},
    { name: 'ExpansionPanel', ...expansionPanel},



]

const directives = {
    tooltip,
    clickOutside,
}

interface Config {
    componentPrefix?: string;
    classPrefix?: string;
}

const install = (app: App, config: Config = {}) => {
    app.config.globalProperties.$config = config;
    components.forEach(component => {
        app.component(config?.componentPrefix + component.name, component);
    });
    Object.entries(directives).forEach(([name, directive]) => {
        app.directive(name, directive);
    });
}


export { pagination, modal, Button, input, menu, tab, list, ChatBubble, Divider, stepper, Card, Switch, CheckBox, 
         Breadcrumb, Loader, progressLinear, RangeSlider, alert,InputFile ,RadioGroup,Radio ,CountDown,progressCircular,
         datePicker, Skeleton, Carousel, dateRange, Drawer, combobox, expansionPanel}

export { tooltip }

export default {
    install
}
