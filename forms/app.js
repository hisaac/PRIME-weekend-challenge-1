$(document).ready(function () {
    var employeeInfo = {
        firstName: 'N/A',
        lastName: 'N/A',
        idNumber: NaN,
        jobTitle: 'N/A',
        annualSalary: NaN,
    };

    $('#employeeinfo').on('submit', function (event) {
        event.preventDefault();

        applyForm(employeeInfo.firstName, employeeInfo.lastName, employeeInfo.idNumber, employeeInfo.jobTitle, employeeInfo.annualSalary);

        appendDom();

    });

    function applyForm(first, last, id, title, salary){
        console.log('First Name: ', first);
        console.log('Last Name: ', last);
        console.log('ID Number: ', id);
        console.log('Job Title: ', title);
        console.log('Annual Salary', salary);
    }

    function appendDom() {
        $('table').append(
            '<tr>' +
                '<td>' + employeeInfo.firstName + '</td>' +
                '<td>' + employeeInfo.lastName + '</td>' +
                '<td>' + employeeInfo.idNumber + '</td>' +
                '<td>' + employeeInfo.jobTitle + '</td>' +
                '<td>' + employeeInfo.annualSalary + '</td>' +
            '</tr>'
        );
    }

  });
