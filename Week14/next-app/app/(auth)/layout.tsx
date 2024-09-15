import React from "react";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (



        <div>
            <div className={"p-4 border-b text-center text-green-600 text-xl"}>20% extra discount</div>
            {children}
        </div>



    );
}