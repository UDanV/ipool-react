import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "@/pages/Main/MainPage"
import Layout from "@/components/layout/Layout"
import Works from "@/pages/Works/WorksPage"
import Contacts from "@/pages/Contacts/ContactsPage"
import KneipPathPage from "@/pages/Places/KneipPathPage"
import MassageRoomPage from "@/pages/Places/MassageRoomPage"
import InfraredCabinPage from "@/pages/Places/InfaredCabinPage"
import IceGeneratorPage from "@/pages/Places/IceGeneratorPage"
import CroxenSaunaPage from "@/pages/Places/CroxenSaunaPage"
import HerbalSaunaPage from "@/pages/Places/HerbalSaunaPage"
import HamamPage from "@/pages/Places/HamamPage"
import ImpressionShowerPage from "@/pages/Places/ImpressionShowerPage"
import SaltRoomPage from "@/pages/Places/SaltRoomPage"
import PoolsPage from "@/pages/Places/Pools"
import SaunasPage from "@/pages/Places/SaunasPage"
import SpaBoxPage from "@/pages/SpaBox/SpaBoxPage"
import ScrollToTop from "@/components/ui/scrollToTop"
import AboutPage from "@/pages/About/AboutPage"
import ActivityPage from "./pages/Activity/ActivityPage"

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/works" element={<Works />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/activity" element={<ActivityPage />}/>
          <Route path="/contacts" element={<Contacts />}/>
          <Route path="/spa-box" element={<SpaBoxPage />}/>
          <Route path="/kneipPath" element={<KneipPathPage />}/>
          <Route path="/massageRoom" element={<MassageRoomPage />}/>
          <Route path="/infraredCabin" element={<InfraredCabinPage />}/>
          <Route path="/iceGenerator" element={<IceGeneratorPage />}/>
          <Route path="/saunaCroxen" element={<CroxenSaunaPage />}/>
          <Route path="/hamam" element={<HamamPage />}/>
          <Route path="/impressionShower" element={<ImpressionShowerPage />}/>
          <Route path="/saltRoom" element={<SaltRoomPage />}/>
          <Route path="/pools" element={<PoolsPage />}/>
          <Route path="/saunas" element={<SaunasPage />}/>
          <Route path="/herbalSauna" element={<HerbalSaunaPage />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
