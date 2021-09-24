from django.shortcuts import render
from django.http import HttpResponse

# arrays containing data
course_counter = 6
course_title_data = ['CS103', 'CS103L', 'PH103', 'PH103L', 'HM101', 'CS121', 'MT101', 'CH161', 'CS131']
course_name_data = ['Computer Programming', 'Computer Programming Lab', 'Fundamentals of Mechanics',
                    'Mechanics Lab', 'English Language and Communication Skills', 'Fundamentals of Computer Science',
                    'Calculus 1', 'Industrial Health and Safety', 'Discrete Structures']
course_credit_data = ['3', '1', '2', '1', '3', '3', '3', '1', '3']
grades_data = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'F', 'WD']
grade_point_data = ['4', '3.67', '3.33', '3', '2.67', '2.33', '2', '1.67', '1.33', '1', '0', 'WD']

# arrays to be appended by functions
course_title = []
course_name = []
course_credit = []
grades = []
grade_point = []


def assign_data_to_arrays(course_t, course_g):
    course_index = course_title_data.index(course_t)
    grade_index = grades_data.index(course_g)

    course_title.append(course_title_data[course_index])
    course_name.append(course_name_data[course_index])
    course_credit.append(course_credit_data[course_index])

    grades.append(grades_data[grade_index])
    grade_point.append(grade_point_data[grade_index])


def calculate_gpa():
    grade_point_sum = 0
    total_credits = 0

    for i in range(course_counter):
        if grade_point[i] != 'WD':
            grade_point_sum += float(grade_point[i]) * float(course_credit[i])
            total_credits += float(course_credit[i])

    return grade_point_sum / total_credits


def gpa_status():
    gpa = calculate_gpa()
    if 0 < gpa < 2:
        return 'Probation'
    elif 2 < gpa < 3:
        return 'Satisfactory'
    elif 3.5 < gpa < 3.67:
        return 'Distinction'
    elif 3.67 < gpa < 4:
        return 'High Distinction'

# Create your views here.


def index(request):
    return render(request, 'result_generator/index.html', {
        'course_data': course_title_data,
        'grade_data': grades_data
    })


def generate_result(request):
    name = ""
    reg_no = ""
    semester = ""
    if request.method == 'POST':
        name = request.POST["name"]
        reg_no = request.POST["reg_no"]
        semester = request.POST["semester"]
        for i in range(course_counter):
            course = request.POST[f"course_{i + 1}"]
            grade = request.POST[f"grade_for_course_{i + 1}"]
            assign_data_to_arrays(course, grade)

    return render(request, 'result_generator/result.html', {
        'name': name.upper(),
        'reg_no': reg_no,
        'semester': semester,
        'course_title': course_title,
        'course_name': course_name,
        'course_credit': course_credit,
        'grade': grades,
        'grade_point': grade_point,
        'gpa': round(calculate_gpa(), 2),
        'gpa_status': gpa_status()
    })
