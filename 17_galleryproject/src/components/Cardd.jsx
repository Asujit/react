import React from 'react'

const Cardd = (item) => {
  return (
    <div>
        <a href={item.item.url} target="_blank">
          <div>
            <div className="h-50 w-full rounded-xl overflow-hidden ">
              <img
                className="h-full w-full object-cover"
                src={item.item.download_url}
                alt="img"
              />
            </div>
            <h1 className="font-bold text-xl">{item.item.author}</h1>
          </div>
        </a>
    </div>
  )
}

export default Cardd