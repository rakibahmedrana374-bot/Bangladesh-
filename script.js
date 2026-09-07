// Payment Numbers Config
const paymentNumbers = {
    bkash: "01700000000 (Personal)",
    nagad: "01800000000 (Personal)"
};

function showPaymentNumber(type) {
    const detailsDiv = document.getElementById("payment-details");
    const textContainer = document.getElementById("payment-text");

    if (type === 'bkash') {
        textContainer.innerHTML = `<strong>bKash Number:</strong> ${paymentNumbers.bkash}`;
        detailsDiv.style.borderLeftColor = "#e2136e";
    } else if (type === 'nagad') {
        textContainer.innerHTML = `<strong>Nagad Number:</strong> ${paymentNumbers.nagad}`;
        detailsDiv.style.borderLeftColor = "#f7921e";
    }

    detailsDiv.style.display = "block";
}
