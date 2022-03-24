import "./Card.scss"


const Card = ({veri}) => {
//  {veri}= bu yazım verinin eşitinde ne varsa o demek yani App.js deki eşiti {data}. {data} nın {data}= bu yazım datanın eşiti demek yani object=dizinin elemanları
  return (
    <div className="container">
https://github.com/clarusway/clarusway-full-stack-10-21/tree/main/react/class-notes
 {/* 
 map yapmadan alttaki gibi yapsaydık her card için aynı satırları yazmak zorunda kalırdık
<h1>{dataa[0].countries}</h1>
<img src={dataa[0].img}/>
 <h2>{dataa[0].capital}</h2> */}
 { veri.map((eleman)=>{
  //destructuring
  const {id, countries, capital, img,population} = eleman
  return(

<div className="card" key={id}    >
{/* react üstte unique bir veri istiyor, data nın içinde gezip verileri ayrıştırırken emin olabilmek için */}
 <h1>{ countries }</h1>
      <img src={img }/>
<h2> {capital}</h2>
<h4>{population}</h4>
  
  <button className="card--small">SMALL</button>
  <button className="card--large">LARGE</button>
      </div>


  )
 })    }

      
    </div>
  )
}

export default Card
