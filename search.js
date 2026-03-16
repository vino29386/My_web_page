function searchShoes() {
  let query = document.getElementById("searchInput").value.toLowerCase();

  // Real shoe names mapped to their pages
  let shoes = [
    { name: "Nike Air Force 1 Supreme", page: "shoe1.html" },
    { name: "Nike × Levi’s Denim High-Top", page: "shoe2.html" },
    { name: "Fashion WB8 High-Top", page: "shoe3.html" },
    { name: "Minimalist Black Low-Top Sneaker", page: "shoe4.html" },
    { name: "Nike Air Force 1 Color-Block", page: "shoe5.html" },
    { name: "Air Jordan 1 University Blue", page: "shoe6.html" },
    { name: "Nike Air Force 1 All-White", page: "shoe7.html" },
    { name: "Louis Vuitton Monogram Sneaker", page: "shoe8.html" },
    { name: "Nike × Levi’s Acid-Wash Denim", page: "shoe9.html" },
    { name: "Air Jordan 1 Mid Grey/Black", page: "shoe10.html" },
    { name: "Nike Air Force 1 Grey/Orange", page: "shoe11.html" },
    { name: "Nike Air Force 1 High-Top Strap", page: "shoe12.html" },
    { name: "Fashion Sport High-Top", page: "shoe13.html" },
    { name: "Air Jordan 4 Retro Black/White", page: "shoe14.html" },
    { name: "Minimalist White Sneaker", page: "shoe15.html" },
    { name: "Minimalist White Sneaker (Smooth)", page: "shoe16.html" }
  ];

  // Find matching shoe by name
  let result = shoes.find(shoe => shoe.name.toLowerCase().includes(query));

  if (result) {
    window.location.href = result.page; // redirect to shoe page
  } else {
    alert("No matching product found!");
  }
}
