import './App.css';
import React,{useState} from "react";

function App(){

  const[sisi, setSisi] = useState("") 
  const[tinggi, setTinggi] = useState("")
  const[jari, setJari] = useState("")
  const[Volume, setVolume] = useState("")
  
  let phi
  if(jari%7 === 0){
    phi = 22/7
  }
  else {
    phi = 3.14
  }

  console.log(`sisi : ${sisi}`)
  console.log(`tinggi : ${tinggi}`)
  console.log(`jari : ${jari}`)
  console.log(`phi: ${phi}`)

  function Hitung(){
    setVolume(1/3 * phi * jari**2 * tinggi)
  }

  return(
    <div class = "App">
    <p class="judul">VOLUME KERUCUT</p>

        <p class ="x">
        Masukan Jari-jari (r) (cm)
      </p>
      <input type = "text" value = {jari} onChange = {e=> setJari(+e.target.value)}></input>

      <p class = "x">
        Masukan Tinggi (t) (cm)
      </p>
      <input type = "text" value = {tinggi} onChange = {e=> setTinggi(+e.target.value)}></input>

      <p>
        <button onClick = {Hitung}>HITUNG</button>
      </p>

      <p class = "y">
        {Volume} cm<sup>3</sup>
      </p>

    </div>
  );

}
export default App;