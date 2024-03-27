import {useEffect, useState} from 'react'
import './index.css'
import {Drawer, Input} from "antd";

const rootElement=document.querySelector('#app-root')
function App() {

    const [open, setOpen] = useState(false);
    const [appId, setAppId] = useState<any>("");


    useEffect(()=>{
        const button= document.querySelector('#app-float-button')
        if (button){
            button.addEventListener('click',()=>{
                setOpen(true)
            })
        }
        if (rootElement){
            setAppId(rootElement.getAttribute('app-id'))
        }

    },[])

  return (
    <>

      <Drawer title={`Assistant`} onClose={()=>setOpen(false)} open={open}>
        <div className="relative h-full">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <div className="bg-primary p-2 w-full mt-5">Primary Color</div>
            <div className="bg-primary p-2 w-full mt-5">App Id {appId}</div>
            <div className="flex items-center absolute bottom-0 right-0 left-0 space-x-2">
                <Input placeholder="Type Something ..." />
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>

                </button>
            </div>
        </div>
      </Drawer>
    </>
  )
}

export default App
