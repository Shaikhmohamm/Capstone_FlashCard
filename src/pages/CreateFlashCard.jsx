import toast from 'react-hot-toast';
import GroupInfo from '../components/GroupInfo'
import AllTermInfo from '../components/AllTermInfo'
import { Formik, Form } from 'formik'
import { useDispatch } from "react-redux";
import { addFlashcard } from '../Redux/flashCardslice';
import * as Yup from 'yup';

function CreateFlashCard() {
  const dispatch = useDispatch();
  // Form submission logic
  function handlesubmission(values, resetForm, dispatch) {
    // Check if a Group image is uploaded
    if (values.groupinfo.groupimage === "") {
      toast.error("Please upload a Group image");
      return;
    }

    // Check if all Term images are uploaded
    if (values.terminfo.map((term) => term.termimage).includes("")) {
      toast.error("Please upload images for all terms");
      return;
    }

    // Display success toast upon successful flashcard creation
    toast.success("Flashcard created successfully");

    const data = {
        // Id for flashcard
        id : Math.floor(Math.random()*10**15),

        // Saving data flashCardData
        flashCardData: values
    }
    // dispatch to redux store
    dispatch(addFlashcard(data));

    if (localStorage.getItem("flashcards") === null) {

      // If not, create a new array with the current flashcard data and store it
      localStorage.setItem("flashcards", JSON.stringify([data]));
    } else {
  
      // If 'flashcards' key exists, retrieve the existing data from local storage
      let flashcards = JSON.parse(localStorage.getItem("flashcards"));
  
      // Add the current flashcard data to the existing array
      flashcards=[...flashcards, data];
  
      // Store the updated array back in local storage
      localStorage.setItem("flashcards", JSON.stringify(flashcards));
    }
    // Reset the form after successful submission
	    resetForm();
  }


  // Form validation using Yup
  const validationSchema = Yup.object().shape({
    groupinfo: Yup.object().shape({
      groupname: Yup.string().required('required').min(3, 'must be 3 characters or more')
        .max(25, 'Maximum 25 characters allowed'),
      groupdescription: Yup.string().required('required').min(15, 'Minimum 15 characters required')
        .max(250, 'Maximum 250 characters allowed')
    }),
    terminfo: Yup.array().of(
      Yup.object().shape({
        termname: Yup.string().required('required').min(3,'must be 3 characters or more').max(25),
        termdescription: Yup.string().required('required').min(15,'Minimum 15 characters required')
        .max(250,'Maximum 250 characters allowed')
      })
    )
  }
  )

  return (
    <div>
      <div>
        <Formik
          initialValues={
            {
              groupinfo: {
                groupname: '',
                groupdescription: '',
                groupimage: ''
              },
              terminfo: [{ termname: '', termdescription: '', termimage: '' }]
            }
          }
          validationSchema={validationSchema}
          // on submission logic need to be done here
          onSubmit={(values ,{resetForm}) => {
            handlesubmission(values, resetForm, dispatch)
          }}
        >
          {({ values, setFieldValue }) => ( 
            <Form>
              <GroupInfo 
              values={values.groupinfo} 
              updateimagepreview = {(value)=>{
                setFieldValue('groupinfo.groupimage', value)
              }}
              />
              <AllTermInfo 
              values= {values.terminfo}
              updateimagepreview= {(value, idx) => {
                setFieldValue(`terminfo[${idx}].termimage`, value);
              }}
              />
              <div className='text-center'>
                <button type='submit'
                  className='rounded-md text-lg bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-10'>
                  Create FlashCard
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default CreateFlashCard
