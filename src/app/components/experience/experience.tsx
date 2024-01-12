import { SectionTitle } from "../section-title/section-title"
import Image from 'next/image'
import './experience.scss'

export function Experience(){
    return (
        <div className="experience">
        <SectionTitle text="Experience"/>
        <p>
        2 years working as a WebDeveloper, and 1 year working as a Networking
         operations center in companys such as MAIS INTERNET</p>

        <div className="experience-time">
            <div className="experience-language">
            <Image
            src="/react.png"
            alt="react Logo"
            width={40}
            height={40}
            priority
            
             />
                <div className="experience-unit">
                  <div className="experience-measure measure-1">
                    <span>1 Years</span>
                  </div>
                </div>
         
            </div>
          <div className="experience-language">
          <Image
           src="/js.png"
           alt="JS Logo"
           width={40}
           height={40}
           priority
         />
            <div className="experience-unit">
            <div className="experience-measure measure-2">
              <span>2 Yaers</span>
            </div>
         </div>
          </div>
          <div className="experience-language">
          <Image
           src="/postgre.png"
           alt="Postgre Sql Logo"
           width={40}
           height={40}
           priority
         />
            <div className="experience-unit">
            <div className="experience-measure measure-1">
              <span>1 Years</span>
            </div>
         </div>
          </div>
          <div className="experience-language">
          <Image
           src="/ts.png"
           alt="Typescript Logo"
           width={40}
           height={40}
           priority
         />
         <div className="experience-unit">
            <div className="experience-measure measure-1">
            <span>1 Years</span>
            </div>
         </div>

          </div>
        </div>
      </div>
    )
}