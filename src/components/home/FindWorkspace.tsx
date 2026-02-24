import Link from "next/link";
import CustomButton from "../ui/CustomButton"
import CustomInput from "../ui/CustomInput"
import "./Home.css"
const FindWorkspace = () => {
 const baseurl = "http://localhost/myapp/images";   

  return (
   <>
   <section>
    <div className="container">
        <div className="flex pb-[30px] md:pb-[68px] xl:flex-row flex-col-reverse    w-full gap-[24px] md:gap-0 xl:justify-between  font-inter items-center">
            <div className="flex flex-col gap-[30px]  md:gap-[40px] max-w-[659px]">
                <div className="flex flex-col gap-3 md:gap-4"> 
                    <h4 className='font-medium xl:text-[63px] lg:text-[54px] text-[32px]  leading-[120%]'>Find Your Perfect Workspace, Anytime.</h4>
              <p className='xl:text-[24px] lg:text-[20px] text-sm max-w-[520px] w-full text-darkGray leading-[130%]'>Discover and book coworking spaces that match your style and needs.</p></div>
              <div className="border_linear max-w-[563px] rounded-[24px] p-[0.5px_0.8px_0.5px_1px] w-full">

              <div className="md:pt-[30px]  colorset border_linear md:pr-[24px] rounded-[24px] flex flex-col gap-[27px] md:pb-[30px] md:pl-6 py-5 px-5 xl:max-w-[563px] w-full ">
                 <div className="flex justify-between">
                    <CustomInput iconClass="lg:w-[24px] lg:h-[24px]  w-[16px] h-[16px]" className="md:max-w-[228px] p-[12px_0_12px_14px] text-[10px] lg:p-[12px_0_12px_24px] flex gap-[10px] lg:text-[18px] lg:leading-[130%] max-w-[135px] w-full text-black" image={"/svg/graylocation.svg"} placeholder="Enter city or area" type="text" />
                    <CustomInput  className="md:max-w-[255px] flex gap-[10px] p-[12px_0_12px_14px] text-[10px] lg:p-[12px_0_12px_24px] lg:text-[18px] lg:leading-[130%] max-w-[140px]  w-full text-black" image={"/svg/grayclender.svg"} placeholder="Select date" type="number"/>
                 </div>
                 <div className="flex gap-[20px] md:justify-between">
                    <CustomInput  className="md:w-[343px] w-[155px] flex gap-[10px] text-[10px] font-normal  p-[12px_0_12px_14px] lg:p-[12px_0_12px_24px] lg:text-[18px] lg:leading-[130%]  text-black" image={"/svg/grayuser.svg"} placeholder="1 person" type="number"/>
                    <CustomButton className="px-[40px]  py-[12px]  text-xs lg:text-lg leading-[130%]" children={"Search"} type="gradient"/>
                 </div>
                 <div className="lg:flex hidden gap-[32px] ">
                    <Link href={""}> <CustomButton className="px-[40px] py-[20px] text-xl leading-[130%] " children={"Explore Workspaces"} type="gradient"/></Link>
                   
                    <Link href={""}><CustomButton className="px-[40px] py-[20px] text-xl leading-[130%]" children={"Log In"} type="gradient"/></Link>
                    
                 </div>
              </div>
              </div>
            </div>
            <img className="z-40 xl:translate-x-[55px]  xl:w-[666px] xl:rounded-none rounded-[24px] xl:h-[688px] md:w-[566px] md:h-[588px] w-[335px] h-[316px]"  src={`${baseurl}/full-shot-students-studying-indoors.png`} alt="full-shot-students" />
        </div>
    </div>
   </section>
   </>
  )
}

export default FindWorkspace