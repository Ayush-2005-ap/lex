

/* ==================== Footer.jsx ==================== */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    {/* ---------- 1) Logo (left) ---------- */}
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="/Images/Logo-final-1.png"
                                className="mr-3 h-20"
                                alt="Logo"
                            />
                        </Link>
                    </div>

                    {/* Preliminary Details of Journal */}
                    <div className='flex flex-col sm:flex-row gap-8 pr-8 ml-auto'>
                        <div className='max-w-xs'>
                            <h2 className="mb-4 text-sm font-bold text-gray-900 uppercase text-center">
                                Preliminary Details of Journal
                            </h2>
                            <h1 className='text-sm text-center text-black'>
                            Started in: 2015
                            </h1>
                            <p className='mt-2 text-sm text-center text-gray-700 leading-relaxed'>
                                Frequency of Publication: Quarterly <br />
                                Format: Print & Online <br />
                                Subject: Social Science <br />
                                Language of Publication: English
                            </p>
                        </div>
                    </div>

                    {/* ---------- 2) Address + Contact (right) ---------- */}
                    <div className="flex flex-col sm:flex-row gap-8 pr-8 ml-auto">
                        {/* Address card */}
                        <div className="max-w-xs">
                            <h2 className="mb-4 text-sm font-bold text-gray-900 uppercase text-center">
                                Address
                            </h2>
                            <h1 className="text-base font-medium text-center text-[#a90c0c]">
                                Dr. Vijay Bahadur Pandey
                            </h1>
                            <p className="mt-2 text-sm text-center text-gray-700 leading-relaxed">
                                Rimjhim Smriti, South NH‑922, At PO Nuaon<br />
                                Krishnabrahm, Buxar‑802111 (Bihar)
                            </p>
                        </div>

                        {/* Contact‑Us card (rightmost) */}
                        <div className="max-w-xs">
                            <h2 className="mb-4 text-sm font-bold text-gray-900 uppercase text-center">
                                Contact&nbsp;Us
                            </h2>
                            <p className="text-sm text-center text-gray-700 leading-relaxed">
                                <span className="font-semibold">Email:</span>{' '}
                                editor.lexrevolution@gmail.com
                            </p>
                        </div>
                    </div>
                </div>

                {/* -------------- bottom bar -------------- */}
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2025&nbsp;
                        <a
                            href="https://www.lexrevolution.in"
                            className="hover:underline"
                        >
                            Lexrevolution
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0 animate-fadeInUp">
                        <Link to="https://www.facebook.com/lexrevolution" className="text-gray-500 hover:text-gray-900">
                            <i class="fab fa-facebook"></i>
                            <span className="sr-only">Facebook page</span>
                        </Link>

                        <Link to="https://www.instagram.com/lex.revolution" className="text-gray-500 hover:text-gray-900">
                            <i class="fab fa-instagram"></i>
                            <span className="sr-only">Instagram page</span>
                        </Link>

                        <Link to="https://www.twitter.com/lexrevolution" className="text-gray-500 hover:text-gray-900">
                            <i class="fab fa-x"></i>
                            <span className="sr-only">X page</span>
                        </Link>

                        <Link to="https://www.linkedin.com/company/lex-revolution/posts/?feedView=all" className="text-gray-500 hover:text-gray-900">
                            <i class="fab fa-linkedin"></i>
                            <span className="sr-only">LinkedIn page</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
