import React from "react";
import { warningMessage } from "../data/development";

export default function WarningMessage(){
  return (
    <div className="message bg-red-500 rounded-[20px] text-sm font-medium text-white px-5 py-4 mx-auto w-fit mt-2">
      <div className="header flex items-center mb-1">
        <img width="27px" height="27px" className="mr-2" src={warningMessage.icon}></img>
        <h1 className="uppercase">{warningMessage.header}</h1>
      </div>
      <p className="">{warningMessage.message}</p>
    </div>
  );
}
