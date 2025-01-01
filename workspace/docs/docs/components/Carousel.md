<Carousel :items="['https://knetic.org.uk/wp-content/uploads/2020/07/Pcture-Placeholder.png', 'https://www.getbgd.com/wp-content/uploads/2017/05/placeholder-image.png','https://knetic.org.uk/wp-content/uploads/2020/07/Pcture-Placeholder.png']"  variants="dots" />


<Carousel :items="['https://knetic.org.uk/wp-content/uploads/2020/07/Pcture-Placeholder.png', 'https://www.getbgd.com/wp-content/uploads/2017/05/placeholder-image.png','https://knetic.org.uk/wp-content/uploads/2020/07/Pcture-Placeholder.png']" autoPlay variants="number" />

<Carousel 
    :items="[
      'https://knetic.org.uk/wp-content/uploads/2020/07/Pcture-Placeholder.png', 
      'https://www.getbgd.com/wp-content/uploads/2017/05/placeholder-image.png',
      'https://knetic.org.uk/wp-content/uploads/2020/07/Pcture-Placeholder.png'
    ]"  
    variants="dots"  
    imageClass="w-[500px] h-[300px]" 
    arrowsClass="bg-green-500 text-green-800"
    autoPlay
  />