import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RightSidebar from '../components/RightSidebar';

describe('RightSidebar Component', () => {
  test('renders RightSidebar component with buttons', () => {
    const mockCardData = {
      id: 1,
      flashCardData: {
        groupinfo: {
          groupname: 'Sample Group',
          groupdescription: 'Sample Group Description',
          groupimage: 'sample_image.jpg',
        },
        terminfo: [
          { termname: 'Term 1', termdescription: 'Term Description 1', termimage: 'term1_image.jpg' },
          { termname: 'Term 2', termdescription: 'Term Description 2', termimage: 'term2_image.jpg' },
        ],
      },
    };

    render(<RightSidebar currentCard={mockCardData} />);

    const shareButton = screen.getByText('Share');
    const downloadButton = screen.getByText('Download');
    const printButton = screen.getByText('Print');
    
    // Test Share button
    fireEvent.click(shareButton);
    const modal = screen.getByTestId('test-model');
    expect(modal).toBeInTheDocument();

    // Test Download button
    fireEvent.click(downloadButton);
    const downloadBtn = screen.getByTestId('test-download-btn');
    expect(downloadBtn).toBeInTheDocument();

    // Test Print button
    fireEvent.click(printButton);
    const printBtn = screen.getByTestId('test-print-btn');
    expect(printBtn).toBeInTheDocument();
  });
});

