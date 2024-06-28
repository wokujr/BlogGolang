import C from "@/public/assets/images/stack_images/C.png"
import unreal from "@/public/assets/images/stack_images/unreal.jpg"
import react from "@/public/assets/images/stack_images/react.png"
import next from "@/public/assets/images/stack_images/next.png"
import golang from "@/public/assets/images/stack_images/golang.png"
import js from "@/public/assets/images/stack_images/javascript.png"

export const stackData = [
    {
        title:"Basic",
        stack:[
            {
                id:0,
                title:"C/C++",
                image:C
            },
            {
                id:1,
                title:"Golang",
                image:golang
            },
            {
                id:2,
                title:"Javascript",
                image:js
            },
        ]
    },
    
    {
        title:"Engine",
        stack: [
            {
                id:0,
                title:"Unreal Engine",
                image:unreal
            },
        ]
    },
    
    {
        title:"Framework",
        stack: [
            {
                id:0,
                title:"NextJS",
                image:next
            },
            {
                id:1,
                title:"React",
                image:react
            },
        ]
    }
    
]