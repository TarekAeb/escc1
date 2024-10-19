import { useState } from "react"


export default function EventsSidebar() {
    const [active, setActive] = useState(false);

    return (
        <div className='h-[100vh] w-14 flex flex-col bg-[#000] items-center py-4 gap-2'> {/* TODO:update the icons of the sidebar*/}
            <a href='/collectiveSport'>C</a>
            <a href='/individualSport'>C</a>
            <a href='/mentalSport'>C</a>
            <a href='/'>C</a>
        </div>
    )
}
