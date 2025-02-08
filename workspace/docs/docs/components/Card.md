## Card

`Card` components  simple example

<CodeTabs
  templateCode="
<div class='p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center'>
  <Card cardClass='bg-white w-40'>
    <template #title>
      <h3>title</h3>
    </template>
    <template #description>
      <p class='text-gray-500 text-sm'>description</p>
    </template>
  </Card>
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
      };
    }
  }
  "
/>

## Footer and Header

this card use `footer` and ` header ` property !

<CodeTabs
  templateCode="
<div class='p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center'>
  <Card class='bg-white w-56'>
    <template #header>
      header
    </template>
    <template #title>
      <h3>title</h3>
    </template>
    <template #description>
      <p class='text-gray-500 text-sm'>description</p>
    </template>
    <template #footer>
      footer
    </template>
  </Card>
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
      };
    }
  }
  "
/>

## button

<CodeTabs
  templateCode="
<div class='p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center'>
  <Card class='bg-white'>
    <template #title>
      <h3>Button Example</h3>
    </template>
    <template #description>
      <p class='text-gray-500 text-sm'>This is a simple button example.</p>
    </template>
    <template #footer>
      <Button variant='faded'>Click Me</Button>
    </template>
  </Card>
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
      };
    }
  }
  "
/>

## image

<CodeTabs
  templateCode="
<div class='p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center'>
  <Card
    title='Beautiful Sunset'
    description='A breathtaking view of the sunset'
    image='https://rukminim2.flixcart.com/image/850/1000/jh80ia80/poster/x/g/a/medium-azohp7308-azohp7308-sunset-nature-full-hd-poster-original-imaf59zjfscwzuy5.jpeg?q=90&crop=false'
    footer='More from this photographer'
    class='bg-white'
  >
    <Button buttonClass='bg-indigo-700 hover:bg-indigo-600 text-white rounded-xl'>
      View
    </Button>
  </Card>
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
      };
    }
  }
  "
/>

## image horizontal

<CodeTabs
  templateCode="
<div class='p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center'>
  <Card
    title='Beautiful Sunset'
    description='A breathtaking view of the sunset'
    image='https://rukminim2.flixcart.com/image/850/1000/jh80ia80/poster/x/g/a/medium-azohp7308-azohp7308-sunset-nature-full-hd-poster-original-imaf59zjfscwzuy5.jpeg?q=90&crop=false'
    footer='More from this photographer'
    class='bg-white'
    horizontal
  >
    <Button class='shadow-inner ring-1 ring-blue-200 rounded-lg' variant='link'>
      View
    </Button>
  </Card>
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
      };
    }
  }
  "
/>

## Variant

**Post**

<CodeTabs
  templateCode="
<div class='p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center'>
  <Card
    description='This is a demo post from MHMD library 🔥'
    variant='post'
    avatar='https://avatar.iran.liara.run/public/50'
    username='John Doe'
    time='2h ago'
    info1='1.2K followers'
    info2='72 comments'
    info3='5.7K following'
    info4='1K ♥️'
  >
    <Button class='rounded-full bg-indigo-700 ring-2 mr-4'>
      follow
    </Button>
  </Card>
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
      };
    }
  }
  "
/>

**weather**

<CodeTabs
  templateCode="
<div class='p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center'>
  <Card
    title='Tehran'
    description='cloudy'
    info1='Precipitation 0%'
    info2='humidity 10%'
    info3='123 km/h'
    info4='18°C'
    variant='weather'
    weatherImage='https://icon-library.com/images/weather-icon/weather-icon-2.jpg'
  >
  </Card>
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
      };
    }
  }
  "
/>

**progress**

<CodeTabs
  templateCode="
<div class='p-6 rounded-lg shadow-inner bg-slate-500/10 flex justify-center items-center'>
  <Card
    variant='progress'
    title='Project Completion'
    info1='Progress: 75%'
    info2='75'
    info3='Started on: Jan 10'
    info4='Deadline: Dec 25'
    description='This project is almost complete'
    class='bg-white'
  >
  </Card>
</div>
  "
  scriptCode="
  export default {
    data() {
      return {
      };
    }
  }
  "
/>

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
