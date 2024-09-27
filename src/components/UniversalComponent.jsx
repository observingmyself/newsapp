import React from 'react'

const UniversalComponent = () => {
  return (<>
    <div className='main-div h3 d-flex justify-content-center align-items-center'>API is Exhausted</div>
    <style jsx="true">
        {`
          .main-div {
          height: 100vh;
          animation : topdown 2s linear infinite;
          }
          @keyframes topdown {
            0% { transform: translateY(0); }
            50% { transform: translateY(-100px); }
            100% { transform: translateY(0); }
          }
        `}
    </style>
    </>
  )
}

export default UniversalComponent