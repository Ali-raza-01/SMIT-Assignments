var list = document.getElementById("list");
var items = [
  {
    name: "Apple",
    title: "The Healthy Choice",
    types: ["Fuji", "Gala", "Honeycrisp", "Granny Smith", "Red Delicious"],
    desc: "an apple a day keep doctors away",
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Banana",
    title: "The Quick Snack",
    types: ["Cavendish", "Red Banana", "Plantain", "Burro", "Manzano"],
    desc: "kela kha jaan bana .",
    image:
      "https://www.shutterstock.com/image-photo/banana-cluster-isolated-600nw-575528746.jpg",
  },
  {
    name: "Grapes",
    title: "Nature's Candy",
    types: ["Concord", "Thompson", "Cotton Candy", "Moon Drops", "Red Globe"],
    desc: "paise hen angoor lene k ?",
    image:
      "https://www.shutterstock.com/image-photo/green-grape-leaves-isolated-on-260nw-533487490.jpg",
  },
  
];

// Function to create cards
function createCards() {
  list.innerHTML = "";
  items.forEach(function (data, ind) {
    if (data !== undefined) {
      var ele = `<div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="bg-black shadow-md rounded-lg overflow-hidden">
          <img alt="gallery" class="w-full h-48 object-cover object-center" src="${data.image}">
          <div id="${ind}" class="p-6">
            <h2 class="tracking-widest text-sm title-font font-medium text-purple-400 mb-1">${data.name}</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">${data.title}</h1>
            <p class="leading-relaxed mb-3 text-gray-400">${data.types.join(" , ")}</p>
            <p class="leading-relaxed mb-3 text-gray-500">${data.desc}</p>
            <div class="flex justify-between">
              <button onclick="updateDesc(this)" class="bg-purple-500 hover:bg-purple-700 text-white px-3 py-2 rounded">Update</button>
              <button onclick="removeCard(this)" class="bg-red-500 hover:bg-red-700 text-white px-3 py-2 rounded">Remove</button>
            </div>
          </div>
        </div>
      </div>`;
      list.innerHTML += ele;
    }
  });
}

// Function to update the card description
function updateDesc(ele) {
  var index = ele.parentElement.parentElement.id;
  var newDesc = prompt("Enter new description:", items[index].desc);
  if (newDesc !== null) {
    items[index].desc = newDesc;
    createCards(); // Recreate the cards to reflect the updated description
  }
}

// Function to remove a card
function removeCard(ele) {
  var index = ele.parentElement.parentElement.id;
  delete items[index]; // Remove the item from the array
  createCards(); // Recreate the cards to reflect the removed item
}

// Initial creation of cards
createCards();
