
async function fetchUsers() {
    const container = document.getElementById('userContainer');
    const errorMsg = document.getElementById('errorMsg');
    container.innerHTML = '';
    errorMsg.textContent = '';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Network response was not ok');

        const users = await response.json();
        users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user-card');
            userDiv.innerHTML = `
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
            `;
            container.appendChild(userDiv);
        });
    } catch (error) {
        errorMsg.textContent = 'Failed to load user data. Please check your internet connection.';
    }
}

// Load users on initial page load
fetchUsers();
