import React,{useState} from 'react'
import NavBar from '../components/navbar'
import Header from '../components/Header'
import AboutUs from '../components/sectionAboutUs'
import SectionProductos from '../components/SectionProductos'
import SideBar from '../components/SideBar'

//importar data de secciones
import {infoProductosUno,
  infoProductosDos,
  infoProductosTres,
  infoProductosCuatro,
  infoProductosCinco,
  infoProductosSeis,
  infoProductosSiete,
  infoProductosOcho,
  infoProductosNueve
} from '../components/SectionProductos/productos_info'
import Contacto from '../components/sectionContacto'
import MessageButton from '../components/wp/Wp'
import Footer from '../components/footer'
import CookieMessage from '../components/Cookies/Cookies'



const Home = () => {

  const [isOpen,setIsOpen] = useState(false);

  const toggle = ()=>{
      setIsOpen(!isOpen);
  }

  return (
    <>
    <SideBar isOpen={isOpen} toggle={toggle}/>
    <NavBar toggle={toggle}/>
    <Header/>
    <AboutUs/>

    <h1 style={{
      color:'black',
      margin : '60px auto',
      textAlign : 'center'
          }}
    >
      Catalogo de nuestros productos
    </h1>
    
    <SectionProductos {...infoProductosUno} />
    <SectionProductos {...infoProductosDos} />
    <SectionProductos {...infoProductosTres} />
    <SectionProductos {...infoProductosCuatro} />
    <SectionProductos {...infoProductosCinco} />
    <SectionProductos {...infoProductosSeis} />
    <SectionProductos {...infoProductosSiete} />
    <SectionProductos {...infoProductosOcho} />
    <SectionProductos {...infoProductosNueve} />
    <Contacto/>
    <MessageButton/>
    <Footer></Footer>
    <CookieMessage/>
    </>
  )
}

export default Home;