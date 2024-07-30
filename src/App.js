import React,{useState} from 'react';
import Card from './Gallery/card';
import sdata from './Gallery/sdata';
import './Gallery/gallery.css'


function App(){
  const [items,setItems] = useState(sdata)

  const filterSdata = (category) => {
    const updatedItmes = sdata.filter((currElement) => {
      return currElement.category === category
    });
    setItems(updatedItmes)
  }

  const filterSdataAll = () => {
    setItems(sdata)
  }
  return (
    <div className="App">
      <header className='header'>
        <div className='netflix'><h1>MoSeS</h1></div>
        <div className='head_list'><a href='#' alt=""><buttom onClick={() => filterSdata('Adventure')}>Adventure</buttom></a></div>
        <div className='head_list'><a href='#' alt=""><buttom onClick={() => filterSdata('Webseries')}>Webseries</buttom></a></div>
        <div className='head_list'><a href='#' alt=""><buttom onClick={() => filterSdata('Horror')}>Horror</buttom></a></div>
        <div className='head_list'><a href='#' alt=""><buttom onClick={() => filterSdata('Sci-fi')}>Sci-fi</buttom></a></div>
        <div className='head_list'><a href='#' alt=""><buttom onClick={() => filterSdata('Comedy')}>Comedy</buttom></a></div>
        <div className='head_list'><a href='#' alt=""><buttom onClick={() => filterSdata('Fantacy')}>Fantacy</buttom></a></div>
        <div className='head_list'><a href='#' alt=""><buttom onClick={() => filterSdata('Drama')}>Drama</buttom></a></div>
        <div className='head_list'><a href='#' alt=""><buttom onClick={() => filterSdataAll()}>All</buttom></a></div>
      </header>
      <div className='container'>
        <div className='box'>
          {items.map(function ncard(val){
            return(
              <Card imgsrc={val.imgsrc}
                    discription={val.discription}
                    sname={val.sname}
                    link={val.links}
              />
            )
          })}
        </div>
      </div>
      <hr/>
      <footer className='foot'></footer>
    </div>
  );
}



export default App;

