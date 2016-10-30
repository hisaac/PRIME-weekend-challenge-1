$(document).ready(function(){
    var employeeInfo = {
        firstName: 'N/A',
        lastName: 'N/A',
        idNumber: NaN,
        jobTitle: 'N/A',
        annualSalary: NaN,
    };
    var tempArray = [];
    var totalSalaries = 0;

    $('#employeeinfo').on('submit', function(event){
        event.preventDefault();
        applyFormData();
        appendDom();

        // clear input fields
        $('#employeeinfo').find('input[type=text]').val('');
    });

    // moves form data into the employeeInfo object
    function applyFormData(){
        tempArray = $('#employeeinfo').serializeArray();
        employeeInfo.firstName = tempArray[0].value;
        employeeInfo.lastName = tempArray[1].value;
        employeeInfo.idNumber = tempArray[2].value;
        employeeInfo.jobTitle = tempArray[3].value;
        employeeInfo.annualSalary = tempArray[4].value;
    }

    // appends employeeInfo object to the table
    function appendDom(){
        $('table').append(
            '<tr>' +
                '<td>' + employeeInfo.firstName + '</td>' +
                '<td>' + employeeInfo.lastName + '</td>' +
                '<td>' + employeeInfo.idNumber + '</td>' +
                '<td>' + employeeInfo.jobTitle + '</td>' +
                '<td>$' + employeeInfo.annualSalary + '</td>' +
            '</tr>'
        );

        addSalary();

        $('#totalexpenditures').html(
            'Total Salary Expenditures: $' + totalSalaries
        );
    }

    function addSalary(){
        var individualSalary = parseInt(employeeInfo.annualSalary);
        console.log(individualSalary);
        totalSalaries += individualSalary;
        console.log('should still be a number: ', totalSalaries);
    }
  });
