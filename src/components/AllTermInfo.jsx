import React from 'react'
import SingleTermInfo from './SingleTermInfo'
import { FieldArray } from 'formik'
import { useState } from "react";
import toast from 'react-hot-toast'

function AllTermInfo({values, updateimagepreview}) {
  const [editMode, setEditMode] = useState([]);

    

   function handleclick(index){
    if (editMode[index]) {
        toast.success(`Edit mode enabled for Term ${index + 1}`);
      } else {
        toast.success(`Edit mode disabled for Term ${index + 1}`);
      }
      setEditMode((prevEditModes) => {
        const newEditModes = [...prevEditModes];
        newEditModes[index] = !newEditModes[index];
        return newEditModes;
      });
   }
  return (
    <div>
      <FieldArray
      name='terminfo'
      disabled={true}
      render={(arrayHelper)=>(
        <div>
          {values.map((term, index) => (
            <SingleTermInfo
              arrayHelper={arrayHelper}
              key={index}
              index={index}
              term={term}
              values={values}
              updateimagepreview={updateimagepreview}   
              handleclick= {handleclick}
              editMode={editMode}          
            />
          ))}
          <button
            type="button"
            className="text-blue-500 font-bold hover:text-blue-700 md:text-lg"
            onClick={() =>
              arrayHelper.push({
                termname: "",
                termdescription: "",
                termimage: "",
              })
            }>
            Add More+
          </button>
        </div>
      )}
      />
    </div>
  )
}

export default AllTermInfo