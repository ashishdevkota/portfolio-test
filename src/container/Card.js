
let Card = ({mainheading,description,src}) => {
    return (
            <div class="card">
          <h4 class="mainheading">{mainheading}</h4>
          <p class="description">
            {description}
          </p>
          <button class="card-btn">view project</button>
          <div className="img-container">
            <img src={src} alt="proj1" />
          </div>
        </div> 
    )
}


export default Card