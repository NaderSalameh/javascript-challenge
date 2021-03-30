//table 
var tbody = d3.select("tbody");



// inspect the data
console.log(data)


data.forEach(item => 
    {

        var row = tbody.append("tr")
        row.append("td").text(item.datetime);
        row.append("td").text(item.city);
        row.append("td").text(item.state);
        row.append("td").text(item.country);
        row.append("td").text(item.shape);
        row.append("td").text(item.durationMinutes);

    })