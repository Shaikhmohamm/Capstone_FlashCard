import React from 'react';
import {fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import Header from '../components/Header';


it('should render header component with logo', () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Header />
    </MemoryRouter>
  );

  const header = screen.getByTestId('test-logo');
  expect(header).toBeInTheDocument();
});


// Test suite: To check functionality of navigation section
describe('To check functionality of navigation section', ()=>{
  it("should render header componenet with navigation section", ()=>{
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header/>
      </MemoryRouter>
    );
    const header = screen.getByTestId('test-header');
    expect(header).toBeInTheDocument();
  });

   // Test: Showing heading with "Create Flashcard" on home page
   it("should show heading with Create Flashcard on home page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>
    );
    const header = screen.getByTestId("test-header");
    expect(header).toHaveTextContent("Create Flashcard");
  });

  // Test: Changing heading to "Show Flashcard" on show page
  it("should change heading with Show Flashcard on show page", () => {
    render(
      <MemoryRouter initialEntries={["/showflashcard"]}>
        <Header />
      </MemoryRouter>
    );
    const header = screen.getByTestId("test-header");
    expect(header).toHaveTextContent("Show Flashcard");
  });

   // Test: Showing "Show Flashcard" on show page after clicking on "Show Flashcard" navigation link
   it("should show Show Flashcard on show page after click on navigation Show Flashcard", () => {
    render(
      <MemoryRouter initialEntries={["/showflashcard"]}>
        <Header />
      </MemoryRouter>
    );
    const showFlashcardLink = screen.getByTestId("test-show-flashcard-link");
    const createFlashcardLink = screen.getByTestId(
      "test-create-flashcard-link"
    );
    fireEvent.click(showFlashcardLink);

    const header = screen.getByTestId("test-header");
    expect(header).toHaveTextContent("Show Flashcard");
    fireEvent.click(createFlashcardLink);
    expect(header).toHaveTextContent("Create Flashcard");
  });
})
