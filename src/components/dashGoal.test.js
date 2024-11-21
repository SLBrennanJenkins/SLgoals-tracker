import React from 'react';
import { render, screen } from '@testing-library/react';
import Goal from './dashGoal';

describe('Goal component', () => {
    test('Should render the objective text correctly', () => {
        const testObjective = 'Test Objective';
        render(<Goal objective={testObjective} />);
        const objectiveElement = screen.getByText(testObjective);
        expect(objectiveElement).toBeInTheDocument();
    });
    test('Should render the description text correctly', () => {
      const testDescription = 'Test Description';
      render(<Goal objective="Test Objective" description={testDescription} />);
      const descriptionElement = screen.getByText(testDescription);
      expect(descriptionElement).toBeInTheDocument();
    });
    test('Should apply the correct CSS classes to the outer div', () => {
      render(<Goal objective="Test Objective" description="Test Description" />);
      const outerDiv = screen.getByText('Test Objective').closest('div');
      expect(outerDiv).toHaveClass('flex', 'flex-col', 'shadow-custom', 'mb-2', 'py-2', 'px-5');
    });
    test('Should apply the correct CSS classes to the paragraph elements', () => {
      render(<Goal objective="Test Objective" description="Test Description" />);
      const objectiveParagraph = screen.getByText('Test Objective');
      const descriptionParagraph = screen.getByText('Test Description');
      expect(objectiveParagraph).toHaveClass('text-sm');
      expect(descriptionParagraph).toHaveClass('text-sm');
    });
    test('Should render both objective and description when provided', () => {
      const testObjective = 'Test Objective';
      const testDescription = 'Test Description';
      render(<Goal objective={testObjective} description={testDescription} />);
      const objectiveElement = screen.getByText(testObjective);
      const descriptionElement = screen.getByText(testDescription);
      expect(objectiveElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();
    });
});
