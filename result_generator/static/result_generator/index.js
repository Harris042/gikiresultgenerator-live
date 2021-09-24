function add_course() {
    const div = document.querySelector('#course_div');
    let course_label = document.createElement('label');
    let course = document.createElement('input');
    let grade_label = document.createElement('label');
    let grade = document.createElement('input');
    let break_element = document.createElement('br');

    number_of_courses++;

    course_label.setAttribute('for', `course_${number_of_courses}`);
    course_label.innerHTML = `Course title (${number_of_courses})`;
    grade_label.setAttribute('for', `grade_for_course_${number_of_courses}`);
    grade_label.setAttribute('class', 'grade_label');
    grade_label.innerHTML = `Grade (${number_of_courses})`;
    course.setAttribute('list','course_list');
    course.setAttribute('class', 'courses');
    course.setAttribute('id',  `course_${number_of_courses}`);
    course.setAttribute('name', `course_${number_of_courses}`);
    course.setAttribute('placeholder', 'Course title');
    course.required = true
    grade.setAttribute('list','course_grade_list');
    grade.setAttribute('class', 'grades');
    grade.setAttribute('id',  `grade_for_course_${number_of_courses}`);
    grade.setAttribute('name', `grade_for_course_${number_of_courses}`);
    grade.setAttribute('placeholder', 'Course grade');
    grade.required = true

    div.append(course_label);
    div.append(course);
    div.append(grade_label);
    div.append(grade);
    div.append(break_element);
}

document.addEventListener('DOMContentLoaded', main)
function main() {
    for (let i = 0; i < 5; i++) {
        add_course();
    }

    let course_datalist = document.querySelector('#course_list');
    for (let i = 0; i < 9; i++) {
        let option = document.createElement('option');
        option.setAttribute('value', courses[i]);
        course_datalist.append(option);
    }

    let grade_datalist = document.querySelector('#course_grade_list');
    for (let i = 0; i < 12; i++) {
        let option = document.createElement('option');
        option.setAttribute('value', grades[i]);
        grade_datalist.append(option);
    }

    document.querySelector('#add_course_button').onclick = function () {
        add_course();
    }
}
