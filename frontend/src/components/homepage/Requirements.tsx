import { Checkbox } from "@chakra-ui/react";

export default function Requirements() {

    let courses: string[] = ["CICS 110", "CICS 160", "CICS 210", "CS 220", "CS 198c", "CS 230", "CS 240", "CS 250", "MATH 131", "MATH 132", "MATH 233 OR STATS 515", "MATH 235", "CS 311", "300+ CS elective", "300+ CS elective", "300+ CS elective", "300+ CS elective OR outside approved elective", "400+ CS elective", "400+ CS elective", "400+ CS elective", "Science Requirement (1/2)", "Science Requirement (2/2)"];

    return (
        <div style={{ marginTop: '10px' }}>
            {/* Render checkboxes for each course */}
            {courses.map((course, index) => (
                <div key={index}>
                    <Checkbox>{course}</Checkbox>
                </div>
            ))}
        </div>
    );
}