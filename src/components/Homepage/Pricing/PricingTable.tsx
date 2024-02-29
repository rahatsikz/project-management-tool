"use client";

import Button from "@/components/UI/Button";
import Link from "next/link";

export default function PricingTable() {
  return (
    <>
      <div className='bg-main-background flex items-center justify-center flex-wrap my-10 pt-8 pb-20'>
        <div className='my-10 text-center text-neutral'>
          <h1 className='text-2xl md:text-4xl'>Task Hacks priced your way</h1>
          <p className=''>
            Trusted by millions, Task Hacks powers teams all around the world.
          </p>
        </div>

        {/* table start */}
        <div className='w-full flex items-center justify-center flex-wrap gap-5'>
          {/*<!-- Basic Pricing --> */}

          <div className='border hover:border hover:border-sky-500 max-w-sm overflow-hidden rounded bg-main-background text-slate-500 shadow-lg shadow-slate-200 dark:shadow-slate-800'>
            <Link href={"#"}>
              <div className='flex flex-col'>
                <header className='flex flex-col gap-6 p-6 text-slate-400'>
                  <h3 className='text-xl font-bold text-neutral'>
                    BASIC
                    <span className='block text-sm font-normal text-slate-400'>
                      Ideal for individual developers.
                    </span>
                  </h3>
                  <h4>
                    <span className='text-3xl'>$</span>
                    <span className='text-5xl font-bold tracking-tighter text-slate-700 transition-all duration-300 lg:text-6xl'>
                      0
                    </span>
                    <span className='text-sm'> &nbsp; USD</span>
                    <p className=''>Free for your whole team</p>
                  </h4>
                  <Button className='w-full'>Get started</Button>
                </header>
                <div className='p-6'>
                  <ul className='space-y-4'>
                    <li className='flex items-start gap-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='h-6 w-6 shrink-0 p-1 text-primary'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
                          clipRule='evenodd'
                        />
                      </svg>
                      For individuals or teams looking to organize any project.
                    </li>
                    <li className='flex items-start gap-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='h-6 w-6 shrink-0 p-1 text-primary'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
                          clipRule='evenodd'
                        />
                      </svg>
                      Language and framework agnostic
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
            <footer className='border-t border-slate-200 bg- p-6 text-center text-sm'>
              <Link
                className='text-primary transition-colors duration-300 hover:text-emerald-600 focus:text-emerald-700'
                href='#'
              >
                See all features
              </Link>
            </footer>
          </div>

          {/*<!-- End Basic Pricing Table --> */}

          {/*<!-- Team --> */}
          <div className='border hover:border hover:border-sky-500 max-w-sm overflow-hidden rounded bg-main-background text-slate-500 shadow-lg shadow-slate-200 dark:shadow-slate-800'>
            <Link href={"#"}>
              <div className='flex flex-col'>
                <header className='flex flex-col gap-6 p-6 text-slate-400'>
                  <h3 className='text-xl font-bold text-neutral'>
                    Team
                    <span className='block text-sm font-normal text-slate-400'>
                      Ideal for team developers.
                    </span>
                  </h3>
                  <h4>
                    <span className='text-3xl'>$</span>
                    <span className='text-5xl font-bold tracking-tighter text-slate-700 transition-all duration-300 lg:text-6xl'>
                      5
                    </span>
                    <span className='text-sm'>&nbsp; USD</span>
                    <p className=''>
                      Per user/month if billed annually ($6 billed monthly)
                    </p>
                  </h4>

                  <Button className='w-full'>Try for free</Button>
                </header>
                <div className='p-6'>
                  <ul className='space-y-4'>
                    <li className='flex items-start gap-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='h-6 w-6 shrink-0 p-1 text-primary'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
                          clipRule='evenodd'
                        />
                      </svg>
                      For small teams that need to manage work and scale
                      collaboration.
                    </li>
                    <li className='flex items-start gap-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='h-6 w-6 shrink-0 p-1 text-primary'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
                          clipRule='evenodd'
                        />
                      </svg>
                      Language and framework agnostic
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
            <footer className='border-t border-slate-200 bg-main-background p-6 text-center text-sm'>
              <Link
                className='text-primary transition-colors duration-300 hover:text-emerald-600 focus:text-emerald-700'
                href='#'
              >
                See all features
              </Link>
            </footer>
          </div>
          {/*<!-- End Team --> */}

          {/*<!--  Premium Table --> */}
          <div className='border hover:border hover:border-sky-500 max-w-sm overflow-hidden rounded bg-main-background text-slate-500 shadow-lg shadow-slate-200 dark:shadow-slate-800'>
            <Link href={"#"}>
              <div className='flex flex-col'>
                <header className='flex flex-col gap-6 p-6 text-slate-400'>
                  <h3 className='text-xl font-bold text-neutral'>
                    PREMIUM
                    <span className='block text-sm font-normal text-slate-400'>
                      Ideal for individual developers.
                    </span>
                  </h3>
                  <h4>
                    <span className='text-3xl'>$</span>
                    <span className='text-5xl font-bold tracking-tighter text-slate-700 transition-all duration-300 lg:text-6xl'>
                      15
                    </span>
                    <span className='text-sm'>&nbsp; USD</span>
                    <p className=''>
                      Per user/month - billed annually ($210.00 annual price per
                      user)
                    </p>
                  </h4>
                  <Button className='w-full'>Try for Free</Button>
                </header>
                <div className='p-6'>
                  <ul className='space-y-4'>
                    <li className='flex items-start gap-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='h-6 w-6 shrink-0 p-1 text-primary'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
                          clipRule='evenodd'
                        />
                      </svg>
                      For teams that need to track and visualize multiple
                      projects in several ways, including boards, timelines,
                      calendars, etc.
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
            <footer className='border-t border-slate-200 bg- p-6 text-center text-sm'>
              <a
                className='text-primary transition-colors duration-300 hover:text-emerald-600 focus:text-emerald-700'
                href='#'
              >
                See all features
              </a>
            </footer>
          </div>
          {/*<!-- End Premium Table --> */}
        </div>
      </div>
    </>
  );
}
