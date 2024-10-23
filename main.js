console.log("ok");

        const endpoint = "https://reqres.in/api/users";

        fetch(endpoint)
        .then((result) => result.json())
        .then(({ data }) => {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = data.map(user => `
                <div>
                    <p><strong>Name:</strong> ${user.first_name} ${user.last_name}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <img src="${user.avatar}" alt="Avatar" />
                </div>
            `).join(''); 
        })
        .catch((error) => {
            const resultDiv = document.getElementById('result');
            resultDiv.textContent = `Error: ${error}`;
        });