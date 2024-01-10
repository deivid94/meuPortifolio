import Image from 'next/image'
import "./header.scss"

export function Header(){
    return(
        <div className="header">
        <Image
           
             src="/deivid.jpg"
             alt="Next.js Logo"
             width={325}
             height={310}
             priority
           />
   
         <div>
           <h1>Hi i'm Deivid Martins 👋🏿</h1>
           <h2>FullStack Developer JR</h2>
         </div>
         </div>
    )
}