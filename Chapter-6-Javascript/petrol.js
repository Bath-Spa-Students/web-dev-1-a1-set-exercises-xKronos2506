function calculate() {
    // sets variables, fetches any following information within the id, and converts the following inputs into float numbers to be proccessed
    var gasPrice = parseFloat(document.getElementById("price").value);
    var liters = parseFloat(document.getElementById("liters").value);
    
    // sets an operational variable through multiplying the input from gasprice and liters
    var totalCost = gasPrice * liters;

    // Displays the total cost variable once the button is pressed
    document.getElementById("totalCost").textContent = "Total Cost: AED " + totalCost.toFixed(2);
}
 