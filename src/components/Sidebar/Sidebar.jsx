import React, { useContext, useState } from "react";
import "./Sidebar.css";
import menu from "../../assets/menu-icon.png";
import plus from "../../assets/plus.png";
import msg from "../../assets/msg.png";
import qs from "../../assets/question.png";
import history from "../../assets/history.png";
import settings from "../../assets/settings.png";
import { Context } from "../../context/Context";
const Sidebar = () => {
  const [sidebarMenu, setSidebarMenu] = useState(false);
  const {onSent, prevPrompt, setRecentPrompt, newChat} = useContext(Context)
  const loadPrompt = async (prompt)=>{
    setRecentPrompt(prompt)
   await onSent(prompt)
  }
  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={()=> setSidebarMenu(prev=>!prev)} src={menu} className="menu" alt="" />
        <div className="new-chat" onClick={()=> newChat()}>
          <img src={plus} alt="" />
          {sidebarMenu ? <p>New Chat</p> : null}
        </div>
        {sidebarMenu ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item,index)=>{
return(
<div onClick={()=>loadPrompt(item)} className="recent-entry">
              <img src={msg} alt="" />
              <p>{item.slice(0,15)}...</p>
            </div>
)
            })}
            
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={qs} alt="" />
         {sidebarMenu?<p>Help</p>:null} 
        </div>
        <div className="bottom-item recent-entry">
          <img src={history} alt="" />
          {sidebarMenu? <p>Activity</p>:null} 
        </div>
        <div className="bottom-item recent-entry">
          <img src={settings} alt="" />
       {sidebarMenu?   <p>Settings</p>:null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
