import Api from "@/app/assets/Api";
import AutoPlay from "@/app/assets/AutoPlay";
import Forwadin from "@/app/assets/Forwardin";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaCaretDown } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import {
  MdAdUnits,
  MdBarChart,
  MdCampaign,
  MdChatBubble,
  MdContacts,
  MdDashboard,
  MdForwardToInbox,
  MdMoveToInbox,
  MdOutlineDiversity3,
  MdOutlineSupportAgent,
  MdPodcasts,
} from "react-icons/md";

export default function Sidebar({ sidebarState }: { sidebarState: boolean }) {
  return (
    <aside className={
      `fixed top-0 left-0 h-full lg:w-[250px] bg-white dark:bg-dark shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
        sidebarState ? "translate-x-0" : "-translate-x-full"
      }`
    }>
      <div className="flex items-center justify-center pt-[40px] pb-[30px] px-4 relative">
        <Forwadin className="fill-primary" />
      </div>

      <nav className="h-screen max-h-[90vh] overflow-y-auto pb-10">
        <ul className="flex flex-col gap-1">
          <li className="bg-primary rounded-2xl mx-4">
            <a href="#" className=" h-full w-full block py-3 px-6">
              <div className="flex items-center gap-3">
                <MdDashboard className="w-5 h-5 text-white" />
                <p className="text-white font-medium">Dashboard</p>
              </div>
            </a>
          </li>
          <li className="rounded-2xl mx-4">
            <a href="#" className=" h-full w-full block py-3 px-6">
              <div className="flex items-center gap-3">
                <MdAdUnits className="w-5 h-5 dark:text-white" />
                <p className="font-medium">Device</p>
              </div>
            </a>
          </li>
          <li className=" mx-4">
            <a
              href="#"
              className=" h-full w-full block py-3 pl-6 dark:bg-dark-base rounded-2xl"
            >
              <div className="flex items-center gap-3 relative">
                <MdContacts className="w-5 h-5 dark:text-white" />
                <p className=" font-medium">Contacts</p>
                <span className="absolute top-0 right-0 text-black text-xs font-semibold pr-4 rounded-full h-full flex items-center justify-center">
                  <FaCaretDown className="w-3 h-3 dark:text-white" />
                </span>
              </div>
            </a>
            <div className="pl-[30px] py-2">
              <ul className="flex flex-col gap-2">
                <li className="pl-[23px]">
                  <a href="#" className="h-full w-full block py-2">
                    <div className="flex items-center gap-3">
                      <MdContacts className="w-5 h-5 dark:text-white" />
                      <p className=" font-medium">Contacts</p>
                    </div>
                  </a>
                </li>
                <li className="pl-[23px]">
                  <a href="#" className="h-full w-full block py-2">
                    <div className="flex items-center gap-3">
                      <MdOutlineDiversity3 className="w-5 h-5 dark:text-white" />
                      <p className=" font-medium">Groups</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className=" mx-4">
            <a
              href="#"
              className=" h-full w-full block py-3 pl-6 bg-neutral-100d dark:bg-dark-base rounded-2xl"
            >
              <div className="flex items-center gap-3 relative">
                <MdChatBubble className="w-5 h-5 dark:text-white" />
                <p className=" font-medium">Message List</p>
                <span className="absolute top-0 right-0 text-black text-xs font-semibold pr-4 rounded-full h-full flex items-center justify-center">
                  <FaCaretDown className="w-3 h-3 dark:text-white" />
                </span>
              </div>
            </a>
            <div className="pl-[30px] py-2">
              <ul className="flex flex-col gap-2">
                <li className="pl-[23px]">
                  <a href="#" className="h-full w-full block py-2">
                    <div className="flex items-center gap-3">
                      <MdContacts className="w-5 h-5 dark:text-white" />
                      <p className=" font-medium">Messanger</p>
                    </div>
                  </a>
                </li>
                <li className="pl-[23px]">
                  <a href="#" className="h-full w-full block py-2">
                    <div className="flex items-center gap-3">
                      <MdMoveToInbox className="w-5 h-5 dark:text-white" />
                      <p className=" font-medium">Incoming Chat</p>
                    </div>
                  </a>
                </li>
                <li className="pl-[23px]">
                  <a href="#" className="h-full w-full block py-2">
                    <div className="flex items-center gap-3">
                      <MdForwardToInbox className="w-5 h-5 dark:text-white" />
                      <p className=" font-medium">Outgoing Chat</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <p className="text-xs pl-[23px] text-neutral-700 font-semibold">
            Tools
          </p>
          <li className="rounded-2xl mx-4">
            <a href="#" className=" h-full w-full block py-3 px-6">
              <div className="flex items-center gap-3">
                <MdPodcasts className="w-5 h-5 dark:text-white" />
                <p className=" font-medium">Broadcasts</p>
              </div>
            </a>
          </li>
          <li className="rounded-2xl mx-4">
            <a href="#" className=" h-full w-full block py-3 px-6">
              <div className="flex items-center gap-3">
                <MdCampaign className="w-5 h-5 dark:text-white" />
                <p className=" font-medium">Campaign</p>
              </div>
            </a>
          </li>
          <li className="rounded-2xl mx-4">
            <a href="#" className=" h-full w-full block py-3 px-6">
              <div className="flex items-center gap-3">
                <AutoPlay className="w-[19px] h-[19px] dark:text-white" />
                <p className=" font-medium">Auto Reply</p>
              </div>
            </a>
          </li>
          <li className="rounded-2xl mx-4">
            <a href="#" className=" h-full w-full block py-3 px-6">
              <div className="flex items-center gap-3">
                <MdOutlineSupportAgent className="w-5 h-5 dark:text-white" />
                <p className=" font-medium">Customer Service</p>
              </div>
            </a>
          </li>
          <li className="rounded-2xl mx-4">
            <a href="#" className=" h-full w-full block py-3 px-6">
              <div className="flex items-center gap-3">
                <MdBarChart className="w-5 h-5 dark:text-white" />
                <p className=" font-medium">Analytics</p>
              </div>
            </a>
          </li>
          <li className="rounded-2xl mx-4">
            <a href="#" className=" h-full w-full block py-3 px-6">
              <div className="flex items-center gap-3">
                <Api className="w-5 h-5 dark:text-white" />
                <p className=" font-medium">Forwardin API</p>
              </div>
            </a>
          </li>
          <p className="text-xs pl-[23px] text-neutral-700 font-semibold">
            Others
          </p>
          <li className="rounded-2xl mx-4">
            <a href="#" className=" h-full w-full block py-3 px-6">
              <div className="flex items-center gap-3">
                <IoSettingsSharp className="w-5 h-5 dark:text-white" />
                <p className=" font-medium">Settings</p>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
