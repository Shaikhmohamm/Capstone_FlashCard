import UploadImage from './UploadImage'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { ErrorMessage, Field } from 'formik';
import toast from 'react-hot-toast';


function SingleTermInfo({arrayHelper,index,term,values,updateimagepreview,handleclick,editMode}) {

    return (
        <div key={index}>
            <div className='flex gap-5 border-2 border-black mt-3'>
                <div className='col flex-1 border-2 border-black'>
                    <label htmlFor="terminfo.termname">Enter Term Name</label>
                    <div className='flex'>
                        <h1>{index + 1}</h1>
                        <Field type="text" name={`terminfo.${index}.termname`} id=""
                            placeholder='Write Term Name'
                            readOnly={editMode[index]}
                        />
                        <ErrorMessage name={`terminfo.${index}.termname`} />
                    </div>
                </div>
                <div className='col flex-1 border-2 border-black'>
                    <label htmlFor={`terminfo.${index}.termdescription`}>
                        Enter Term Description
                    </label>
                    <div className=''>
                        <Field name={`terminfo.${index}.termdescription`} type='text' as='textarea' 
                            id="" rows="3"
                            placeholder='Write Term Description'
                            readOnly={editMode[index]}
                        />

                        <ErrorMessage name={`terminfo.${index}.termdescription`} />
                    </div>
                </div>
                <div className='col flex-1 border-2 border-black'>
                    <UploadImage
                        isDisabled={editMode[index]}
                        index={index}
                        updateimagepreview={updateimagepreview}
                        values={term.termimage}
                    />

                </div>
                <div className=''>
                    <MdEdit onClick={() => handleclick(index)} />
                    <MdDelete onClick={() => {
                        values.length <= 1 ? toast.error(`Can't delete last item`) :
                            arrayHelper.remove(index)
                    }} />
                </div>
            </div>
        </div>
  )
}

export default SingleTermInfo