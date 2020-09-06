import Head from 'next/head'
import Layout from '../Components/Layout';
import AboutSection from '../Components/AboutSection';
import ContactSection from '../Components/ContactSection';
import HelloPopup from '../Components/HelloPopup';
import NotifyPopup from '../Components/NotifyPopup';
import PortfolioSection from '../Components/PortfolioSection';





export default function Home() {
  return (
    <Layout>
      

      <AboutSection />

      <PortfolioSection />

      <ContactSection />

      <NotifyPopup />

      <HelloPopup />

      


    </Layout>
  )
}
