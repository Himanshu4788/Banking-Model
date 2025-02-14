document.getElementById('submit').addEventListener('click', function() {
    const account = {
        acc_no: document.getElementById('acc_no').value,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        occupation: document.getElementById('occupation').value,
        phone_no: document.getElementById('phone_no').value,
        address: document.getElementById('address').value,
        pin_code: document.getElementById('pin_code').value
    };

    // Retrieve existing accounts from localStorage or initialize an empty array
    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    // Add the new account to the array
    accounts.push(account);

    // Save the updated array back to localStorage
    localStorage.setItem('accounts', JSON.stringify(accounts));

    // Clear the form fields
    document.getElementById('acc_no').value = '';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('occupation').value = '';
    document.getElementById('phone_no').value = '';
    document.getElementById('address').value = '';
    document.getElementById('pin_code').value = '';

    alert('Account added successfully!');
});