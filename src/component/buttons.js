import React, {useState} from 'react';

const Button = () => {
    const[count1,setCount1]=useState(0);
    const[count2,setCount2]=useState(0);
    const[count3,setCount3]=useState(0);
    const[count4,setCount4]=useState(0);
    const[count5,setCount5]=useState(0);
    const[count6,setCount6]=useState(0);
    const[count7,setCount7]=useState(0);
    const[count8,setCount8]=useState(0);
    const[count9,setCount9]=useState(0);
    const[count10,setCount10]=useState(0);
    const[count11,setCount11]=useState(0);
    const[count12,setCount12]=useState(0);
    const[count13,setCount13]=useState(0);
    const[count14,setCount14]=useState(0);
    const[count15,setCount15]=useState(0);
    
    const inc1=()=>{
      setCount1(count1+1);
    }
    const inc2=()=>{
        setCount2(count2+1);
      }
      const inc3=()=>{
        setCount3(count3+1);
      }
      const inc4=()=>{
        setCount4(count4+1);
      }
      const inc5=()=>{
        setCount5(count5+1);
      }
      const inc6=()=>{
        setCount6(count6+1);
      }
      const inc7=()=>{
        setCount7(count7+1);
      }
      const inc8=()=>{
        setCount8(count8+1);
      }
      const inc9=()=>{
        setCount9(count9+1);
      }
      const inc10=()=>{
        setCount10(count10+1);
      }
      const inc11=()=>{
        setCount11(count11+1);
      }
      const inc12=()=>{
        setCount12(count12+1);
      }
      const inc13=()=>{
        setCount13(count13+1);
      }
      const inc14=()=>{
        setCount14(count14+1);
      }
      const inc15=()=>{
        setCount15(count15+1);
      }

    //   Récupérer les count des button avec className montagne et en faire la moyenne
    

    return (
        <div>
            <h1>Button</h1>
            <h2>Montagne</h2>
            <button className='montagne' onClick={inc1}>Afrique du sud</button> {count1}
            <button className='montagne' onClick={inc2}>Perou</button> {count2}
            <button className='montagne' onClick={inc3}>Grece</button> {count3}
            <button className='montagne' onClick={inc4}>Japon</button> {count4}
            <button className='montagne' onClick={inc5}>Australie</button> {count5}

            <h2>Mer</h2>
            <button className='mer' onClick={inc6}>Afrique du sud</button> {count6}
            <button className='mer' onClick={inc7}>Perou</button> {count7}
            <button className='mer'onClick={inc8}>Grece</button> {count8}
            <button className='mer'onClick={inc9}>Japon</button> {count9}
            <button className='mer'onClick={inc10}>Australie</button> {count10}

            <h2>Ville</h2>
            <button className='ville' onClick={inc11}>Afrique du sud</button> {count11}
            <button className='ville' onClick={inc12}>Perou</button> {count12}
            <button className='ville' onClick={inc13}>Grece</button> {count13}
            <button className='ville' onClick={inc14}>Japon</button> {count14}
            <button className='ville' onClick={inc15}>Australie</button> {count15}
        </div>
    );
} 
export default Button;