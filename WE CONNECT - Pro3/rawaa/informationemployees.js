const request = "infoemployees.json";
//طريقة الكوتش تبعت api 
async function DatfetchJsona() {
    try {
        const jsonFetch = await fetch(request);
        const jsonForFetch = await jsonFetch.json();
        console.log("jsonForFetch", jsonForFetch);
        localStorage.setItem("hrdata", JSON.stringify(jsonForFetch));
        populateTable(); 
    } catch (error) {
        console.error("Error fetching the JSON data:", error);
    }
}

// عمل فنكشن البحث
function searchEmployee() {
    const searchInput = document.getElementById("searchInput").value;
    populateTable(searchInput);
}
// هون فنكشن لأعبي بيانات الجدول  من خلال جبت البيانات يلي باللوكل وحولتهل لجافا سكريبت  واستدعيت الجدول  وعملت فنكشن السهم ليمر على كل موظف ويعبي بيانات الجدول 
function populateTable(searchName = "") {
    const storedData = localStorage.getItem("hrdata");
    if (storedData) {
        const employeesData = JSON.parse(storedData);
        const employees = employeesData.Employees;
        const tableBody = document.getElementById("mytable");

       
        tableBody.innerHTML = "";

        employees.forEach(employee => {
        //  هون ليقارن بين الاسم المدخل والاسم المخزن مع تحويلهم لسمول لتر مشان ما يصير مشاكل
            if (employee.FullName.toLowerCase().includes(searchName.toLowerCase())) {
                const row = document.createElement("tr");






                
                const userIDCell = document.createElement("td");
                userIDCell.textContent = employee.UserID;
                row.appendChild(userIDCell);

                const fullNameCell = document.createElement("td");
                fullNameCell.textContent = employee.FullName;
                row.appendChild(fullNameCell);

                const jobTitleCell = document.createElement("td");
                jobTitleCell.textContent = employee["Job title"];
                row.appendChild(jobTitleCell);

                const phoneNumberCell = document.createElement("td");
                phoneNumberCell.textContent = employee.PhoneNumber;
                row.appendChild(phoneNumberCell);

                const emailAddressCell = document.createElement("td");
                emailAddressCell.textContent = employee.EmailAddress;
                row.appendChild(emailAddressCell);

                const salaryCell = document.createElement("td");
                salaryCell.textContent = employee.Salary;
                row.appendChild(salaryCell);

                tableBody.appendChild(row);
            }
        });
    }
}

// كانت مشكلة الكودمش راضي يتنفد كنت ناسية استدعيه
DatfetchJsona(); 


// بدي أجرب زرتحميل بيانات الموظفين
$(document).ready(function(){
    $("#btnPrint").on("click",function(){
        printJS({
            printable: 'print-area',
            type: 'html'});
    })
})



// array.forEach(element => {
    
// });




