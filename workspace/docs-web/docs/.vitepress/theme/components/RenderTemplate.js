import { defineComponent, h, ref } from 'vue'
// کتابخانه اصلی Vue برای تزریق به تابع کامپایل:
import * as Vue from 'vue'
// کامپایلر Template 
import { compile } from '@vue/compiler-dom'

export default defineComponent({
  name: 'DynamicTemplate',

  props: {
    // کد مربوط به بخش <script>    (مثلاً export default { ... })
    scriptCode: {
      type: String,
      default: `
        export default {
          data() {
            return {
              msg: "No script code provided"
            }
          }
        }
      `
    },
    // کد قالب مربوط به <template>
    templateCode: {
      type: String,
      default: `<div>No template code provided</div>`
    }
  },

  setup(props) {
    // 1) تلاش برای ساخت شیء جاوااسکریپتی از scriptCode
    //    این فرض را می‌گذاریم که scriptCode حتماً با "export default {...}" تعریف شده
    let scriptObject = {}
    try {
      // ما یک Function می‌سازیم که در آن کد جاوااسکریپت اجرا شود و خروجی را برگرداند.
      // توجه کنید که از امنیت و مشکلات eval/new Function آگاه باشید!
      const moduleForScript = { exports: {} }
      // مثلاً scriptCode = "export default { data() { return { msg: 'Hello' }}, ... }"
      // ما یک عبارت می‌سازیم که این کد را به moduleForScript.exports بچسباند.
      const codeToRun = `
        (function(module){ 
          ${props.scriptCode.replace('export default', 'module.exports =')} 
        })(arguments[0]);
      `
      new Function(codeToRun)(moduleForScript)
      scriptObject = moduleForScript.exports
    } catch (err) {
      console.error('Script compile error:', err)
      scriptObject = {
        data() {
          return { error: 'Invalid script code!' }
        }
      }
    }

    // 2) تلاش برای کامپایل قالب با استفاده از متد compile
    let compiledResult
    try {
      compiledResult = compile(props.templateCode, {
        mode: 'function' // خروجی را به‌صورت تابع رندر برمی‌گرداند
      })
    } catch (err) {
      console.error('Template compile error:', err)
      // یک خروجی جایگزین ساده
      compiledResult = { code: 'return () => h("div", {}, "Invalid template!")' }
    }

    // compiledResult.code یک رشتهٔ جاوااسکریپتی است که تابع رندر را برمی‌گرداند
    // ما آن را از طریق new Function تبدیل به تابع واقعی می‌کنیم
    let renderFn
    try {
      renderFn = new Function('Vue', compiledResult.code)(Vue)
    } catch (err) {
      console.error('Render function creation error:', err)
      renderFn = () => h('div', {}, 'Render function error!')
    }

    // 3) حالا یک کامپوننت جدید می‌سازیم که اسکریپت و رندر را با هم تلفیق کند
    const dynamicComponent = Vue.defineComponent({
      ...scriptObject,
      render: renderFn
    })

    // 4) در نهایت از JSX خودمان، آن کامپوننت را رندر می‌کنیم
    return () => h(dynamicComponent)
  }
})
