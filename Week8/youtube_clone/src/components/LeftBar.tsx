let total = [1, 2, 3, 4, 5, 6, 7, 8, 9]
export const LeftBar = () => {
    return <div className="bg-gray-950 w-48 hidden md:block">
        {/*<BarWithIcon />*/}
        {/*<BarWithIcon />*/}
        {/*<BarWithIcon />*/}
        {/*<Line />*/}
        {/*<BarWithIcon />*/}
        {/*<BarWithIcon />*/}
        {/*<BarWithIcon />*/}
        {/*<BarWithIcon />*/}
        {/*<BarWithIcon />*/}
        {/*<Line />*/}
        {/*<BarWithIcon />*/}
        {/*<BarWithIcon />*/}
        {/*<BarWithIcon />*/}
        {/*<Line />*/}



        <BarElement title={"Home"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                              stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
        </svg>
        }
        />
        <BarElement title={"Explore"} icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25zM12 6v6l4 2"/>
            </svg>
        }/>
        <BarElement title={"Subscriptions"} icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5l-6 3.75V10.5M21 4.5H3c-.621 0-1.125.504-1.125 1.125v12.75c0 .621.504 1.125 1.125 1.125h18c.621 0 1.125-.504 1.125-1.125V5.625C22.125 5.004 21.621 4.5 21 4.5z"/>
            </svg>
        }/>
        <BarElement title={"Library"} icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3.75h10.5c.621 0 1.125.504 1.125 1.125v14.25c0 .621-.504 1.125-1.125 1.125H6.75c-.621 0-1.125-.504-1.125-1.125V4.875c0-.621.504-1.125 1.125-1.125z"/>
            </svg>
        }/>
        <Line/>
        <BarElement title={"Home"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                              stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
        </svg>
        }
        />
        <BarElement title={"Explore"} icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25zM12 6v6l4 2"/>
            </svg>
        }/>
        <BarElement title={"Subscriptions"} icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5l-6 3.75V10.5M21 4.5H3c-.621 0-1.125.504-1.125 1.125v12.75c0 .621.504 1.125 1.125 1.125h18c.621 0 1.125-.504 1.125-1.125V5.625C22.125 5.004 21.621 4.5 21 4.5z"/>
            </svg>
        }/>
        <BarElement title={"Library"} icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3.75h10.5c.621 0 1.125.504 1.125 1.125v14.25c0 .621-.504 1.125-1.125 1.125H6.75c-.621 0-1.125-.504-1.125-1.125V4.875c0-.621.504-1.125 1.125-1.125z"/>
            </svg>
        }/>
        <Line/>
        <BarElement title={"Home"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                              stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
        </svg>
        }
        />
        <BarElement title={"Explore"} icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25zM12 6v6l4 2"/>
            </svg>
        }/>
        <BarElement title={"Subscriptions"} icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5l-6 3.75V10.5M21 4.5H3c-.621 0-1.125.504-1.125 1.125v12.75c0 .621.504 1.125 1.125 1.125h18c.621 0 1.125-.504 1.125-1.125V5.625C22.125 5.004 21.621 4.5 21 4.5z"/>
            </svg>
        }/>
        <BarElement title={"Library"} icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3.75h10.5c.621 0 1.125.504 1.125 1.125v14.25c0 .621-.504 1.125-1.125 1.125H6.75c-.621 0-1.125-.504-1.125-1.125V4.875c0-.621.504-1.125 1.125-1.125z"/>
            </svg>
        }/>
        <Line/>
        <BarElement title={"Home"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                              stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
        </svg>
        }
        />
        <BarElement title={"Explore"} icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25zM12 6v6l4 2"/>
            </svg>
        }/>
        <BarElement title={"Subscriptions"} icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5l-6 3.75V10.5M21 4.5H3c-.621 0-1.125.504-1.125 1.125v12.75c0 .621.504 1.125 1.125 1.125h18c.621 0 1.125-.504 1.125-1.125V5.625C22.125 5.004 21.621 4.5 21 4.5z"/>
            </svg>
        }/>
        <BarElement title={"Library"} icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3.75h10.5c.621 0 1.125.504 1.125 1.125v14.25c0 .621-.504 1.125-1.125 1.125H6.75c-.621 0-1.125-.504-1.125-1.125V4.875c0-.621.504-1.125 1.125-1.125z"/>
            </svg>
        }/>
        <Line/>

    </div>
}

export const Line = () => {
    return <div className="w-full bg-gray-200 h-px dark:bg-gray-700 pl-3 pr-3 opacity-20	">
        <div className="bg-red-600 h-0.5 dark:bg-gray-500" style={{width: "100%"}}></div>
    </div>
}

function BarWithIcon() {
    return <div className="overflow-x-visible">

        <BarElement title={"Home"}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        } />

    </div>
}

function BarElement({icon, title}: {icon: any; title: string;}) {
    return <div className="w-full rounded-xl bg-slate-950 hover:bg-gray-700 flex w-48 p-2 m-2 cursor-pointer">
        <div className="pr-2">
            {icon}
        </div>
        <div>
            {title}
        </div>
    </div>
}