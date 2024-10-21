// src/index.ts
import { App } from 'vue';
import MainPagination from './components/pagination/Ui.vue';
import '../../styles/index';
import { tooltip } from './directives/TooltipDirective';

export { MainPagination };

export default {
    install(app: App) {
        app.directive('tooltipl', tooltip);
        app.component('Main', MainPagination);
    },
};
