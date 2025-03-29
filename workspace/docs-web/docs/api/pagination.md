# pagination API Documentation



## Emits

| name | description |
| -------- | ------- |
| update:modelValue | Change the page it is on |
| update:searchPage | Change the page it is on with search page input |
| update:isEditingSearchPage | Change display the icon or enter input mode |



## Props

| <div style="font-weight: bold;font-size:16px">name</div> | type | default | description |
| -------- | ------- | ------- | ------- |
| <div style="color : #100069FF;font-weight: bold;">    page-size</div> | <div style="color : #55CF65FF; text-align: center"> Number</div> |<div style="color : #241891FF; text-align: center"> 20 </div> | <div style="color : #505050FF;font-size: 12px">Size of pages</div> |
| <div style="color : #100069FF;font-weight: bold;">    model-value</div> | <div style="color : #55CF65FF; text-align: center"> Number</div> |<div style="color : #241891FF; text-align: center"> 1 </div> | <div style="color : #505050FF;font-size: 12px">the page it is on</div> |
| <div style="color : #100069FF;font-weight: bold;">    search-page</div> | <div style="color : #55CF65FF; text-align: center"> Number</div> |<div style="color : #241891FF; text-align: center"> 0 </div> | <div style="color : #505050FF;font-size: 12px">the page it is on with search page input</div> |
| <div style="color : #100069FF;font-weight: bold;">    enable-search-page</div> | <div style="color : #55CF65FF; text-align: center"> Boolean</div> |<div style="color : #241891FF; text-align: center"> true </div> | <div style="color : #505050FF;font-size: 12px">Whether to create a search page or not</div> |
| <div style="color : #100069FF;font-weight: bold;">    is-editing-search-page</div> | <div style="color : #55CF65FF; text-align: center"> Boolean</div> |<div style="color : #241891FF; text-align: center"> false </div> | <div style="color : #505050FF;font-size: 12px"> Whether to display the icon or enter input mode</div> |
| <div style="color : #100069FF;font-weight: bold;">    active-class</div> | <div style="color : #55CF65FF; text-align: center"> String</div> |<div style="color : #241891FF; text-align: center"> '' </div> | <div style="color : #505050FF;font-size: 12px">test test activeClass</div> |
| <div style="color : #100069FF;font-weight: bold;">    on-active-class</div> | <div style="color : #55CF65FF; text-align: center"> String</div> |<div style="color : #241891FF; text-align: center"> '' </div> | <div style="color : #505050FF;font-size: 12px">test test onActiveClass</div> |
| <div style="color : #100069FF;font-weight: bold;">    button-class</div> | <div style="color : #55CF65FF; text-align: center"> String</div> |<div style="color : #241891FF; text-align: center"> '' </div> | <div style="color : #505050FF;font-size: 12px">test test buttonClass</div> |
| <div style="color : #100069FF;font-weight: bold;">    separator-class</div> | <div style="color : #55CF65FF; text-align: center"> String</div> |<div style="color : #241891FF; text-align: center"> '' </div> | <div style="color : #505050FF;font-size: 12px">test test separatorClass</div> |
| <div style="color : #100069FF;font-weight: bold;">    page-size</div> | <div style="color : #55CF65FF; text-align: center"> Number</div> |<div style="color : #241891FF; text-align: center"> 20</div> | <div style="color : #505050FF;font-size: 12px">Size of pages</div> |
| <div style="color : #100069FF;font-weight: bold;">    model-value</div> | <div style="color : #55CF65FF; text-align: center"> Number</div> |<div style="color : #241891FF; text-align: center">undefined</div> | <div style="color : #505050FF;font-size: 12px">the page it is on</div> |
| <div style="color : #100069FF;font-weight: bold;">    search-page</div> | <div style="color : #55CF65FF; text-align: center"> Number</div> |<div style="color : #241891FF; text-align: center">undefined</div> | <div style="color : #505050FF;font-size: 12px">the page it is on with search page input</div> |
| <div style="color : #100069FF;font-weight: bold;">    rtl</div> | <div style="color : #55CF65FF; text-align: center"> Boolean</div> |<div style="color : #241891FF; text-align: center"> true </div> | <div style="color : #505050FF;font-size: 12px">Placement should be from right to left (if it is false, it will be reversed)</div> |
| <div style="color : #100069FF;font-weight: bold;">    is-editing-search-page</div> | <div style="color : #55CF65FF; text-align: center"> Boolean</div> |<div style="color : #241891FF; text-align: center">undefined</div> | <div style="color : #505050FF;font-size: 12px"> Whether to display the icon or enter input mode</div> |



## Slots
| <div style="font-weight: bold;font-size:16px">name</div> | props(namne:type) | description |
| -------- | ------- | ------- |
| <div style="color : #100069FF;font-weight: bold;">    super-prev</div> | <div style="color : #55CF65FF; text-align: center">disabled:boolean<br/></div> |<div style="color : #505050FF;font-size: 12px">The slot for the button that goes to the start page</div> |
| <div style="color : #100069FF;font-weight: bold;">    prev</div> | <div style="color : #55CF65FF; text-align: center">disabled:boolean<br/></div> |<div style="color : #505050FF;font-size: 12px">Slot for the button that goes to the prev page</div> |
| <div style="color : #100069FF;font-weight: bold;">    default</div> | <div style="color : #55CF65FF; text-align: center">isCurrentPage:boolean<br/>isActive:boolean<br/>page:number<br/></div> |<div style="color : #505050FF;font-size: 12px">Slot for making all pages</div> |
| <div style="color : #100069FF;font-weight: bold;">    next</div> | <div style="color : #55CF65FF; text-align: center">disabled:boolean<br/></div> |<div style="color : #505050FF;font-size: 12px">Slot for the button that goes to the next page</div> |
| <div style="color : #100069FF;font-weight: bold;">    super-next</div> | <div style="color : #55CF65FF; text-align: center">disabled:boolean<br/></div> |<div style="color : #505050FF;font-size: 12px">The slot for the button that goes to the end page</div> |
| <div style="color : #100069FF;font-weight: bold;">    search-page</div> | <div style="color : #55CF65FF; text-align: center">enabled:boolean<br/></div> |<div style="color : #505050FF;font-size: 12px">A slot for making input and button to enter the page number that you want to go to</div> |
| <div style="color : #100069FF;font-weight: bold;">    super-prev</div> | <div style="color : #55CF65FF; text-align: center">disabled:boolean<br/>rtl:boolean<br/></div> |<div style="color : #505050FF;font-size: 12px">The slot for the button that goes to the start page</div> |
| <div style="color : #100069FF;font-weight: bold;">    prev</div> | <div style="color : #55CF65FF; text-align: center">disabled:boolean<br/>rtl:boolean<br/></div> |<div style="color : #505050FF;font-size: 12px">Slot for the button that goes to the prev page</div> |
| <div style="color : #100069FF;font-weight: bold;">    default</div> | <div style="color : #55CF65FF; text-align: center">isCurrentPage:boolean<br/>isActive:boolean<br/></div> |<div style="color : #505050FF;font-size: 12px">Slot for making all pages</div> |
| <div style="color : #100069FF;font-weight: bold;">    next</div> | <div style="color : #55CF65FF; text-align: center">disabled:boolean<br/>rtl:boolean<br/></div> |<div style="color : #505050FF;font-size: 12px">Slot for the button that goes to the next page</div> |
| <div style="color : #100069FF;font-weight: bold;">    super-next</div> | <div style="color : #55CF65FF; text-align: center">disabled:boolean<br/>rtl:boolean<br/></div> |<div style="color : #505050FF;font-size: 12px">The slot for the button that goes to the end page</div> |
| <div style="color : #100069FF;font-weight: bold;">    search-page</div> | <div style="color : #55CF65FF; text-align: center">enabled:boolean<br/></div> |<div style="color : #505050FF;font-size: 12px">A slot for making input and button to enter the page number that you want to go to</div> |

