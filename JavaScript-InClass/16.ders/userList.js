const tbody = document.getElementById("tbodyUserList");
window.onload = () => {
    getApiUserList();
    setInterval(getApiUserList, 5000);
}
const getApiUserList = async (pageNo) => {
    showLoading();
    // const responseData = await axios({
    //     url: "https://reqres.in/api/users?page=1",
    //     method: "get"
    // });

    try {
        const responseData = await axios.get("https://reqres.in/api/users?page=1");
        const { data } = responseData.data;
    
        // const data = axios.get("https://reqres.in/api/users")
        // .then(response => {
        //     console.log("response", response)
        // }).
        // catch(err => console.log("err", err));
    
        console.log("data >>>", data);
        if (data.length === 0) {
            alert("userlist not found!");
            removeLoading();
        }
        else {
            tbody.innerHTML = "";
            data.forEach(customer => {
                tbody.innerHTML += ` <tr>
                <td>
                ${customer.id}
                </td>
                <td>
                <img src="${customer.avatar}"/>
                </td>
                <td>
                ${customer.email}
                </td>
                <td>
                ${customer.first_name}
                </td>
                <td>
                ${customer.last_name}
                </td>
         </tr>`;
                removeLoading()
            }); 
                
        }
    } 
    catch (error) {
        alert(error);
        removeLoading()
    }

}
