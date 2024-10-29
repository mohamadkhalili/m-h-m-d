<script setup>



</script>

<template>
    <div class="container-input">
        <input id="MainInput" :placeholder="title" ><slot ></slot> 
    </div>
</template>

<style>


#MainInput{
   border: 1px rgb(153, 153, 153) solid;
   padding: 8px 8px ;
   border-radius: 10px;
   background: #f7f7f79a;
transition-property: all;
transition-duration: 200ms;
   
}
#MainInput:hover , #MainInput:active  {
    box-shadow: 
      inset 0 0px 2px rgba(156, 156, 156, 0.1), 
      0 0 0 2px rgba(255, 255, 255, 0.39),
      0 0 0 3px rgba(158, 203, 255, 0.795), 
      0 0 0 5px rgba(14, 155, 190, 0.034);
    border-color: rgba(0, 81, 255, 0.5); 
}

.container-input {
  
  
}

</style>