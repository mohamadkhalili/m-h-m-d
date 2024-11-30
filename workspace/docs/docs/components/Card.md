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
description="description "
   title="Title" 
   footer="footer"
   class="bg-white w-56"
    header="header " 
/> 
</div>

**Code**

```md
<Card
description="description "
title="Title" 
footer="footer"
header="header " 
/> 
```

##  button 


<div class="  p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center ">


<Card
description="Here are the biggest enterprise technology acquisitions of 2025 so far, in reverse chronological order. "
   title="Noteworthy technology acquisitions 2025" 
    header="invitation " 
   class="bg-white  "
> 
<Button  variant="faded">
Check out
</Button>
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
