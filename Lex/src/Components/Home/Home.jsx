import React from 'react'
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10  max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 bg-[url('/Law_Order_final.png')] rounded-3xl">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-left sm:text-left text-white" >
                    <h2 className='text-black text-3xl font-bold animate-fadeInUp'>Journal of Social
                        <br></br> & Legal Studies</h2>
                        <p className='text-lg animate-fadeInUp'>Lex Revolution is an international, peer-reviewed, quarterly research journal focusing on social and legal studies. It invites original, unpublished research papers, articles, short comments, and book reviews from students, scholars, teachers, and professionals in the fields of law, human rights, and social sciences.</p>
                    </div>
                </div>

                
            </aside>

            

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium"></h1>
        </div>
    );
}