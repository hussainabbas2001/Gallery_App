import React from 'react'

const Show = (props) => {
    const {gallery, setgallery} = props;
    let cardlist = (
        <h2 className="w-100 text-center text-danger mt-5">Empty Gallery!</h2>
      )
      
      
      const deletehandler = ((index)=>{
        let copygallery = [...gallery]
        copygallery.splice(index, 1)
        setgallery(copygallery)
      })
    
    
    if(gallery.length > 0){
      cardlist = gallery.map((card,index)=>(
         <div key={index} className="card me-3 mb-3 mt-2" style={{width: "18rem"}}>
        <img src={card.url} className="card-img-top" alt="..."/>
        <div className="card-body d-flex justify-content-between align-item-center">
          <span>
        <h5 className="card-title">{card.author}</h5>
        <p className="card-text">{card.title}</p>
        </span>
        <i>
        <i onClick={()=> deletehandler(index)} className=" fs-5 text-danger ri-delete-bin-6-line"></i>
        </i>
      </div>
    </div> 
      ))
    }
  return (
    <div>
       <div className="container d-flex flex-nowrap">
      {cardlist}
    </div>
    </div>
  )
}

export default Show
