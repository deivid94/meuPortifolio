import { GitIcon } from "../icons/git-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkdinIcon } from "../icons/linkdin-icon";
import "./social-buttons.scss"

export function SocialButtons(){
    return (
       <div className="social">
        <a href="https://www.instagram.com/__martinxx/">
            <InstaIcon/>
        </a>
        <a href="https://github.com/deivid94">
            <GitIcon/>  
         </a>
        <a href="https://www.linkedin.com/in/deivid-martins1994/">
            <LinkdinIcon/>    
        </a>
        

       </div>
    )
}