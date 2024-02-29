import Link from 'next/link'
import React from 'react'

export default function UserExistedBoardCard({ label, path }: { label: string, path: string }) {
    return (
        <Link href={path}>
            <div className=" bg-cover-text  before:from-cyan-500
before:to-blue-300 bg-[url('https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
                <h1 className="text-white text-md font-semibold">{label}</h1>
            </div>
        </Link>
    )
}
