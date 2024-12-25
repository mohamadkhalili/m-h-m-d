
<script setup>
const tabs = [
  { label: 'UI', value: 1, content: '' },
  { label: 'Slots', value: 2, content: ''},
  { label: 'Props', value: 3, content: ''},
];

</script>

## Card

`Card` components  simple example

<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    variant="shadow"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
    <template #content1>


<div class="  p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center ">
<Card cardClass="bg-white rounded-none w-full">
<template #title>
<h3>title</h3>
</template>
<template #description>
<p class="text-gray-500 text-sm">description</p>
</template>
</Card>
</div>
</template>

  <template #content2>

  ```md
<template #title> 
<h3>title</h3>
</template>
<template #description> 
<p class="text-gray-500 text-sm">description</p>
</template>

```

  </template>
    <template #content3>

```md

<Card
   description="description "
   title="Title "  
   class="bg-white h-44 w-56"
/> 
```

  </template>

</Tab>

## Footer and Header

this card use `footer` and ` header ` property !
<Tab
   class="gap-3 border-[1px] rounded-md w-full"
    :tabs="tabs"
    variant="shadow"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
    <template #content1>

<div class="  p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center ">
<Card
   class="bg-white w-56"  
>
<template #header>
header
</template>
<template #title>
<h3>title</h3>
</template>
<template #description>
<p class="text-gray-500 text-sm">description</p>
</template>
<template #footer>
footer
</template>
</Card>
</div>
</template>

  <template #content2>

  ```md
<Card class="bg-white w-56"  > 
<template #header> 
header
</template>
<template #title> 
<h3>title</h3>
</template>
<template #description> 
<p class="text-gray-500 text-sm">description</p>
</template>
<template #footer> 
footer
</template>
</Card>
```

  </template>
    <template #content3>

```md

<Card
description="description "
title="Title" 
footer="footer"
header="header " 
/> 
```

  </template>

</Tab>

## button

<Tab
  class="gap-3 border-[1px] rounded-md w-full"
  :tabs="tabs"
  variant="shadow"
  size="sm"
  activeColor="text-blue-500 shadow-blue-500"
>
  <template #content1>
    <div class="p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center ">
      <Card
        class="bg-white"
        >
         <template #title>
          <h3>Button Example</h3>
        </template>
        <template #description>
          <p  class="text-gray-500 text-sm">This is a simple button example.</p>
        </template>
        <template #footer>
          <Button variant="faded">Click Me</Button>
        </template>
      </Card>
    </div>
  </template>

  <template #content2>

  ```md
<Card class="bg-white w-56"  > 
 <Card 
class="bg-white" >
<template #title>
<h3>Button Example</h3>
</template>
<template #description>
<p  class="text-gray-500 text-sm">This is a simple button example.</p>
</template>
<template #footer>
<Button variant="faded">Click Me</Button>
</template>
</Card>
```

  </template>

  <template #content3>

  ```md

<Card
  description="This is a simple button example."
  title="Button Example"
  class="bg-white"
>
    <Button variant="faded">
      Check out
    </Button>

</Card>

```

  </template>

</Tab>

## image

<Tab
  class="gap-3 border-[1px] rounded-md w-full"
  :tabs="tabs"
  variant="shadow"
  size="sm"
  activeColor="text-blue-500 shadow-blue-500"
>

  <template #content1>
    <div class="  p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center ">

<Card
  title="Beautiful Sunset"
  description="A breathtaking view of the sunset   "
  image="https://rukminim2.flixcart.com/image/850/1000/jh80ia80/poster/x/g/a/medium-azohp7308-azohp7308-sunset-nature-full-hd-poster-original-imaf59zjfscwzuy5.jpeg?q=90&crop=false"
  footer=" More from this photographer"
   class="bg-white  "
>

<Button buttonClass="bg-gradient-to-r from-amber-500 to-pink-500 text-white  rounded-xl">
View
</Button>
</Card>
</div>

  </template>

  <template #content2>

  ```md
<Card 
  image="https://stacycorwin.com/wp-content/uploads/2018/12/sunrise-sunset.jpg" 
   class="bg-white  "
>
  <template #title>
    <h3>Beautiful Sunset</h3>
  </template>

  <template #description>
    <p>A breathtaking view of the sunset</p>
  </template>

  <template #footer>
    <p>More from this photographer</p>
   <Button buttonClass="bg-gradient-to-r from-amber-500 to-pink-500 text-white  rounded-xl">
      View
    </Button>
  </template>

</Card>

```

  </template>

  <template #content3>

  ```md

<Card 
  title="Beautiful Sunset" 
  description="A breathtaking view of the sunset   " 
  image="https://your-pic.jpg" 
  footer=" More from this photographer"
   class="bg-white  "
>

<Button class="shadow-inner ring-1 ring-blue-200 rounded-lg" variant="link">
View
</Button>
</Card>
```

  </template>

</Tab>

## image horizontal

<Tab
  class="gap-3 border-[1px] rounded-md w-full"
  :tabs="tabs"
  variant="shadow"
  size="sm"
  activeColor="text-blue-500 shadow-blue-500"
>

  <template #content1>
    <div class="  p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center ">

<Card
  title="Beautiful Sunset"
  description="A breathtaking view of the sunset   "
    image="https://rukminim2.flixcart.com/image/850/1000/jh80ia80/poster/x/g/a/medium-azohp7308-azohp7308-sunset-nature-full-hd-poster-original-imaf59zjfscwzuy5.jpeg?q=90&crop=false"
  footer=" More from this photographer"
   class="bg-white  "
   horizontal
>

<Button class="shadow-inner ring-1 ring-blue-200 rounded-lg" variant="link">
View
</Button>
</Card>
</div>

  </template>

  <template #content2>

  ```md
<Card 
  image="https://stacycorwin.com/wp-content/uploads/2018/12/sunrise-sunset.jpg" 
   class="bg-white  "
>
  <template #title>
    <h3>Beautiful Sunset</h3>
  </template>

  <template #description>
    <p>A breathtaking view of the sunset</p>
  </template>

  <template #footer>
    <p>More from this photographer</p>
    <Button class="shadow-inner ring-1 ml-2 ring-blue-200 rounded-lg" variant="link">
      View
    </Button>
  </template>

</Card>

```

  </template>

  <template #content3>

  ```md

<Card 
  title="Beautiful Sunset" 
  description="A breathtaking view of the sunset   " 
  image="https://your-pic.jpg" 
  footer=" More from this photographer"
   class="bg-white  "
>

<Button class="shadow-inner ring-1 ring-blue-200 rounded-lg" variant="link">
View
</Button>
</Card>
```

  </template>

</Tab>

## Variant

**Post**

<Tab
   class="gap-3 border-[1px] rounded-md w-full"
    :tabs="tabs"
    variant="shadow"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
    <template #content1>

<div class="  p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center ">
<Card
  description="This is a demo post from MHMD library 🔥"
  variant="post"
  avatar="https://avatar.iran.liara.run/public/50"
  username="John Doe"
  time="2h ago"
  info1="1.2K followers"
  info2="72 comments "
  info3="5.7K following"
  info4="1K ♥️"
>

<Button   buttonClass="rounded-full bg-blue-500  ring-2">
    follow
 </Button>
</Card>

</div>
</template>

  <template #content2>

  ```md
<Card  class="bg-white">
  <template #header>
    <div class="flex items-center space-x-2">
      <img src="https://avatar.iran.liara.run/public/50" alt="Avatar" class="w-10 h-10 rounded-full" />
      <div>
        <h3 class="font-bold text-gray-700">John Doe</h3>
        <p class="text-sm text-gray-500">2h ago</p>
      </div>
    </div>
    <Button   buttonClass="rounded-full bg-white  text-blue-500 ring-2">

      follow
    </Button>
  </template>

  <template #description>
    <p class="text-gray-700">
      This is a demo post from MHMD library 🔥
    </p>
  </template>

  <template #footer>
    <ul class="flex flex-row justify-center items-center  text-gray-500 text-sm ">
      <ol >1.2K followers</ol>
      <ol>72 comments</ol>
      <ol>5.7K following</ol>
      <ol>1K ♥️</ol>
    </ul>
    <div class="mt-4">
    </div>
  </template>
</Card>
```

  </template>
  <template #content3>

  ```md

<Card 
  description="This is a demo post from MHMD library 🔥" 
  variant="post"
  avatar="https://avatar.iran.liara.run/public/50"
  username="John Doe"
  time="2h ago"
  info1="1.2K followers"
  info2="72 comments "
  info3="5.7K following"
  info4="1K ♥️"
>

<Button   round="full">
    follow
 </Button>
</Card>
```

  </template>

</Tab>

**weather**

<Tab
   class="gap-3 border-[1px] rounded-md w-full"
    :tabs="tabs"
    variant="shadow"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
    <template #content1>
<div class="  p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center ">

<Card
  title="Tehran"
  description="cloudy"
  info1="Precipitation 0%"
  info2="humidity 10%"
  info3="123 km/h"
  info4="18°C"
  variant="weather"
  weatherImage="https://icon-library.com/images/weather-icon/weather-icon-2.jpg"
>
</Card>
</div>

</template>

  <template #content2>

  ```md
  <Card class="bg-white shadow-md rounded-lg p-4 "  
 weatherImage="https://icon-library.com/images/weather-icon/weather-icon-2.jpg">
  <template #header>
    <div class="flex justify-between items-center">
      <img src="https://weather.png" alt="Weather Icon" class="w-12 h-12" />
      <h3 class="text-xl font-bold">Tehran</h3>
    </div>
  </template>
  <template #description>
    <p class="text-gray-500 text-sm">Cloudy</p>
    <ul class="flex justify-between  text-sm text-gray-700">
      <ol>Humidity: 10%</ol>
      <ol>Wind: 123 km/h</ol>
      <ol>Temperature: 18°C</ol>
    </ul>
  </template>
</Card>

```

  </template>
  <template #content3>

  ```md
<Card 
  title="Tehran"
  description="cloudy"
  info2="humidity 10%"
  info3="123 km/h"
  info4="18°C"
  variant="weather"
  weatherImage="https://weather.png"
>
</Card>

```

  </template>

</Tab>

**progress**

<Tab
   class="gap-3 border-[1px] rounded-md w-full"
    :tabs="tabs"
    variant="shadow"
    activeColor="text-blue-500 shadow-blue-500"
    size="sm"
  >
    <template #content1>
<div class="  p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center ">

<Card
  variant="progress"
  title="Project Completion"
  info1="Progress: 75%"
  info2=75
  info3="Started on: Jan 10"
  info4="Deadline: Dec 25"
  description="This project is almost complete"
  class="bg-white"
>
</Card>
</div>

</template>

  <template #content2>

  ```md
  <Card class="bg-white shadow-md rounded-lg p-4">
  <template #header>
    <h3 class="text-xl font-bold">Project Completion</h3>
  </template>

  <template #description>
    <div class="mt-4">
      <div class="flex justify-between items-center mb-2">
        <span class="text-sm font-medium text-gray-700">Progress: 75%</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-4">
        <div
          class="bg-blue-500 h-4 rounded-full"
          style="width: 75%;"
        ></div>
      </div>
    <p class="text-gray-500 text-sm">This project is almost complete</p>
    </div>
    <ul class="mt-4 justify-between p-2 flex text-sm text-gray-700">
      <ol>Started on: Jan 10</ol>
      <ol>Deadline: Dec 25</ol>
    </ul>
  </template>

</Card>

```

  </template>
  <template #content3>

  ```md
<Card
  variant="progress"
  title="Project Completion"
  info1="Progress: 75%"
  info2=75
  info3="Started on: Jan 10"
  info4="Deadline: Dec 25"
  description="This project is almost complete"
  class="bg-white"
>
</Card>
```

  </template>

</Tab>

## Features

| **Feature**        | **Description**                                                                                             | **Usage**                                                                                             |
|---------------------|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| **Basic Card**      | Display a card with a title and description.                                                                | Use the `title` and `description` props to set content.                                              |
| **Header & Footer** | Add additional context above and below the card content.                                                    | Use the `header` and `footer` props for customization.                                               |
| **Image Support**   | Include an image to enhance visual presentation.                                                            | Use the `image` prop to pass an image URL.                                                           |
| **Horizontal Layout** | Arrange content in a horizontal format, useful for media-focused cards.                                    | Set the `horizontal` prop to `true`.                                                                 |
| **Post Variant**    | Create a social media-like post layout with user details and actions.                                       | Set the `variant` prop to `post` and use related props like `avatar`, `username`, and `info1`-`info4`. |
| **Weather Variant** | Display weather details in a card format, including an image and key metrics.                              | Set the `variant` prop to `weather` and provide props like `weatherImage` and `info1`-`info4`.       |
| **Progress Variant**| Showcase project or task progress with percentage and milestones.                                          | Set the `variant` prop to `progress` and include props like `info1`-`info4` for details.             |
