import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GroupInfo from '../components/GroupInfo'; 
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

describe('GroupInfo', () => {
  it('renders GroupInfo component with Formik', () => {
    const initialValues = {
      groupinfo: {
        groupname: '',
        groupdescription: '',
        groupimage: ''
      }
    };

    const validationSchema = Yup.object().shape({
      groupinfo: Yup.object().shape({
        groupname: Yup.string().required('required').min(3, 'must be 3 characters or more').max(25, 'Maximum 25 characters allowed'),
        groupdescription: Yup.string().required('required').min(15, 'Minimum 15 characters required').max(250, 'Maximum 250 characters allowed')
      })
    });

    render(
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => {}} // Mock onSubmit
      >
        {({ values }) => (
          <Form>
            <GroupInfo
              values={values.groupinfo}
              updateimagepreview={() => {}} // Mock updateimagepreview
            />
          </Form>
        )}
      </Formik>
    );

    // Check if the elements are rendered
    const groupNameLabel = screen.getByText('Enter Group Name');
    const groupDescriptionLabel = screen.getByText('Enter Group Description');
    const groupNameInput = screen.getByPlaceholderText('Write Group Name');
    const groupDescriptionInput = screen.getByPlaceholderText('Write Group Description');

    expect(groupNameLabel).toBeInTheDocument();
    expect(groupDescriptionLabel).toBeInTheDocument();
    expect(groupNameInput).toBeInTheDocument();
    expect(groupDescriptionInput).toBeInTheDocument();
  });

 
});
