
function About(props){
  //If theres no image use this as a default image
  const defaultImage = "https://via.placeholder.com/215";
return(
  <aside>
    <img alt="blog logo" src= {props.image || defaultImage}></img>
    <p>{props.about}</p>
  </aside>
)
}
export default About;