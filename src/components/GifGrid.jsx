import { GifItem } from "./GifItem";
import { useConsultaGifs } from "../hooks/useConsultaGifs";


export const GifGrid = ({category}) => {

  const { images, isLoading } = useConsultaGifs(category)
  
 return (
    <>
    {
      isLoading && ( <h2>CARGANDO...</h2>)
    }
    <h3> {category} </h3>

    <div className="card-grid">
      { 
        images.map( (image ) => (
          < GifItem key={image.id} {...image} />
        ))
      }
    </div>
    </>
  )
}
