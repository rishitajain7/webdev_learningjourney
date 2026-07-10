let students = [
    {
        Name: "Riya",
        Marks: 92,
        Class: "12th",
        Address: "Mumbai"
    },
    {
        Name: "Aman",
        Marks: 72,
        Class: "11th",
        Address: "Mumbai"
    },
    {
        Name: "Priya",
        Marks: 95,
        Class: "12th",
        Address: "Gurgaon"
    },
    {
        Name: "Rahul",
        Marks: 78,
        Class: "10th",
        Address: "Faridabad"
    },
    {
        Name: "Simran",
        Marks: 89,
        Class: "11th",
        Address: "Ghaziabad"
    },
    {
        Name: "Ananya",
        Marks: 91,
        Class: "12th",
        Address: "Delhi"
    },
    {
        Name: "Arjun",
        Marks: 85,
        Class: "10th",
        Address: "Jaipur"
    },
    {
        Name: "Sneha",
        Marks: 88,
        Class: "11th",
        Address: "Lucknow"
    },
    {
        Name: "Karan",
        Marks: 67,
        Class: "9th",
        Address: "Pune"
    },
    {
        Name: "Meera",
        Marks: 94,
        Class: "12th",
        Address: "Chandigarh"
    },
    {
        Name: "Rohan",
        Marks: 81,
        Class: "10th",
        Address: "Indore"
    },
    {
        Name: "Ishita",
        Marks: 96,
        Class: "12th",
        Address: "Bhopal"
    },
    {
        Name: "Yash",
        Marks: 74,
        Class: "9th",
        Address: "Nagpur"
    },
    {
        Name: "Neha",
        Marks: 90,
        Class: "11th",
        Address: "Hyderabad"
    },
    {
        Name: "Vivek",
        Marks: 69,
        Class: "10th",
        Address: "Patna"
    },
    {
        Name: "Aditi",
        Marks: 98,
        Class: "12th",
        Address: "Ahmedabad"
    },
    {
        Name: "Sahil",
        Marks: 76,
        Class: "9th",
        Address: "Surat"
    },
    {
        Name: "Pooja",
        Marks: 87,
        Class: "11th",
        Address: "Kanpur"
    },
    {
        Name: "Harsh",
        Marks: 82,
        Class: "10th",
        Address: "Noida"
    },
    {
        Name: "Nikita",
        Marks: 93,
        Class: "12th",
        Address: "Kolkata"
    }
];

function showStudents(studentArray) {

    let data = "";

    for (let i = 0; i < studentArray.length; i++) {

        data += `
        <div class="card">
            <h3>${studentArray[i].Name}</h3>
            <p>Marks: ${studentArray[i].Marks}</p>
            <p>Class: ${studentArray[i].Class}</p>
            <p>Address: ${studentArray[i].Address}</p>
        </div>
        `;
    }

    document.getElementById("students").innerHTML = data;
}

showStudents(students);

function searchStudent() {

    let text = document.getElementById("search").value.toLowerCase();

    let result = students.filter(function(student) {
        return student.Name.toLowerCase().includes(text) ||
               student.Class.toLowerCase().includes(text) ||
               student.Marks.toString().includes(text) ||
               student.Address.toLowerCase().includes(text);
    });

    showStudents(result);
}