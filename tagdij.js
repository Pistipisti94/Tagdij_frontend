document.addEventListener("DOMContentLoaded", function () {
    const createButton = document.getElementById("create");
    const readButton = document.getElementById("read");
    const updateButton = document.getElementById("update");
    const deleteButton = document.getElementById("delete");
    var table = document.getElementById("ugyfellista");
    function  select() {
        
        console.log("select");
        
    }
    createButton.addEventListener("click", function () {
        const formData = new FormData(document.getElementById("myForm"));
        let baseUrl = "http://localhost/Tagdij_backend/index.php?ugyfel";
        let dataJSON = {
            "azon": document.getElementById("azon").value,
            "nev": document.getElementById("nev").value,
            "szulev": document.getElementById("szulev").value,
            "irsz": document.getElementById("irszam").value,
            "orsz": document.getElementById("orsz").value
        };
        let options = {
            method: "POST",
            headers: {

            },
            body: formData

        };
        response = fetch(baseUrl, options);
    })
    readButton.addEventListener("click", async function () {
        let baseUrl = "http://localhost/Tagdij_backend/index.php?ugyfel";
        let dataJSON = {
            "azon": document.getElementById("azon").value,
            "nev": document.getElementById("nev").value,
            "szulev": document.getElementById("szulev").value,
            "irsz": document.getElementById("irszam").value,
            "orsz": document.getElementById("orsz").value
        };
        let options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }

        };
        console.log(options);
        let response = await fetch(baseUrl, options);
        let data = await response.json();
        let tabla = "";
        tabla = `
                            <table class="table table-striped ">
                                <thead>
                                    <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nev</th>
                                    <th scope="col">Született</th>
                                    <th scope="col">Iranyitoszam</th>
                                    <th scope="col">Orszag</th>
                                    <th scope="col">#</th>
                                    </tr>
                                </thead>
                            <tbody>
                            `;
        let row = 1;
        data.forEach(element => {

            tabla += `<tr><th scope='row'>` + element.azon + `</th><td>` + element.nev + `</td><td>` + element.szulev + `</td><td>` + element.irszam + `</td><td>` + element.orsz + `</td><td><Button class="btn btn-primary" id="` + element.orsz + `" onclick="select()">Pick</Button></td></tr>`;
            row++;
        });
        tabla += `</tbody>
                            </table>`;
        table.innerHTML = tabla;
    })
    updateButton.addEventListener("click", function () {

    });
    deleteButton.addEventListener("click", function () {
        table.innerHTML = "";
    });

});
