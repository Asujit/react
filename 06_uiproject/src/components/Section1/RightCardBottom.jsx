import React from 'react'

const RightCardBottom = (item) => {
  return (
    <div className="absolute bottom-0 left-0 h-1/2 w-full ">
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30 rounded-t-4xl">
          <div className="relative p-5 flex flex-col justify-between h-full">
            <p className="text-shadow-2xs text-lg leading-relaxed text-white mb-10">{item.intro}
            </p>
            <div className="flex justify-between">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full w-50">
                {item.tag}
              </button>
              <button className="bg-blue-600 text-white px-4 py-3 rounded-full ">
                <i className="ri-arrow-right-long-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default RightCardBottom