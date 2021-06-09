// 1) ProblemName: Objects

var cities = {First:"Karachi", Secound:"Lahore", Third:"Islamabad", Fourth:"Queeta",};

// 2) Access The First And Fourth Key of the Object

    console.log(cities.First);
    console.log(cities.Fourth);


    //3) Problem Name: LoopingObjects

        for (var i in cities)
        {
            document.write(i + " " + cities[i]+ " <br>");
        }

        //4) Problem Name: MathMethod

             var height = 7.534564;

             //ceil   Method
             console.log(Math.ceil(height));

             //Floor   Method
             console.log(Math.floor(height));


            // 5) Problem Name: StringMethod
            
            var cityName = "Tokyo";
            var cityName_lenght = cityName.length;
            console.log(cityName_lenght);

            var find_indexOf = cityName.indexOf("o");
            console.log(find_indexOf);

            console.log(cityName.search("o"));


        //6) Problem Name: NumberMethod:

        var age = "44";
        console.log(age);
        console.log(typeof age);
        var convert_Number = Number(age);
        console.log(convert_Number);
        console.log(typeof convert_Number); 

        //7) Problem Name: MapMethod

        

        let agesArray = [12,45,56,4];
        agesArray.map((value, index) =>
        {
  console.log("The Index value " + index);
  console.log("The current element is: " + value);
  return value;
        }
);

let usersData = [

    { name: "Saeed", lastName: "Ahmad", school: "UoT", profession: "engineer",},
    
    { name: "Ali", lastName: "Khan", school: "TUM", profession: "researcher",}
    
                ];

                var print_userData = usersData.map(print);
                document.write(print_userData + "<br>");

                function print(value)
                {
                    return value.name + " " + value.lastName + "  " + value.school + " " + value.profession; 
                }


        //Multiplication By 10 

        var multiply_ages_by_Ten = agesArray.map(function(value)
        {
            return value*10;

        }
        
        );
        document.write(multiply_ages_by_Ten);



        //8) Problem Name: DateMethod
        var print_date = Date();
        console.log(print_date);




