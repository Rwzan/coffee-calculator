function calculateCoffee() {

    let hours = document.getElementById("hours").value;

    let coffee = Math.ceil(hours / 2);

    if (hours > 10) {

        document.getElementById("result").textContent =
            "Please sleep 😭";

    } else {

        document.getElementById("result").textContent =
            `You need ${coffee} cups of coffee ☕`;

    }
}