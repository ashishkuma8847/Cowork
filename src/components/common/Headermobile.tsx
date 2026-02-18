"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/Menu";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import headerjson from "../../json/Header.json";
import Image from "next/image";

export default function MobileMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="w-[30px] h-[30px]">
                <IoMdMenu className={` w-[30px] h-[30px]`} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className={"w-[200px] backdrop-blur-3xl bg-black/10 "}>
                <DropdownMenuGroup >
                    <div className="flex flex-col font-medium text-[18px]  justify-between items-center ">
                        {
                            headerjson.pages.map((item: { title: string, path: string }, index: number) => (
                                <DropdownMenuItem>
                                    <Link href={item.path} key={index}>
                                        <h1 className="font-medium text-[16px]">{item.title}</h1>
                                    </Link>
                                </DropdownMenuItem>
                            ))
                        }
                    </div>
                    <DropdownMenuSeparator className={"bg-white"} />
                    <div className="flex w-[138px] justify-between mx-auto items-center ">
                        {
                            headerjson.icons.map((item: { path: string }, index: number) => (
                                <DropdownMenuItem>

                                    <button key={index} className="cursor-pointer">
                                        <Image src={`/svg/${item.path}`} width={26} height={26} alt="icons" />
                                    </button>
                                </DropdownMenuItem>

                            ))
                        }
                    </div>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
