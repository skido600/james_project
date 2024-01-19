
let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let selection = document.getElementById('membership').value;
    let pool = document.getElementById('pool_access').checked;
    let months = parseInt(document.getElementById('months').value);
    // console.log(months)
    // The membershipLEVEL
    let membershiplevel = {
        'Bronze': 50.00,
        'Silver': 75.00,
        'Gold': 90.00,
    }
    // calculation for membership
    let base = membershiplevel[selection] * months
    // console.log(base)

    // pool access
    if (pool) {
        base += 25.00 * months;

    }
    //showing the result in alert
    alert(`The Total cost:${base.toFixed(2)}`)

})