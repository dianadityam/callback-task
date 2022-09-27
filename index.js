function getData (url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200) {
            return callback(JSON.parse(xhr.responseText));
        };
    }
    xhr.open("GET", url);
    xhr.send();
}
const dataList = getData("https://jsonplaceholder.typicode.com/users", function(data) {
    createTable(data);
})

function createTable(dataTable) {
    let tableBody = document.getElementById('tableData');
    let contentData = "";
    dataTable.forEach((d) => {
        contentData +=
        `<tr>
            <td>${d.id}</td>
            <td>${d.name}</td>
            <td>${d.username}</td>
            <td>${d.email}</td>
            <td>${d.address.street} ${d.address.suite} ${d.address.city}</td>
            <td>${d.company.name}</td>
        </tr>`

    }); 
    tableBody.innerHTML = contentData;
}


