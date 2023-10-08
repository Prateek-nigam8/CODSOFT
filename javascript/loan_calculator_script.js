function calculateLoan() {
    event.preventDefault();
    
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const loanTerm = parseFloat(document.getElementById("loanTerm").value);
    const paymentFrequency = parseFloat(document.getElementById("paymentFrequency").value);
    
    const numberOfPayments = paymentFrequency * loanTerm;
    
    const interestRatePerPeriod = interestRate / (paymentFrequency *100);
    
    const loanPayment = (loanAmount * interestRatePerPeriod) / (1 - Math.pow(1 + interestRatePerPeriod, -numberOfPayments));
    
    const totalInterestPaid = loanPayment * numberOfPayments - loanAmount;
    
    const totalPayment = loanPayment * numberOfPayments;
    
    document.getElementById("paymentFrequencyResult").innerHTML = paymentFrequency + " payments per year";
    document.getElementById("numberOfPayments").innerHTML = numberOfPayments + " payments";
    document.getElementById("loanPayment").innerHTML = "INR " + loanPayment.toFixed(2) + " per payment";
    document.getElementById("totalInterestPaid").innerHTML = "INR " + totalInterestPaid.toFixed(2);
    document.getElementById("totalPayment").innerHTML = "INR " + totalPayment.toFixed(2);
}

function summary_visible() {
    var a;
    a = document.getElementById("summary");
    a.style.visibility = "visible";
    a.style.height = "100%";
    a.style.marginTop = "50px";
}