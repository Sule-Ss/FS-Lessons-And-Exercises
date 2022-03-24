const myStyle={
 parag:{
  color:"blue",
fontSize:"2rem",
fontWeight:"bolder"},
div: {
backgroundColor:"gray",
fontSize:"3.2rem"
}
// üstteki stili yoruma alıp, buraya import {myStyles} from './styles'; şeklinde bir import yaparsak style.jsx deki stilleri burada kullanmış oluruz
}
const Inline = () => {
  return (
    <>
      
<div style={{backgroundColor:"red", color:"#fff"}}> 

 <h1> Hello from inline CSS</h1>


<div  style={myStyle.div}>  
 <p style={myStyle.parag}>     Lorem ipsum dolor sit amet.
       </p>
</div>
</div>




    </>
  )
}

export default Inline
