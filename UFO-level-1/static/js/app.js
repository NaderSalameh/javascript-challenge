// creating the dropdown list
var drop_date = d3.select("#DropDown-Date");
var drop_city = d3.select("#DropDown-City");
var drop_state = d3.select("#DropDown-State");
var drop_country = d3.select("#DropDown-Country");
var drop_shape = d3.select("#DropDown-Shape");


var date_list    = []
var city_list    = []
var state_list   = []
var country_list = []
var shape_list   = []

data.forEach(item =>
    {
        if (!date_list.includes(item.datetime)) 
        {
            date_list.push(item.datetime);
            drop_date.append("option").text(item.datetime)
        }

        if (!city_list.includes(item.city)) 
        {
            city_list.push(item.city);
            drop_city.append("option").text(item.city)
        }

        if (!state_list.includes(item.state)) 
        {
            state_list.push(item.state);
            drop_state.append("option").text(item.state)
        }

        if (!country_list.includes(item.country)) 
        {
            country_list.push(item.country);
            drop_country.append("option").text(item.country)
        }

        if (!shape_list.includes(item.shape)) 
        {
            shape_list.push(item.shape);
            drop_shape.append("option").text(item.shape)
        }

    }    
)

//****** button drop down events *******//
//--. creating the filer function to be passed through the event
d3.select("#query-button").on("click", function() 
    {
        var filtered_data = data

        inputDate    = d3.select("#DropDown-Date").property("value") 
        inputCity    = d3.select("#DropDown-City").property("value") 
        inputState   = d3.select("#DropDown-State").property("value") 
        inputCountry = d3.select("#DropDown-Country").property("value") 
        inputShape   = d3.select("#DropDown-Shape").property("value") 
        


        if (inputDate === "no filter") 
        { 
            filterData = filtered_data
        }
        else 
        {
            filterData = filtered_data.filter(item => item.datetime === inputDate)
        }

        if (inputCity === "no filter")
        { 
            filterData = filterData  
        }
        else
        {
            filterData = filterData.filter(item => item.city === inputCity)
        }

        if (inputState === "no filter")
        { 
            filterData = filterData 
        }
        else
        {
            filterData = filterData.filter(item => item.state === inputState) 
        }

        if (inputCountry === "no filter")
        { 
            filterData = filterData 
        }
        else
        {
            filterData = filterData.filter(item => item.country === inputCountry)
        }

        if (inputShape === "no filter")
        {  
            filterData = filterData 
        }
        else
        {
            filterData = filterData.filter(item => item.shape === inputShape) 
        }

 
        //table 
        var tbody = d3.select("tbody");
        tbody.html("")        
        filterData.forEach(item => 
             {
                var row = tbody.append("tr")
                row.append("td").text(item.datetime);
                row.append("td").text(item.city);
                row.append("td").text(item.state);
                row.append("td").text(item.country);
                row.append("td").text(item.shape);
                row.append("td").text(item.durationMinutes);
                row.append("td").text(item.comments.replace(/&#39/g, "'").replace(/&#44/g, ",").replace(/&#33/g, "!"));
             }
        )     
    }    
)













