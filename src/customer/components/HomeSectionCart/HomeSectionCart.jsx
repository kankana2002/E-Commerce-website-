import React from 'react'

const HomeSectionCart = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-slate-300 rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
        <div className='h-[13rem] w-[10rem]'>
          <img className='object-cover object-top w-full h-full' src="https://getketchadmin.getketch.com/product/8905404414540/660/KHSH000453_jes1.JPG" alt="" />

        </div>
        <div className='p-4'> 
        <h3 className='text-lg font-medium text-grey-900'>Ketch</h3>
        <p className='mt-2 text-sm text-grey-500'>Ketch Men Green Checked Slim Fit Casual Shirts</p>


        </div>

    </div>
  )
}

export default HomeSectionCart
