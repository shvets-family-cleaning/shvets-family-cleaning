document.getElementById("calculate").addEventListener("click", () => {
  const type = document.getElementById("type").value;
  const bedrooms = parseInt(document.getElementById("bedrooms").value, 10);
  const bathrooms = parseInt(document.getElementById("bathrooms").value, 10);

  let basePrice = 0;

  switch (type) {
    case "home":
      basePrice = 100;
      break;
    case "office":
      basePrice = 200;
      break;
    case "apartment":
      basePrice = 80;
      break;
    case "airbnb":
      basePrice = 120;
      break;
  }

  const total = basePrice + bedrooms * 10 + bathrooms * 15;
  document.getElementById("price").textContent = `Total Price: $${total}`;
});
