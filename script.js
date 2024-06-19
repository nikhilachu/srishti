// const color=[1,2,3]
//         let color2=color.toString()
//          document.write(color2 +"<br/>")
//         document.write(typeof color2 + "<br/>")

//          let color3=color.join(" black ")
//          document.write(color3+"<br/>")
         
//               const num=[2,4,5,6,6]
//          let x=num.join("blue")
//          document.write(x) 


         
      //    const color=["red","blue","yellow"]
      //     let x=color.pop()
      //     document.write(color+" <br/> this is the modified version")
      //    document.write(x)
      //    document.write(color);
         
//      const color=["red","blue","yellow"]
//        let x= color.push("orange")
//       document.write(color)


// const color=["red","blue","yellow"]
//  let  x=color.shift()//delete fisrt element
//  document.write(color+"<br/>")
 
// color.unshift(x)//insert deleted element
// document.write(color+"<br/>")
// delete color[0]//Delete a particular element
// color[2]="pink"//insert element at any part
//  document.write(color+"<br/>")

//         let num=[2,7,8,9,6,5]
//         let x=" "
//         num.forEach(function(z){//adding 2into each element
//              x += z+2
//         })
//         console.log(x);


// object={property1:value1,property2:value2.....propertyN:valueN}
// Example:
//  emp={id:102,name:"ShyamKumar",salary:40000}
// document.write(emp.id+""+emp.name+""+emp.salary)

// var emp=new Object();
// emp.id=101;
// emp.name="RaviMalik";
// emp.salary=50000;
// document.write(emp.id+""+emp.name+""+emp.salary)

// function emp(id,name,salary)
// {
// this.id=id;
// this.name=name;
// this.salary=salary;
// }
// e=new emp(103,"Vimal Jaiswal",30000);
// document.write(e.id+" "+e.name+" "+e.salary)

// let user = {
//       name: "John",
//       age: 30,
//       isAdmin : true 
//       }
//       delete user.age;
//       document.write(user.name+""+user.age+""+user.isAdmin)


//  var date=new Date();
//  var day=date.getDate();
//  var month=date.getMonth()+1;
//  var year=date.getFullYear();
//  document.write("<br>Dateis:"+day+"/"+month+"/"+year);
//  var today=new Date();
//  var h=today.getHours();
//  var m=today.getMinutes();
//  var s=today.getSeconds();
 
//  document.write("<br>time:"+h+"/"+m+"/"+s);

// function BigUser() {
//       this.name = "John";
//       return { name: "Godzilla" }; // <-- returns this object
//       }
//       alert( new BigUser().name );
// function SmallUser() {
//             this.name = "John";
//             return; // <-- returns this
//             }
//             alert( new SmallUser().name );

function getcube(){
      var number=parseInt( document.getElementById("number").value);
      var number2=parseInt(document.getElementById("number2").value);
      alert("sum is " + (number + number2));
      
}


// function totalelements()
// {
// var allgenders=document.getElementsByName("gender");
// alert("Total Genders:"+allgenders.length);
// }

