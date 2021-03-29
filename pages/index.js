
import Layout from '../components/Layout'
import NavbarMenu from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
import Info from '../components/Info'
import Testimonials from '../components/Testimonials'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'


const Index = () => (

  <>
    <Layout>
      <div className="intro shadow p-3 mb-5 bg-dark rounded">
        <NavbarMenu/>
        <Header/>
      </div>
      <About/>
      <Info/>
      <Testimonials/>
      <Subscribe/>
      <Footer/>
    </Layout>
  </>
);

export default Index;
