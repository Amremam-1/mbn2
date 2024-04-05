import Intro from "@/Components/Home/Intro/Intro"
import ServicePackage from "@/Components/Home/servicePackage/ServicePackage"
import BarLine from "@/Components/Home/barLine/BarLine"
import Info from "@/Components/Home/info/Info"
import ServiceContent from "@/Components/Home/serviceContent/ServiceContent"
import CounterPage from "@/Components/Home/counterpage/CounterPage"
import CompletedProjects from "@/Components/Home/completedProjects/CompletedProjects"
import Opinions from "@/Components/Home/OpinionsCustomers/Opinions"
import OurTeam from "@/Components/Home/ourTeam/OurTeam"
import Mechanism from "@/Components/Home/mechanism/Mechanism"
import OurPartners from "@/Components/Home/ourPartners/OurPartners"

export default function Home() {
  return (
    <main>
      <Intro />
      <ServicePackage />
      <BarLine />
      <Info />
      <BarLine />
      <ServiceContent />
      <BarLine />
      <CounterPage />
      {/* <OurTeam /> */}
      <CompletedProjects />
      <BarLine />
      <Opinions />
      <Mechanism />
      <OurPartners />
    </main>
  )
}
