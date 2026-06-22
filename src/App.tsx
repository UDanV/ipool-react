import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "@/pages/Main/MainPage"
import Layout from "@/components/layout/Layout"
import Works from "@/pages/Works/WorksPage"
import Contacts from "@/pages/Contacts/ContactsPage"
import SpaBoxPlacePage from "@/pages/Places/SpaBoxPlacePage"
import PoolsPage from "@/pages/Pools/PoolsPage"
import SpaBoxPage from "@/pages/SpaBox/SpaBoxPage"
import ScrollToTop from "@/components/ui/scrollToTop"
import AboutPage from "@/pages/About/AboutPage"
import ActivityPage from "@/pages/Activity/ActivityPage"
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
          <Route path="/spa-box/kneipPath" element={<SpaBoxPlacePage place="kneipPath" />}/>
          <Route path="/spa-box/massageRoom" element={<SpaBoxPlacePage place="massageRoom" />}/>
          <Route path="/spa-box/infraredCabin" element={<SpaBoxPlacePage place="infraredCabin" />}/>
          <Route path="/spa-box/iceGenerator" element={<SpaBoxPlacePage place="iceGenerator" />}/>
          <Route path="/spa-box/saunaCraxen" element={<SpaBoxPlacePage place="saunaCraxen" />}/>
          <Route path="/spa-box/hamam" element={<SpaBoxPlacePage place="hamam" />}/>
          <Route path="/spa-box/impressionShower" element={<SpaBoxPlacePage place="impressionShower" />}/>
          <Route path="/spa-box/saltRoom" element={<SpaBoxPlacePage place="saltRoom" />}/>
          <Route path="/spa-box/pools" element={<SpaBoxPlacePage place="pools" />}/>
          <Route path="/spa-box/saunas" element={<SpaBoxPlacePage place="saunas" />}/>
          <Route path="/spa-box/herbalSauna" element={<SpaBoxPlacePage place="herbalSauna" />}/>
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
