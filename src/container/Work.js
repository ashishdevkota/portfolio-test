import pro1 from "./assets/project 1.png"
import pro2 from "./assets/project 2.png"

import Card from "./Card"
let Work = () => {
  return (
    <div class="my-work">
      <h3 id="my-work" class="mainheading">
        My Work
      </h3>
      <p class="description">
        I specialize website design and development but i’ve also designed
        successful ios and android apps.
      </p>

      
      <div class="projects">

        <Card mainheading="A Band Website" description=" A web app to help you foster meaningful relationships within your community through events. Get people registered for your events without any hassle." src={pro1} />
        
         <Card mainheading="A Band Website" description=" A web app to help you foster meaningful relationships within your community through events. Get people registered for your events without any hassle." src={pro2} />
      
     
      </div>
    </div>
  );
};

export default Work;
