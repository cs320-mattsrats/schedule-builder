// Cart.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Watchlist from '@/components/build-calendar/watchlist/Watchlist';
import SearchResults from '@/components/build-calendar/addCourse/SearchResults';
import { TAllCourses } from '@/types/all_courses';
import '@testing-library/jest-dom';

test('adds product to cart and removes from watchlist', () => {
  const course = {
    id: "5",
    classNumber: "237",
    subject: 'CICS',
    title: "Introduction to Research in the Discipline",
    section: [
    {
        id: "LEC01",
        day: ["Tue"],
        starttime: "10:00 AM",
        endtime: "11:15 AM",
        location: "Hasbrck138",
        instructor: "Thota",
        lab: [
        {
            id: "LAB01LL",
            day: ["Fri"],
            starttime: "11:15 AM",
            endtime: "12:05 PM",
            location: "MOR20222"
        }
        ]
    }
    ]
};
  const addToCartMock = jest.fn();
  const removeFromWatchlistMock = jest.fn();
  const cart: TAllCourses[] = []

  const { getByText } = render(
    <SearchResults
      course={course}
      addToCart={addToCartMock}
      cart={cart}
    />
  );

  const addToCartButton = getByText('Add to Cart');
  const removeFromWatchlistButton = getByText('Remove from Watchlist');

  fireEvent.click(addToCartButton);
  expect(addToCartMock).toHaveBeenCalledWith(course);
  expect(getByText('Course added to cart')).toBeInTheDocument();

  fireEvent.click(removeFromWatchlistButton);
  expect(removeFromWatchlistMock).toHaveBeenCalledWith(course.id);
});

// courses.test.js
import { addCourseToNextSemester, calculateTotalCredits } from './courses';
import { TCourse } from '@/types/courses';

test('adds course to next semester courses and checks total credits', () => {
  const course1 = {
    _id: '662e5268060547abde7517a9', 
    description: 'This course covers a broad range of topics related…390R, or COMPSCI 466, or E&C-ENG 371). 3 credits.', 
    id: 'COMPSCI 564', 
    subject: 'COMPSCI', 
    title: 'Cyber Effects: Reverse Engineering, Exploit Analysis, and Capability Development',
    credit: 3
  };
  const course2 = {
    _id: '662e5268060547abde7517aa', 
    description: 'This course introduces students to the principal a…equisites: COMPSCI 365 or COMPSCI 377. 3 credits.', 
    id: 'COMPSCI 565', 
    subject: 'COMPSCI', 
    title: 'Advanced Digital Forensic Systems',
    credit: 3
  };
  const course3 = {
    _id: '662e5268060547abde7517ac', 
    description: 'The ability to transmit quantum information over l…STC 515 or PHYSICS 281 or PHYSICS 287). 3 credits', 
    id: 'COMPSCI 590AB', 
    subject: 'COMPSCI', 
    title: 'Quantum Cryptography and Communication',
    credit: 3
  };

  let nextSemesterCourses: TCourse[] = [];
  nextSemesterCourses = addCourseToNextSemester(course1, nextSemesterCourses);
  nextSemesterCourses = addCourseToNextSemester(course2, nextSemesterCourses);
  nextSemesterCourses = addCourseToNextSemester(course3, nextSemesterCourses);

  const totalCredits = calculateTotalCredits(nextSemesterCourses);

  expect(totalCredits).toBeGreaterThanOrEqual(12);
  expect(totalCredits).toBeLessThanOrEqual(18);
});

test('does not add duplicate course to cart', () => {
    const addToCartMock = jest.fn();
  
    const { getByText } = render(<Watchlist/>);
  
    const addButton = getByText('Add Math 101 to Cart');
  
    fireEvent.click(addButton); // Add course for the first time
    fireEvent.click(addButton); // Attempt to add the same course again
  
    expect(addToCartMock).toHaveBeenCalledTimes(1); // Only called once for the first addition
  });

