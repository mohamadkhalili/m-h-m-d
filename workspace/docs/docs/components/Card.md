# Card 



`Card` components  simple example

<div class="  p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center ">
<Card
    description="description "
   title="Title "  
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

## Card with button 


<div class="  p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center ">


<Card
description="Here are the biggest enterprise technology acquisitions of 2025 so far, in reverse chronological order. "
   title="Noteworthy technology acquisitions 2025" 
    header="invitation " 
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
> 
<Button  variant="faded">
Check out
</Button>
</Card>
```

‍‍
## Card with image 

<div class="  p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center ">


<Card 
  title="Beautiful Sunset" 
  description="A breathtaking view of the sunset   " 
  image="https://stacycorwin.com/wp-content/uploads/2018/12/sunrise-sunset.jpg" 
  footer=" More from this photographer"
>
<Button class="shadow-inner ring-1 ring-blue-200 rounded-lg" variant="link">
View
</Button>
</Card>
</div>

</br>

## Card with image  horizontal
<div class="  p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center ">

<Card 
  title="Beautiful Sunset" 
  description="A breathtaking view of the sunset   " 
  image="https://stacycorwin.com/wp-content/uploads/2018/12/sunrise-sunset.jpg" 
  footer=" More from this photographer"
  horizontal
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
  horizontal
>
 <Button class="shadow-inner  rounded-lg" variant="link">
    View
 </Button>
</Card>
```
## Post Simple theme

<div class="  p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center ">

<Card 
  title="Beautiful Sunset" 
  description="This is a demo post from MHMD library" 
  variant="post"
  avatar="https://avatar.iran.liara.run/public/50"
  username="John Doe"
  time="2h ago"
  followers="1.2K"
  comments="72"
  following="5.7K"
  likes="1K"
>

<Button   round="full">
    follow
 </Button>
</Card>
</div>
