import React from 'react';

let slidePic = require('./saronicspire2.jpg');

const SlideTwo = (props) => {
  let background = {
    backgroundImage: "url(" + slidePic + ")",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // height: '700px'
  }
  let text = {
    height: '500px',
    backgroundColor: '#AFBDC5',
  }
  return (
    <div className="slide">
      <div  className="vessel1" style={background} >
      </div>
      <div className='slideText' style={text} >
        <strong> Saronic Spire </strong>
        <table className="fleet_table">
         <tr>
           <td className="td1">Type</td>
           <td className="td2"></td>
         </tr>
         <tr>
           <td className="td1">Build by / Year</td>
           <td className="td2">Imabari Shipbuilding Co. Ltd, Japan / 1997</td>
         </tr>
         <tr>
           <td className="td1">Deadweight</td>
           <td className="td2">28.545 dwt on 9.76 ssw</td>
         </tr>
         <tr>
           <td className="td1">Lightweight</td>
           <td className="td2">5.971 MT</td>
         </tr>
         <tr>
           <td className="td1">Class</td>
           <td className="td2">NKK</td>
         </tr>
         <tr>
           <td className="td1">Flag</td>
           <td className="td2">Bahamas</td>
         </tr>
         <tr>
           <td className="td1">Main Egine</td>
           <td className="td2">"MITSUI B&W 6S42MC"</td>
         </tr>
         <tr>
           <td className="td1">Generators</td>
           <td className="td2">2 x Yanmar</td>
         </tr>
         <tr>
           <td className="td1">Managed since</td>
           <td className="td2">2014</td>
         </tr>
        </table>
      </div>
    </div>
  )
}

export default SlideTwo;
