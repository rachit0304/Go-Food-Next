import Caraousel from "../../components/Caraousel";
import Filter_buttons from "../../components/Filter_buttons";
import Heading from "../../components/Heading";
import Script from "next/script";
import Navbar from '../../components/Navbar'
import Restaurants from "../../components/Restaurants";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <main>

    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossOrigin="anonymous" strategy="lazyOnload" ></Script>
    <Script src="https://kit.fontawesome.com/2dc833f5b3.js" crossOrigin="anonymous" strategy="lazyOnload"></Script>
    <Script src="/index.js"></Script>  {/* it clones the button in navbar using javascript */}
    {/* <Navbar/> */}
    <Caraousel/>
    <Filter_buttons/>
    <Heading/>
    <Restaurants/>
  
    </main>
  );
}
