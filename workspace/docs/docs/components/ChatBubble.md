## ChatBubble

The `ChatBubble` component allows you to display messages in a chat-like interface. Below is a basic example of how to use it:

<div class="p-8 rounded-xl shadow-inner flex  items-center">
  <ChatBubble>this is a test!</ChatBubble>
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


<ChatBubble Side="left" color="bg-gray-600 text-white">
hi there !
</ChatBubble>

<ChatBubble Side="right" >
hello
</ChatBubble>


</div>


**Code**

```md

<ChatBubble Side="left" color="bg-gray-600 text-white">
hi there !
</ChatBubble>

<ChatBubble Side="right" >
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

You can also display timestamps or message status with `Header` and `subHeader`
<br/>


<div class="p-8 rounded-xl shadow-inner ">


<ChatBubble 
  Side="left" 
  leftSubChat="10:42" 
  rightSubChat="Delivered"
  color="bg-gray-200 "
   Header="Sara" 
  HeaderSub="sister"
 >
  Pretty good as well. Want to grab coffee later?
</ChatBubble>

<ChatBubble 
  Side="right" 
  leftSubChat="11:13" 
  rightSubChat="sent" 
   Header="Ali" 
  HeaderSub="friend"
>
  Sure thing, see you at 4 PM!
</ChatBubble>
</div>

**Code**
```md
<ChatBubble 
  Side="left" 
  leftSubChat="10:42" 
  rightSubChat="Delivered"
  color="bg-gray-200 "
   Header="Sara" 
  HeaderSub="sister"
 >
  Pretty good as well. Want to grab coffee later?
</ChatBubble>

<ChatBubble 
  Side="right" 
  leftSubChat="11:13" 
  rightSubChat="sent" 
   Header="Ali" 
  HeaderSub="friend"
>
  Sure thing, see you at 4 PM!
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

<div class="w-full bg-slate-200">

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
<div class="w-full bg-slate-200">

<ChatBubble 
  Side="right" 
  Avatar="https://avatar.iran.liara.run/public/91"
  leftSubChat="14:12" 
  rightSubChat="Delivered"
  Header="Sara" 
  color="bg-yellow-400"
  >
  where are you from ?
</ChatBubble>




<ChatBubble 
  Side="left" 
  leftSubChat="22:17" 
  Avatar="https://avatar.iran.liara.run/public/28"
  rightSubChat="Read" 
  color="bg-gray-400 text-white"
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

## ChatBubble Component Features

| **Feature**             | **Description**                                                                                                   | **Usage**                                                                                   |
|-------------------------|-------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| **Default Message**      | Basic example displaying a message with default styling. This is the simplest usage, without any extra configuration. | Pass the message content inside the `ChatBubble` component.                                 |
| **Customize Colors**     | Customize the text and background colors of the message bubble. This is done through the `color` prop.               | Set the `color` prop to modify the background and text colors (e.g., `bg-blue-500 text-white`).|
| **Avatar**               | Include an avatar image for the sender for a more personalized chat experience.                                    | Pass an `Avatar` prop with the URL of the avatar image.                                     |
| **Side**                 | Control the side of the chat bubble (left or right). Helps differentiate between the user and recipient.            | Set the `Side` prop to either `left` or `right`.                                             |
| **Sub-Chat**             | Display timestamps or message statuses under the main message. Can be used for time and delivery status.            | Use the `leftSubChat` and `rightSubChat` props for timestamps or status.                   |
| **Typing Indicator**     | Display an animation while the other user is typing. When set to `true`, the component shows a typing animation.     | Set the `typing` prop to `true` to show the typing animation.                               |
| **Header and Subheader** | Show the sender's name and additional context (e.g., role or relation).                                            | Pass `Header` and `HeaderSub` props to display the sender's name and additional details.    |
| **Message Length Styling** | Customize the chat bubble's shape based on the length of the message. Short messages get rounded corners, long messages have square corners. | Use the `isLongMessage` function to dynamically apply styles for long messages.             |
| **Responsive Layout**    | Layout adapts based on the presence of avatars and the side of the message.                                        | Avatar placement and message alignment change depending on the `Side` prop value.          |
