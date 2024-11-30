
<script setup>
const tabs = [
  { label: 'Slots', value: 1, content: '' },
  { label: 'Props', value: 2, content: ''}
];




</script>

# Card 




`Card` components  simple example

<div class="  p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center ">
<Card
    description="description "
   title="Title "  
   class="bg-white h-44 w-56"
/> 
</div>

**Code**

```md
<Card description="description "title="Title "  /> 
```

## Footer and Header

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

**Code**
 




<Tab 
   class="gap-3 border-[1px] rounded-md w-full"
    :tabs="tabs" 
    variant="bordered"
    activeColor="text-blue-500 shadow-blue-300"
  >

  <template #content1>

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
    <template #content2>

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









##  button 


<div class="  p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center ">


<Card
  description="Here are the biggest enterprise technology acquisitions of 2025 so far, in reverse chronological order."
  title="Noteworthy technology acquisitions 2025"
  header="invitation"
  class="bg-white"
>
  <template #footer>
    <Button variant="faded">
      Check out
    </Button>
  </template>
</Card>

</div>


**Code**
```md
<Card
description="Here are the biggest enterprise technology acquisitions of 
        2025 so far, in reverse chronological order. "
title="Noteworthy technology acquisitions 2025" 
header="invitation " 
   class="bg-white  "
> 
<Button  variant="faded">
Check out
</Button>
</Card>
```

‍‍
##  image 

<div class="  p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center ">


<Card 
  title="Beautiful Sunset" 
  description="A breathtaking view of the sunset   " 
  image="https://stacycorwin.com/wp-content/uploads/2018/12/sunrise-sunset.jpg" 
  footer=" More from this photographer"
   class="bg-white  "
>
<Button class="shadow-inner ring-1 ring-blue-200 rounded-lg" variant="link">
View
</Button>
</Card>
</div>

</br>

##  image  horizontal
<div class="  p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center ">

<Card 
  title="Beautiful Sunset" 
  description="A breathtaking view of the sunset   " 
  image="https://stacycorwin.com/wp-content/uploads/2018/12/sunrise-sunset.jpg" 
  footer=" More from this photographer"
  horizontal
   class="bg-white  "
>
 <Button class="shadow-inner ring-1 ring-blue-200 rounded-lg" variant="link">
    View
  </Button>
</Card>
</div>

```md
<Card 
  title="Beautiful Sunset" 
  description="A breathtaking view of the sunset   " 
  image="https://your_image.jpg" 
  footer=" More from this photographer"
  class="bg-white  "
  horizontal
>
 <Button class="shadow-inner  rounded-lg" variant="link">
    View
 </Button>
</Card>
```
## Variant


**Post**


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

<Button   round="full">
    follow
 </Button>
</Card>
</div>

**Code**

```md
<Card 
  description="This is a demo post from MHMD library 🔥" 
  variant="post"
  avatar="https://avatar.com"
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

‍‍‍**Code**

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
<span class="animate-pulse w-fit ">߷</span>
</Card>
</div>

**Code**

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
<span class="animate-pulse w-fit ">߷</span>
</Card>
```

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

---
