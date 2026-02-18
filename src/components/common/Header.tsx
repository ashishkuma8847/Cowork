"use client"
import Image from "next/image"
import headerjson from "../../json/Header.json"
import Link from "next/link"
import MobileMenu from "./Headermobile"

const Header = () => {
    return (
        <header className="container">
            <div className="lg:py-[35px] py-[25px] font-inter flex justify-between items-center">
                <div className="flex gap-[10px] items-center w-[173px]">
                    <Image src={"/svg/mainicon.svg"} width={34} height={30} alt="main image" />
                    <h1 className=" text-[20px] font-semibold">Cowork Mate</h1>
                </div>
                <div className=" lg:flex hidden font-medium text-[18px] w-[442px] justify-between items-center ">
                    {
                        headerjson.pages.map((item: { title: string, path: string }, index: number) => (
                            <Link href={item.path} key={index}>
                                <h1>{item.title}</h1>
                            </Link>
                        ))
                    }
                </div>
                <div className=" lg:flex hidden w-[138px] justify-between items-center ">
                    {
                        headerjson.icons.map((item: { path: string }, index: number) => (
                            <button key={index} className="cursor-pointer">
                                <Image src={`/svg/${item.path}`} width={26} height={26} alt="icons" />
                            </button>
                        ))
                    }
                </div>
                <div className="lg:hidden block">
                   <MobileMenu/>
                </div>
            </div>
        </header>
    )
}

export default Header