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

        appendDom();

        console.log(employeeInfo.firstName);
    });

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
