$(document).ready(function(){

    //------------------------------ VARIABLES ------------------------------//

    var tempArray = [];
    var totalSalaries = 0;
    var employeeInfo = {};

    //-------------------------------- LOGIC --------------------------------//

    // listen for click of submit button
    $('#employeeinfo').on('submit', submitAction);

    // listen for click of delete button
    $('#payrolltable').on('click', '.delete', subtractSalary);

    //------------------------------ FUNCTIONS ------------------------------//

    // takes form data and puts it onto the DOM
    function submitAction(event){
        event.preventDefault();
        applyFormData();
        appendDOM();
        addSalary();

        // clear input fields
        $('#employeeinfo').find('input[type=text]').val('');
    }

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
    function appendDOM(){
        $('table').append(
            '<tr>' +
                '<td>' + employeeInfo.firstName + '</td>' +
                '<td>' + employeeInfo.lastName + '</td>' +
                '<td>' + employeeInfo.idNumber + '</td>' +
                '<td>' + employeeInfo.jobTitle + '</td>' +
                '<td class="salary">$' + employeeInfo.annualSalary + '</td>' +
                '<td class="delete">' +
                    '<input type="button" value="Delete" name="delete" />' +
                '</td>' +
            '</tr>'
        );
    }

    // add individual salary to totalSalaries
    function addSalary(){
        var individualSalary = parseInt(employeeInfo.annualSalary);
        totalSalaries += individualSalary;
        $('#totalexpenditures').html(
            '<p>Total Salary Expenditures: $' + totalSalaries + '</p>'
        );
    }

    // subtract individual salary from totalSalaries, and remove cell
    function subtractSalary(){
        totalSalaries -= parseInt($(this).siblings().last().text().substring(1));
        $('#totalexpenditures').html(
            'Total Salary Expenditures: $' + totalSalaries
        );
        $(this).parent().remove();
    }
  });
