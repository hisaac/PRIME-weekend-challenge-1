$(document).ready(function(){

    //------------------------------ VARIABLES ------------------------------//

    var tempArray = [];
    var totalSalaries = 0;
    var employeeInfo = {};

    //-------------------------------- LOGIC --------------------------------//

    $('#employeeinfo').on('submit', function(event){
        event.preventDefault();
        applyFormData();
        appendDom();
        addSalary();

        $('#totalexpenditures').html(
            'Total Salary Expenditures: $' + totalSalaries);

        // clear input fields
        $('#employeeinfo').find('input[type=text]').val('');
    });

    //------------------------------ FUNCTIONS ------------------------------//

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
    }

    // add individual salary to totalSalaries
    function addSalary(){
        var individualSalary = parseInt(employeeInfo.annualSalary);
        totalSalaries += individualSalary;
    }

    //------------------------------- THE END -------------------------------//
  });
