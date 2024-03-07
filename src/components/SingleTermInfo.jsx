import UploadImage from './UploadImage'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { ErrorMessage, Field } from 'formik';
import toast from 'react-hot-toast';


function SingleTermInfo({ arrayHelper, index, term, values, updateimagepreview, handleclick, editMode }) {

return (
    <div className='mt-5 h-[40vh] md:h-[20vh] bg-white p-2' key={index}>
        <div className='md:flex gap-5 mt-3'>
            <div className='col flex-1'>
                <div className='md:flex mt-2'>
                    <div>
                        <h1 className='mt-5 mr-2 inline-block md:mt-10 md:w-8 h-8 bg-red-500 flex items-center justify-center rounded-full text-white'>
                            {index + 1}
                        </h1>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label className='' htmlFor="terminfo.termname">Enter Term Name</label>
                        <div className='mt-5 md:flex'>
                            <Field type="text" name={`terminfo.${index}.termname`}
                                className='w-full h-[5vh] pl-1 border border-gray-500 rounded-md'
                                placeholder='Write Term Name'
                                readOnly={editMode[index]}
                            />
                        </div>
                    </div>
                </div>
                <ErrorMessage
                    component='div' className=' text-red-500'
                    name={`terminfo.${index}.termname`}
                />
            </div>

            <div className='col flex-1 '>
                <label htmlFor={`terminfo.${index}.termdescription`}>
                    Enter Term Description
                </label>
                <div className=''>
                    <Field name={`terminfo.${index}.termdescription`} type='text' as='textarea'
                        className='w-full mt-2 h-[10vh] pl-1 border border-gray-500 rounded-md'
                        id="" rows="3"
                        placeholder='Write Term Description'
                        readOnly={editMode[index]}
                    />
                </div>

                <ErrorMessage name={`terminfo.${index}.termdescription`}
                    component='div' className='ml-2 text-red-500'
                />
            </div>
            <div className='md:mt-4 lg:mt-8 col flex-1'>
                <div className='flex gap-5'>
                    <div className='md:mx-5'>
                        <UploadImage
                            isDisabled={editMode[index]}
                            index={index}
                            updateimagepreview={updateimagepreview}
                            values={term.termimage}
                        />
                    </div>
                    <div className='flex mt-3 ml-5'>
                        <MdEdit className='text-3xl text-blue-500 ' onClick={() => handleclick(index)} />
                        <MdDelete className='text-3xl text-red-500' onClick={() => {
                            values.length <= 1 ? toast.error(`Can't delete last item`) :
                                arrayHelper.remove(index)
                        }} />
                    </div>
                </div>   
            </div>
        </div>
    </div>
    )   
}

export default SingleTermInfo