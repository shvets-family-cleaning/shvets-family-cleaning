document.getElementById("calculate").addEventListener("click", () => {
  const type = document.getElementById("type").value;
  const bedrooms = parseInt(document.getElementById("bedrooms").value);
  const bathrooms = parseInt(document.getElementById("bathrooms").value);

  let basePrice = type === "home" ? 100 : type === "office" ? 150 : 75;
  const price = basePrice + bedrooms * 20 + bathrooms * 15;

  document.getElementById("price").textContent = `Total Price: $${price}`;
});

// Reviews API simulation
const reviews = [
  { name: "John Doe", text: "Fantastic service!" },
  { name: "Jane Smith", text: "Highly recommend Shvets Cleaning Pro!" },
];

const reviewContainer = document.getElementById("review-container");
reviews.forEach(review => {
  const reviewDiv = document.createElement("div");
  reviewDiv.innerHTML = `<strong>${review.name}</strong><p>${review.text}</p>`;
  reviewContainer.appendChild(reviewDiv);
});
