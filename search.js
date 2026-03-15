function searchShoes() {
  let query = document.getElementById("searchInput").value.toLowerCase();

  // List of shoes with their pages
  let shoes = [
    { name: "Shoe 1", page: "shoe1.html" },
    { name: "Shoe 2", page: "shoe2.html" },
    { name: "Shoe 3", page: "shoe3.html" },
    { name: "Shoe 4", page: "shoe4.html" },
    { name: "Shoe 5", page: "shoe5.html" },
    { name: "Shoe 6", page: "shoe6.html" },
    { name: "Shoe 7", page: "shoe7.html" },
    { name: "Shoe 8", page: "shoe8.html" },
    { name: "Shoe 9", page: "shoe9.html" },
    { name: "Shoe 10", page: "shoe10.html" },
    { name: "Shoe 11", page: "shoe11.html" },
    { name: "Shoe 12", page: "shoe12.html" },
    { name: "Shoe 13", page: "shoe13.html" },
    { name: "Shoe 14", page: "shoe14.html" },
    { name: "Shoe 15", page: "shoe15.html" },
    { name: "Shoe 16", page: "shoe16.html" }
  ];

  // Find matching shoe
  let result = shoes.find(shoe => shoe.name.toLowerCase().includes(query));

  if (result) {
    window.location.href = result.page; // redirect to shoe page
  } else {
    alert("No matching product found!");
  }
}
