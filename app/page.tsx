"use client"
import FindWorkspace from "@/src/components/home/FindWorkspace";
import TopWorkspace from "@/src/components/home/TopWorkspace";
import HowItWorks from "@/src/components/home/HowItWorks";
import WhyChoose from "@/src/components/home/WhyChoose";
import UserSaying from "@/src/components/home/UserSaying";
import AskedQuestions from "@/src/components/home/AskedQuestions";
import BookWorkspace from "@/src/components/home/BookWorkspace";

export default function Home() {
  return (
<>
<FindWorkspace/>
<HowItWorks/>
<TopWorkspace/>
<WhyChoose/>
<UserSaying/>
<AskedQuestions/>
<BookWorkspace/>
</>    
  );
}
