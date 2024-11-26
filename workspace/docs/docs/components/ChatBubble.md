## ChatBubble

The `ChatBubble` component allows you to display messages in a chat-like interface. Below is a basic example of how to use it:

<div class="p-8 rounded-xl shadow-inner flex  items-center">


<ChatBubble 
 >
this is a massage for you !
</ChatBubble>

</div>

**Code**

```html
<ChatBubble>
this is a test!
</ChatBubble>

```



## Side

you can select Your Side for Massage with `Side` option
<div class="p-8 rounded-xl shadow-inner ">


<ChatBubble Side="left" color="bg-violet-600  text-white">
hi there !
</ChatBubble>

<ChatBubble Side="right" color="bg-amber-500 text-white" >
hello
</ChatBubble>


</div>


**Code**

```md

<ChatBubble Side="left" color="bg-violet-600  text-white">
hi there !
</ChatBubble>

<ChatBubble Side="right" color="bg-amber-500 text-white" >
hello
</ChatBubble>

```





## Sub ChatBubble
<br/>

You can also display timestamps or message status with `leftSubChat` and `rightSubChat`
<br/>


<div class="p-8 rounded-xl shadow-inner ">


<ChatBubble 
  Side="left" 
  leftSubChat="12:02" 
  rightSubChat="Delivered"
  color="bg-gray-200 "
 >
  Pretty good as well. Want to grab coffee later?
</ChatBubble>

<ChatBubble 
  Side="right" 
  leftSubChat="12:03" 
  rightSubChat="Read" 
>
  Sure thing, see you at 4 PM!
</ChatBubble>
</div>

**Code**
```md
<ChatBubble 
  Side="left" 
  leftSubChat="12:02" 
  rightSubChat="Delivered"
  color="bg-gray-200 "
 >
  Pretty good as well. Want to grab coffee later?
</ChatBubble>

<ChatBubble 
  Side="right" 
  leftSubChat="12:03" 
  rightSubChat="Read" 
>
  Sure thing, see you at 4 PM!
</ChatBubble>
```



## Header ChatBubble
<br/>

You can also display timestamps or message status with `Header` and `HeaderSub`
<br/>


<div class="p-8 rounded-xl shadow-inner ">


<ChatBubble 
  Side="left" 
  leftSubChat="10:42" 
  rightSubChat="Delivered"
  color="bg-green-300 "
   Header="Sara" 
  HeaderSub="sister"
 >
  this is preview with Header and headerSub
</ChatBubble>

<ChatBubble 
  Side="right" 
  leftSubChat="11:13" 
  rightSubChat="sent" 
  color="bg-rose-300 "
   Header="Ali" 
  HeaderSub="friend"
>
  this is preview with Header and headerSub
</ChatBubble>
</div>

**Code**
```md
<ChatBubble 
  Side="left" 
  leftSubChat="10:42" 
  rightSubChat="Delivered"
  color="bg-green-300 "
   Header="Sara" 
  HeaderSub="sister"
 >
  this is preview with Header and headerSub
</ChatBubble>

<ChatBubble 
  Side="right" 
  leftSubChat="11:13" 
  rightSubChat="sent" 
  color="bg-rose-300 "
   Header="Ali" 
  HeaderSub="friend"
>
  this is preview with Header and headerSub
</ChatBubble>
```


## Colorizing

You can change your subColor  with `subColor` option!
<div class="p-8 rounded-xl shadow-inner ">
<ChatBubble 
  Side="left" 
  leftSubChat="10:42" 
  rightSubChat="Delivered"
  color="bg-gray-300  "
   Header="Sara" 
  HeaderSub="sister"
  subColor="text-rose-600"
 >
  this is subColor with red theme !
</ChatBubble>

<ChatBubble 
  Side="right" 
  leftSubChat="11:13" 
  rightSubChat="sent" 
   Header="Ali" 
  HeaderSub="friend"
  color="bg-gray-800 text-white"
  subColor="text-yellow-600"
>
 and this with  Yellow !
</ChatBubble>
</div>

**Code**
```md
<ChatBubble 
  Side="left" 
  leftSubChat="10:42" 
  rightSubChat="Delivered"
  color="bg-gray-300  "
  Header="Sara" 
  HeaderSub="sister"
  subColor="text-rose-600"    <--! Just Change this -->
 >
  this is subColor with red theme !
</ChatBubble>
```

## Avatar

For a more personalized chat experience, you can include an `Avatar` for each user

<div class="w-full shadow-inner">

<ChatBubble 
  Side="left" 
  Avatar="https://avatar.iran.liara.run/public/91"
  leftSubChat="22:12" 
  rightSubChat="Delivered"
  Header="Sara" 
  color="bg-yellow-400"
  HeaderSub="client">
  i have some issue
</ChatBubble>

<ChatBubble 
  Side="right" 
  leftSubChat="22:17" 
  Avatar="https://avatar.iran.liara.run/public/28"
  rightSubChat="Read" 
  color="bg-gray-500 text-white"
  Header="John" 
  HeaderSub="Admin">
  lets Fix that together
  
</ChatBubble>

</div>

**Code**
```md
<ChatBubble 
  Side="left" 
  Avatar="https://avatar.iran.liara.run/public/91"
  leftSubChat="22:12" 
  rightSubChat="Delivered"
  Header="Sara" 
  color="bg-yellow-400"
  HeaderSub="client">
  i have some issue
</ChatBubble>

<ChatBubble 
  Side="right" 
  leftSubChat="22:17" 
  Avatar="https://avatar.iran.liara.run/public/28"
  rightSubChat="Read" 
  color="bg-gray-500 text-white"
  Header="John" 
  HeaderSub="Admin">
  lets Fix that together
  
</ChatBubble>

```

## Typing
 You can use `typing` when you need  <br/>
- this option ignore  your text  and Sub ChatBubble
<div class="w-full shadow-inner">

<ChatBubble 
  Side="right" 
  Avatar="https://avatar.iran.liara.run/public/91"
  leftSubChat="14:12" 
  rightSubChat="Delivered"
  Header="Sara" 
  color="bg-purple-600 text-white"
  >
  where are you from ?
</ChatBubble>




<ChatBubble 
  Side="left" 
  leftSubChat="22:17" 
  Avatar="https://avatar.iran.liara.run/public/28"
  rightSubChat="Read" 
  color="bg-green-400 text-white"
  typing
  Header="John" 
  >
  lets Fix that together
  
</ChatBubble>

</div>

**Code**
```md
<ChatBubble 
  Side="left" 
  leftSubChat="22:17" 
  Avatar="https://avatar.iran.liara.run/public/28"
  rightSubChat="Read" 
  color="bg-gray-400 text-white"
  typing             <--! Just add this -->
  Header="John" 
  >
  
  
</ChatBubble>
```


## Customize 
you can use another component like button in Chat Bubble   !
<div class="w-full shadow-inner">
<ChatBubble
 Header="Admin"
leftSubChat="Sent ✓✓"
Avatar="https://avatar.iran.liara.run/public/20"
>
Download this file 
<Button
 class="inline"
  round="lg"
  variant="faded"
  size="sm"
   >
File.pdf ↓
</Button>
 </ChatBubble>

 <ChatBubble Header="engineer" Side="right" leftSubChat="Sending  82% " color="bg-green-600 text-white"   class="p-0 m-0" Avatar="https://avatar.iran.liara.run/public/21">
 Checkout
<Button class="inline " round="lg" variant="faded" size="sm" >
File.pdf ↓ 
</Button>

 </ChatBubble>
</div>

**Code**

```md
<ChatBubble
 Header="Admin"
leftSubChat="Sent ✓✓"
Avatar="https://avatar.iran.liara.run/public/20"
>
Download this file 
<Button
 class="inline"
  round="lg"
  variant="faded"
  size="sm"
   >
File.pdf ↓
</Button>
 </ChatBubble>

```


<div class="w-full shadow-inner">
<ChatBubble
 Header="scott"
 HeaderSub="PhotoGraph"
leftSubChat="Sent ✓✓"
rightSubChat="11:12"
color="bg-orange-700 text-white"
Avatar="https://avatar.iran.liara.run/public/50"
 :Images="['https://wallpapercrafter.com/desktop1/550550-fall-leaves-autumn-leaf-nature-yellow-tree-season.jpg']"
>
its my new photo
 </ChatBubble>
<ChatBubble
 Header="Emilia"
 Side="right"
leftSubChat="Sent ✓✓"
rightSubChat="17:47"
color="bg-gray-500 text-white"
Avatar="https://avatar.iran.liara.run/public/90"
 :Images="['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Agomr1rNCyqrpB2Co_D9I1mJHLFmiAKo1A&s', 'https://media.foodpress.ir/d/2024/02/14/4/36560.jpg?ts=1707903454000', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXG28Cj6UWHoyg7-TdZdv9DUmHwNIZo7c1Sw&s','https://salamdonya.com/assets/images/66/66872rxfb.jpg','https://avatar.iran.liara.run/public/26', 'https://avatar.iran.liara.run/public/27']"
>
checkout this pictures 
 </ChatBubble>
</div>

## ChatBubble Component Features

| **Feature**             | **Description**                                                                                                   | **Usage**                                                                                   |
|-------------------------|-------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| **Default Message**      | Basic example displaying a message with default styling. This is the simplest usage, without any extra configuration. | Pass the message content inside the `ChatBubble` component.                                 |
| **Customize Colors**     | Customize the text and background colors of the message bubble. This is done through the `color` prop.               | Set the `color` prop to modify the background and text colors (e.g., `bg-blue-500 text-white`).|
| **Avatar**               | Include an avatar image for the sender for a more personalized chat experience.                                    | Pass an `Avatar` prop with the URL of the avatar image.                                     |
| **Side**                 | Control the side of the chat bubble (left or right). Helps differentiate between the user and recipient.            | Set the `Side` prop to either `left` or `right`.                                             |
| **Sub-Chat**             | Display timestamps or message statuses under the main message. Can be used for time and delivery status.            | Use the `leftSubChat` and `rightSubChat` props for timestamps or status.                   |
| **Typing Indicator**     | Display an animation while the other user is typing. When set to `true`, the component shows a typing animation.     | Set the `typing` prop to `true` to show the typing animation.                               |
| **Header and HeaderSub** | Show the sender's name and additional context (e.g., role or relation).                                            | Pass `Header` and `HeaderSub` props to display the sender's name and additional details.    |
| **Responsive Layout**    | Layout adapts based on the presence of avatars and the side of the message.                                        | Avatar placement and message alignment change depending on the `Side` prop value.          |
| **Sub Color**            | Customize the color of the text for sub-elements like timestamps or statuses.                                       | Set the `subColor` prop to modify the color of the sub-elements (e.g., `text-rose-600`).     |
