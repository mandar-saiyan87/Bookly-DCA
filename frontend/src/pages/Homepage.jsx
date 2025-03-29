import React, { useState, Suspense, lazy } from 'react'
import Loading from '../components/shared/Loading'

const Books = lazy(() => import("../components/Books"))
const Collections = lazy(() => import("../components/Collections"))


function Homepage() {

  const [tab, setTab] = useState("Books")

  return (
    <>
      <div className='w-full max-w-[1536px] mx-auto'>
        <div className='w-full flex justify-between items-center mx-auto'>
          <div className='w-full text-center py-6 px-8 text-2xl'>
            <span className={`cursor-pointer font-medium ${tab == "Books" ? 'text-gray-700 underline underline-offset-[12px] decoration-teal-600 ' : 'text-teal-600 no-underline'}`}
              onClick={() => setTab("Books")}
            >Books</span>
          </div>
          <div className='w-full text-center py-6 px-8 text-2xl'>
            <span className={`cursor-pointer font-medium ${tab == "Collections" ? 'text-gray-700 underline underline-offset-[12px] decoration-teal-600' : 'text-teal-600 no-underline'}`}
              onClick={() => setTab("Collections")}
            >Collections</span>
          </div>
        </div>
        <div>
          {
            tab === "Books" ?
              <Suspense fallback={<Loading />}>
                <Books />
              </Suspense>
              : tab === "Collections" &&
              <Suspense fallback={<Loading />}>
                <Collections />
              </Suspense>
          }
        </div>
      </div>
    </>
  )
}

export default Homepage