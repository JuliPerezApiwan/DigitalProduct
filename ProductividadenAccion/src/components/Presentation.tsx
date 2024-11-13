import React from "react";
import styled from "styled-components";
import trading from "../assets/images/trading.png"
import marketing from "../assets/images/marketing.png"
import photoCicle from "../assets/images/photoCicle.png"


export default function Presentation() {
    return (
        <>
        <Todo>
            <PresentationWrapper>
            <Description>
                <Text>
                    Bienvenido a un espacio digital donde encontrarás herramientas poderosas para alcanzar tus metas.
                    Te ofrecemos una selección de productos digitales de alta calidad, con acceso a contenido avanzado.
                    Vas a poder aprender sobre habilidades en tendencia que haran crecer tu potencial!
                </Text>
                
                <Frase>
                   <b>Explora, aprende y crece en el mundo digital con nosotros.</b>
                   {/* ✨ ¡Empieza hoy mismo tu transformación! ✨</b> */}
                </Frase>

            </Description>

        </PresentationWrapper>
        <PresentationWrapper>
                <Description>
            <Text><b>¿Quieres aprender, crecer y mejorar tu vida?</b> 
            <br />
                Todo diseñado para ayudarte a progresar y generar nuevas oportunidades! 
                <br />
                
                <br />
                Nuestras memebresias te conectan con productos que transforman conocimiento en resultados. 
                Es el <b>momento perfecto</b> para dar ese primer paso hacia tu futuro. Aprovecha las herramientas que tenemos para vos y comienza hoy mismo a transformar tus sueños en realidad. No desaproveches esta oportunidad!
            </Text>
                </Description>

            </PresentationWrapper>
            </Todo>
           
            <BeneficiosContainer>
          <Beneficios>  
            <TitleBeneficios>BENEFICIOS</TitleBeneficios>
            ✔️ SIN EXPERIENCIA PREVIA NECESARIA:<br />
            <p>Comienza desde cero y aprende a tu propio ritmo, sin requisitos previos.</p> <br />  
            ✔️ FLEXIBILIDAD HORARIA: <br />
            <p>Controla tus horarios y trabaja desde donde quieras;<br />
            vos decidis cuándo y dónde.</p><br />  
            ✔️ SOLO NECESITAS UN CELULAR O COMPUTADORA Y UNA CONEXION A INTERNET<br />  
            <p>Acceso desde cualquier dispositivo</p> <br />
            ✔️ CRECIMIENTO SIN LIMITES<br />
            <p>Llega a miles de personas con el mismo esfuerzo,<br />
            aumentando tus ingresos sin aumentar tus horas de trabajo.</p><br />  
            ✔️ INMEDIATEZ:<br />
            <p>Empieza a generar ingresos desde el primer momento siguiendo<br />
            un paso a paso efectivo que nosotros te brindamos</p><br />  
<h2>¡Da el primer paso hacia la libertad de tiempo<br /> 
  y dinero con tu propio negocio digital!</h2>  
           <Frase>
            <p><b>Tenes la oportunidad de aprender y también generar ingresos de forma inmediata!
            <br />Adquiris un producto UNA SOLA VEZ y lo vendes MILES DE VECES!</b> </p></Frase>
         
            </Beneficios>
            </BeneficiosContainer>
            
            <ProdctsContainer>
              <TradingMarketingContainer>
               
                <ul>
                <li><b>Domina Estrategias Avanzadas:</b> Aprende desde los fundamentos hasta las tácticas más avanzadas del trading, con contenido actualizado para que siempre estés a la vanguardia.</li>
                <br />
                <li><b>Capacitación en Herramientas de Análisis:</b> Adquiere habilidades prácticas en análisis de mercado, gestión de riesgos y uso de plataformas líderes.</li>
                <br />
                <li><b>Simulaciones Sin Riesgo:</b> Practica en simuladores para perfeccionar tu estrategia sin poner en riesgo tu capital.</li>
                <br />
                <li><b>Acompañamiento y Mentoría:</b> Accede a una comunidad de expertos y mentores que te guiarán en cada paso de tu aprendizaje y te ayudarán a evitar los errores más comunes.</li>
                <Frase>🎯 Desbloquea tu potencial en el mundo del trading y conviértete en un experto en decisiones estratégicas!</Frase>
                <Info>
                  <a href="https://wa.me/542945640417?text=Hola!%20Quiero%20saber%20más%20sobre%20tus%20productos." target="_blank" rel="noopener noreferrer">
                    <i className="pi pi-whatsapp" /> 
                    &nbsp;Envíame un mensaje para mas información
                    </a> 
                </Info>
                </ul>
                <Image src={trading} alt="Producto digital" />
                </TradingMarketingContainer>
                
                <TradingMarketingContainer>
                  <ul>
                  <li><b>Construye una Fuente de Ingresos Digital:</b> Aprende a generar ingresos recurrentes mediante el marketing de afiliados, trabajando desde cualquier lugar.</li>
                  <br />
                  <li><b>Capacitación en Estrategias de Venta Digital:</b> Accede a los mejores métodos para captar clientes y maximizar tus ingresos en redes sociales y otras plataformas digitales.</li>
                  <br />
                  <li><b>Acceso a Recursos y Plantillas Exclusivas:</b> Aprovecha herramientas y plantillas que optimizan tu trabajo y aumentan tu productividad.</li>
                  <br />
                  <li><b>Networking y Comunidad de Apoyo:</b> Conéctate con una red de personas que comparten tus intereses y descubre oportunidades únicas de colaboración y crecimiento.</li>
                  <br />
                  <Frase>🌐 Conviértete en un experto en marketing digital y construye tu camino hacia la libertad financiera!</Frase>
                  <Info>
                  <a href="https://wa.me/123456789?text=Hola!%20Quiero%20saber%20más%20sobre%20tus%20productos." target="_blank" rel="noopener noreferrer">
                    <i className="pi pi-whatsapp" /> 
                    &nbsp;Envíame un mensaje para mas información
                    </a> 
                </Info>
                  </ul>
                   <Image src={marketing} alt="Producto digital" />
                </TradingMarketingContainer>
             
               
            </ProdctsContainer>
            <Footer>
      <ContactInfo>
        <h2>Julieta Perez Apiwan</h2>
        <p>Marketer Digital</p>
        <p>Programadora Jr</p>
        <p>+542945640417</p>
        <p>julieta.perezapiwan@gmail.com</p>
      </ContactInfo>
      <PhotoContainer>
        <img src={photoCicle} alt="Foto de perfil" />
      </PhotoContainer>
    </Footer>

            </>
    );
}

const PresentationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  width: 45%; 
  height: 300px; 
  padding: 2rem;
  margin: 4rem 0 4rem 0rem;
  background: radial-gradient(#2C3E50, transparent);
  border-radius: 5rem;
  border-bottom: 2px solid black;
  border-top: 2px solid black;
  color: white;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 90%;
    padding: 1.5rem;
}
`;


const Description = styled.div`
display: flex;
flex-direction: column;
  line-height: 1.6;
  color: azure;
`;
const Text = styled.p`
font-family: "Roboto Condensed", sans-serif;  
font-size: 1.3rem;
  line-height: 1.6;
  color: azure;
  text-shadow: -0.5px -0.5px 0 white, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000;
  text-align: center;

  @media (max-width: 768px) {
   font-size: 0.8rem;
}
`
const Frase = styled.p`
padding: 1.1rem;
font-family: "Roboto Condensed", sans-serif; 
  font-size: 1.2rem;
  line-height: 1.6;
  color: azure;
  background-color: white;
  border-radius: 5rem;
  color: black;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
 }
  `

  const Todo = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

  const ProdctsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 20rem;
  height: 30rem;
  border-radius: 3rem;
  margin-top: 0.5rem;
`;

const TradingMarketingContainer = styled.div`
display: flex;
flex-direction: row;
width: 70%;
border:1rem solid #2C3E50;
border-radius: 5rem;
padding: 2rem;
background-color: black;

li {
  font-size: 1.3rem;
  margin: 0.2rem;
  margin-left: 1rem; 
  margin-right: 1rem;
}

a {
  text-align: center;  
  border: 0.1rem solid white;
  border-radius: 5rem;    
  background-color: #00bb2d;
  color: black;
  padding: 0.7rem;
}
@media (max-width: 768px) {
  flex-direction: column-reverse; /* Cambia la disposición de la imagen a vertical */
  width: 90%; /* Hace que el contenedor ocupe todo el ancho */
  padding: 1rem; /* Ajusta el padding para pantallas pequeñas */

  li {
    font-size: 1rem; /* Ajusta el tamaño de fuente */
  }

  a {
    padding: 0.5rem; /* Ajusta el padding del botón */
  }

  img {
   
    object-fit: contain; /* Asegura que la imagen se ajuste dentro del contenedor sin distorsión */
    display: block; /* Elimina el espacio debajo de la imagen */
    margin: 0 auto; /* Centra la imagen horizontalmente */
  }
}
`
const Beneficios = styled.div`
font-family: "DM Sans", sans-serif;
  font-size: 1.2rem;
  line-height: 1.6;
  color: black;
  
  text-align: center;
  background: linear-gradient(355deg, #95ffc1 0, #81fcc3 12.5%, #6defc3 25%, #5ce0bf 37.5%, #4dceb9 50%, #42bcb1 62.5%, #3bada9 75%, #379fa2 87.5%, #36949c 100%);
  border: 0.5rem solid black;
  border-radius: 5rem;
  padding: 2rem;
  text-align: center;
  margin: -2rem;
  
  p {
    margin: 0;
  }

  h2 {
    font-family: "Ranchers", sans-serif;
    font-size: 2rem;
    color: #2C3E50;
    text-shadow: none

  }
  @media (max-width: 768px) {
    width: 90%; /* Hace que el contenedor ocupe todo el ancho */
    padding: 1rem; /* Ajusta el padding para pantallas pequeñas */
    font-size: 1rem;

    h2 {
      font-size: 1.5rem;
    }
`;

const BeneficiosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    width: 100%; /* Hace que el contenedor ocupe todo el ancho */
   
`;

const Info = styled.div`          
  text-align: center;       
  margin-top: 1.3rem;     
`;

const TitleBeneficios = styled.h1`
font-family: "Ranchers", sans-serif;
  font-size: 3em;
  color:#2C3E50;
  text-align: center;
 margin: 1rem`

 const Footer = styled.footer`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 1rem;
 background-color: #2C3E50;
 color: white;
 width: 100%;
 margin-top: 1rem;
`;

const ContactInfo = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 max-width: 50%;

 h2 {
   font-size: 1.5em;
   margin: 0;
 }

 p {
   margin: 0;
   font-style: italic;
 }
`;

const PhotoContainer = styled.div`
  max-width: 150px; 
  max-height: 150px;
  border-radius: 50%;
  border: 2px solid white;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
  }
`;