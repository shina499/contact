document.addEventListener("DOMContentLoaded", () => {
  createDOM()
});

function deleteItem(button) {
  let card = button.closest("[data-index]");
  let index = card.dataset.index;
  card.remove();
  let contactArray = JSON.parse(localStorage.getItem("contact")) || [];
  contactArray.splice(index, 1);
  localStorage.setItem("contact", JSON.stringify(contactArray));
  createDOM()
}
function createDOM() {
  let cardsParent = document.getElementById("cardsParent");
  let contactArray = JSON.parse(localStorage.getItem("contact")) || []; 
  contactArray.forEach((element, index) => {
    let tag =`
      <div
        class="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2"
        data-index="${index}" 
      >
        <div
          class="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300"
        >
          <figure class="mb-2">
            <!-- image -->
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjpd_ZckVdDDtqir1MT6dtqiQTH5H_j7E2oA&s"
              alt=""
              class="h-64 ml-auto mr-auto"
            />
          </figure>
          <div class="rounded-lg p-4 bg-indigo-500 flex flex-col">
            <div>
              <!-- user name -->
              <h5 class="text-white text-2xl font-bold leading-none userName">
               ${element.name}
              </h5>
              <!-- user last name -->
              <span
                class="text-xs text-gray-400 leading-none userLastname"
                >${element.lastname}</span
              >
            </div>
            <div class="flex items-center flex-col">
              <!-- phone -->
              <div class="text-lg text-white font-light userphone">
                ${element.phone}
              </div>
              <div class="flex justify-end gap-2 w-full">
                <!-- delete btn -->
                <button
                  onclick="deleteItem(this)"
                  class="rounded-full bg-indigo-700 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex transition duration-300 flex justify-center items-center delete"
                >
                  🗑️
                </button>
                <!-- edit btn -->
                <button
                  class="rounded-full bg-indigo-700 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex transition duration-300 flex justify-center items-center"
                >
                  ✏️
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>`
    ;
    cardsParent.insertAdjacentHTML("beforeend", tag);
  });
}