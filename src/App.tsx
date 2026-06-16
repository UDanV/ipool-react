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
import PoolsPageSpaBox from "@/pages/Places/Pools"
import PoolsPage from "@/pages/Pools/PoolsPage"
import SpaBoxPage from "@/pages/SpaBox/SpaBoxPage"
import ScrollToTop from "@/components/ui/scrollToTop"
import AboutPage from "@/pages/About/AboutPage"
import ActivityPage from "@/pages/Activity/ActivityPage"
import SaunasPageSpaBox from "@/pages/Places/SaunasPage"
import SaunasPage from "@/pages/Saunas/SaunasPage"
import CompositePools from "./pages/Pools/CompositePools"
import ConcretePools from "./pages/Pools/ConcretePools"

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
          <Route path="/spa-box/kneipPath" element={<KneipPathPage />}/>
          <Route path="/spa-box/massageRoom" element={<MassageRoomPage />}/>
          <Route path="/spa-box/infraredCabin" element={<InfraredCabinPage />}/>
          <Route path="/spa-box/iceGenerator" element={<IceGeneratorPage />}/>
          <Route path="/spa-box/saunaCraxen" element={<CroxenSaunaPage />}/>
          <Route path="/spa-box/hamam" element={<HamamPage />}/>
          <Route path="/spa-box/impressionShower" element={<ImpressionShowerPage />}/>
          <Route path="/spa-box/saltRoom" element={<SaltRoomPage />}/>
          <Route path="/spa-box/pools" element={<PoolsPageSpaBox />}/>
          <Route path="/spa-box/saunas" element={<SaunasPageSpaBox />}/>
          <Route path="/spa-box/herbalSauna" element={<HerbalSaunaPage />}/>
          <Route path="/pools" element={<PoolsPage />}/>
          <Route path="/pools/composite" element={<CompositePools />}/>
          <Route path="/pools/concrete" element={<ConcretePools />}/>
          <Route path="/saunas" element={<SaunasPage />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
