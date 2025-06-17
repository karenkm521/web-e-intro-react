import {Card} from "./components/Card"



function App() {
  return (
    <>
        <Card
        nombre="Carlos"
        profesion="Maestro"
        descripcion="La educacion es la clave"
        direccion="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/D3QIY2ZCYVGKJP5EBFAGDNNT7U.png"
        />
        <Card
        nombre="Irene"
        profesion="Doctora"
        descripcion="La prevención es clave para la salud"
        direccion="https://img.freepik.com/fotos-premium/retrato-bastante-joven-doctora-mirando-camara-mientras-esta-pie-oficina_519356-2693.jpg"
        />
          <Card
        nombre="Luis"
        profesion="Abogado"
        descripcion="Nadie sobre la Ley"
        direccion="https://blogs.imf-formacion.com/blog/corporativo/wp-content/uploads/2018/12/mentir-abogados-cliente-consecuencias.jpg"
        />
    </>
  )
}

export default App;
