#!/usr/bin/env node

//Step1 Create class
class University {
    departments: {name: string; students: Student[] } [] = [];

    addDepartments(name: string) {
    this.departments.push({name , students: []})
    }
        showDepartments(){
        console.log("Name Of Departments In University:")
        this.departments.forEach((dept)=> console.log(` *${dept.name}`))
    }

      showStudents() {
          console.log("Students:")
          this.departments.forEach((dept) => {
          console.log(` - ${dept.name} Department:`)
        dept.students.forEach((student) => console.log(` - ${student.name} - Balance: ${student.balance}`))
                })
      }
    }

    interface Student {
        name: string; 
        courses: string[];
        balance: number;
    }
    
// add university details
    const university = new University()
        university.addDepartments("Web Development")
        university.addDepartments("Engineering")
        university.addDepartments("Medical")


    // add students details //

// webdevelopment details
university.departments[0].students.push({name: "Fiza", courses: [], balance:3000})

// engineering details
university.departments[1].students.push({name: "Bushra", courses: [], balance:1000})

// medical details
university.departments[2].students.push({name: "Kainat", courses: [], balance:5000})


// invoking
university.showDepartments()
university.showStudents()
