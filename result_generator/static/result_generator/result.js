document.addEventListener('DOMContentLoaded', load);

function append_row(index) {
    let tr = document.createElement('tr');
    tr.setAttribute('style', 'font-size: 13px;');
    document.querySelector('#course_table').append(tr);

    let td = document.createElement('td');
    td["width"] = '15%';
    td["align"] = 'center';
    td.setAttribute('class', 'tablecell');
    td.setAttribute('style', 'border: 1px solid #d8d8d8');
    td.innerHTML = `${course_title[index]}`;
    tr.append(td);

    td = document.createElement('td');
    td["width"] = '45%';
    td.setAttribute('class', 'tablecell');
    td.setAttribute("style", "padding: 0 0 0 10px; text-align: left; border: 1px solid #d8d8d8;");
    td.innerHTML = `${course_name[index]}`;
    tr.append(td);

    for (let i = 0; i < 3; i++) {
        td = document.createElement('td');
        td["width"] = '10%';
        td["align"] = 'center';
        td.setAttribute('class', 'tablecell');
        td.setAttribute('style', 'border: 1px solid #d8d8d8')
        if (i === 0) {
            td.innerHTML = `${course_credit[index]}`;
        }
        else if (i === 1) {
            td.innerHTML = `${grades[index]}`;
        }
        else if (i === 2) {
            td.innerHTML = `${grade_point[index]}`;
        }
        tr.append(td);
    }
}

function load() {
    for (let i = 0; i < 6; i++) {
        append_row(i);
    }
}
