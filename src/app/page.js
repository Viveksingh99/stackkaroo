import Banner from "@/components/Banner";
import Choose from "@/components/Choose-Us";
import Services from "@/components/Digital-Services";
import Navbar from "@/components/Navbar";
import Seo from "@/components/SEO-Services";
import SmallCard from "@/components/SmallCard";
import StoryPage from "@/components/StoryPage";
import Hiring from "@/components/Talent-Hiring";


export default function Home() {
  return (
   <>
   <Navbar/>
   <Banner/>
   <SmallCard/>
   <StoryPage/>
   <Choose/>
   <Services/>
   <Seo/>
   <Hiring/>
   </>
  );
}
