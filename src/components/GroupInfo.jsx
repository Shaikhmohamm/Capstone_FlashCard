import React from 'react'
import UploadImage from './UploadImage'
import { ErrorMessage, Field } from 'formik'

function GroupInfo({ values, updateimagepreview }) {
  return (
    <div className='sm:h-[50vh] md:h-[40vh] bg-white mx-5 md:mx-10 p-1'>

      <div className='mt-5 p-2 w-full'>
        <label htmlFor="groupinfo.groupname">Enter Group Name</label>

        <div className='md:flex gap-5  my-2'>
          <div className='flex  md:w-1/2 flex-col'>
            <Field type="text" name='groupinfo.groupname' placeholder='Write Group Name'
              className='w-full p-3 mt-3 border border-gray-500 md:rounded-md'
            />
            <ErrorMessage component='div' className='text-red-500' name="groupinfo.groupname" />
          </div>

            {/* Upload image button component */}
          <div className='mt-2 w-3/4'>
            <UploadImage values={values.groupimage}
              updateimagepreview={updateimagepreview}
            />
          </div>
        </div>

        {/* Text area for Group Description */}
        <div>
          <label htmlFor="groupinfo.groupdescription">Enter Group Description</label>
        </div>

        <div className='my-2 flex gap-2'>
          <Field
            className='pl-1 w-full md:w-3/4 border border-gray-500 md:rounded-md'
            name="groupinfo.groupdescription" id="" rows="3" as="textarea"
            placeholder='Write Group Description'
          />
        </div>

        <ErrorMessage component='div' className='text-red-500' name="groupinfo.groupdescription" />
      </div>

    </div>
  )
}

export default GroupInfo