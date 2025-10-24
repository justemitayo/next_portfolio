'use client'


import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Work from "./components/work";




export default function Home() {

    // const [isDarkMode, setIsDarkMode] = useState(false);
  
    // useEffect(() => {
    //   if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefer-color-scheme: dark)').matches)) {
    //     setIsDarkMode(true)
    //   } else {
    //     setIsDarkMode(false)
    //   }
    // }, [])
  
    // useEffect(() => {
    //   if (isDarkMode) {
    //     document.documentElement.classList.add("dark");
    //     localStorage.theme = 'dark'
    //   } else {
    //     document.documentElement.classList.remove("dark");
    //     localStorage.theme = ''
    //   }
    // }, [isDarkMode]);


  return (
    <>
      <Navbar/>
      <Header />
      <About />
      <Service />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
