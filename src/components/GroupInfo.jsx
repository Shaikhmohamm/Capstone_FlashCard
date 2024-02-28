import React from 'react'
import UploadImage from './UploadImage'
import {ErrorMessage, Field} from 'formik'

function GroupInfo({values,updateimagepreview}) {
  return (
    <div className='h-[40vh] border-2 border-black'>
        <div className=' bg-white mx-5 my-10'>
        <label htmlFor="groupinfo.groupname">Enter Group Name</label>
        <div className='flex'>
            <Field type="text" name='groupinfo.groupname' placeholder='Write Group Name' />
            <ErrorMessage name="groupinfo.groupname"  />
            <div>
            <UploadImage values={values.groupimage}
            updateimagepreview= {updateimagepreview}
            />
            </div>  
        </div>
        <div>
        <label htmlFor="groupinfo.groupdescription">Enter Group Description</label>
        </div>
        <div className='mt-1 flex gap-2'> 
              <Field name="groupinfo.groupdescription" id="" rows="3" as="textarea"
                  placeholder='Write Group Description'
              />
              <ErrorMessage name="groupinfo.groupdescription"/>
        </div>
        </div>
    </div>
  )
}

export default GroupInfo