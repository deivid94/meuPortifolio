import { GitIcon } from "../icons/git-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkdinIcon } from "../icons/linkdin-icon";
import "./social-buttons.scss"

export function SocialButtons(){
    return (
       <div className="social">
        <a href="">
            <InstaIcon/>
        </a>
        <a href="">
            <GitIcon/>  
         </a>
        <a href="">
            <LinkdinIcon/>    
        </a>
        

       </div>
    )
}