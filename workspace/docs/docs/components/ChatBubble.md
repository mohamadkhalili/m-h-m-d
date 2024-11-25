
# ChatBubble Component

The `ChatBubble` component allows you to display messages in a chat-like interface. Below is a basic example of how to use it:

<ChatBubble Side="right" Header="Ali" HeaderSub="owner">
  Hey! How's it going?
</ChatBubble>


This will display a simple chat message aligned to the right.

---

### 2. **با Header و بدون SubChat**

You can customize the chat bubble further by adding a `Header` and `HeaderSub` to provide additional information:


<ChatBubble 
  Side="left" 
  Header="Ali" 
  HeaderSub="owner">
  dasdasdasdasda
</ChatBubble>

<ChatBubble 
  Side="right" 
  Header="Ali" 
  HeaderSub="owner">
  test
</ChatBubble>


In this example:
- The `Header` is the name of the user.
- The `HeaderSub` is additional info such as the user's role.

---

### 3. **با اضافه کردن `leftSubChat` و `rightSubChat`**

You can also display timestamps or message status with `leftSubChat` and `rightSubChat`:


<ChatBubble 
  Side="left" 
  leftSubChat="12:02" 
  rightSubChat="Delivered"
  Header="Ali" 
  HeaderSub="owner">
  Pretty good as well. Want to grab coffee later?
</ChatBubble>

<ChatBubble 
  Side="right" 
  leftSubChat="12:03" 
  rightSubChat="Read" 
  Header="Ali" 
  HeaderSub="owner">
  Sure thing, see you at 4 PM!
</ChatBubble>


- `leftSubChat` can show the time when the message was sent.
- `rightSubChat` shows the delivery status (e.g., `Read`, `Delivered`).

---

### 4. **معرفی چت با آواتار**

For a more personalized chat experience, you can include an `Avatar` for each user:
<div class="w-full bg-slate-300">

<ChatBubble 
  Side="left" 
  Avatar="https://avatar.iran.liara.run/public/91"
  leftSubChat="12:02" 
  rightSubChat="Delivered"
  Header="Sara" 
  HeaderSub="client">
  i have some issue
</ChatBubble>

<ChatBubble 
  Side="right" 
  leftSubChat="12:03" 
  Avatar="https://avatar.iran.liara.run/public/28"
  rightSubChat="Read" 
  Header="John" 
  HeaderSub="Admin">
  lets Fix that together
</ChatBubble>
</div>
In this example:
- `Avatar` is the image link for the user's avatar, placed alongside the message.

---

### 5. **رنگ بندی متنوع برای چت‌ها**

You can customize the colors of the chat bubbles by modifying the `Side` prop or by applying custom CSS classes:


<ChatBubble 
  Side="left" 
  Header="Ali" 
  HeaderSub="owner" 
  :style="{ backgroundColor: '#f3f4f6', color: '#333' }">
  How about a coffee later today?
</ChatBubble>

<ChatBubble 
  Side="right" 
  Header="John" 
  HeaderSub="friend" 
  :style="{ backgroundColor: '#f3f', color: '#333' }"
  >
  Sure, see you at 4 PM!
</ChatBubble>


You can use different background colors or apply other styles as per your requirements. The chat bubbles will adjust accordingly.

---

Feel free to mix and match these features to create a chat interface that fits your needs! The `ChatBubble` component is highly customizable, and you can adjust it to match the design of your application.