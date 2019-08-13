// Storage Controller
const StorageCtrl = (function() {
    // Public Method
    return {
        storeItem: function(item) {
            let items;
            // Check if any items in local storage
            if (localStorage.getItem('items') === null) {
                items = [];
                items.push(item);
                // Set Local storage
                localStorage.setItem('items', JSON.stringify(items));
            } else {
                items = JSON.parse(localStorage.getItem('items'));

                // Push New Items
                items.push(item);
                // Reset Local Storage
                localStorage.setItem('items', JSON.stringify(items));
            }
        },
        getItemsFromStorage: function() {
            let items;
            if (localStorage.getItem('items') === null) {
                items = [];
            } else {
                items = JSON.parse(localStorage.getItem('items'));
            }
            return items;
        },
        updateItemStorage: function(updatedItem) {
            let items = JSON.parse(localStorage.getItem('items'));

            items.forEach((item, index) => {
                if (updatedItem.id === item.id) {
                    items.splice(index, 1, updatedItem);
                }
            });
            localStorage.setItem('items', JSON.stringify(items));
        },
        deleteItemFromStorage: function(id) {
            let items = JSON.parse(localStorage.getItem('items'));

            items.forEach((item, index) => {
                if (id === item.id) {
                    items.splice(index, 1);
                }
            });
            localStorage.setItem('items', JSON.stringify(items));
        },

        clearItemsFromStorage: function() {
            localStorage.removeItem('items');
        }
    }
})();
// Item Controller

const ItemCrtl = (function() {
    // Item Contructor
    const Item = function(id, name, calories) {
            this.id = id;
            this.name = name;
            this.calories = calories;
        }
        // Data Structure / State

    const data = {
        items: StorageCtrl.getItemsFromStorage(),
        currentItem: null,
        totalCalories: 0
    }


    // Public Methods
    return {
        getItems: function() {
            return data.items;
        },

        addItem: function(name, calories) {
            let ID;
            // Create ID
            if (data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0
            }

            // Calories to Number

            calories = parseInt(calories);

            // Create new item

            newItem = new Item(ID, name, calories);
            // Add to items array

            data.items.push(newItem);

            return newItem;
        },

        getItemById: function(id) {
            let found = null;
            // Loop Thorough the items
            data.items.forEach(item => {
                if (item.id === id) {
                    found = item;
                }
            });

            return found;
        },

        updatedItem: function(name, calories) {
            // Calories to number 
            calories = parseInt(calories);

            let found = null;

            data.items.forEach(item => {
                if (item.id === data.currentItem.id) {
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });
            return found;

        },

        deleteItem: function(id) {
            // Get ids
            ids = data.items.map(function(item) {
                return item.id;
            });

            // Get Index

            const index = ids.indexOf(id);

            // Remove Item

            data.items.splice(index, 1);
        },

        clearAllItems: function(item) {
            data.items = [];
        },

        setCurrentItem: function(item) {
            data.currentItem = item;
        },

        getCurrentItem: function() {
            return data.currentItem;
        },

        getTotalCalories: function() {
            let total = 0;

            data.items.forEach(item => {
                total += item.calories;
            });

            data.totalCalories = total;

            return data.totalCalories;
        },

        logData: function() {
            return data;
        }
    }

})();

// UI Controller
const UICrtl = (function() {
    const UISelectors = {
        itemList: '#item-list',
        listItems: '#item-list li',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories',
        clearBtn: '.clear-btn'
    }

    // Public Methods

    return {
        populateItemList: function(items) {
            let html = '';
            items.forEach(item => {
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                  <i class="fa fa-pencil"></i>
                </a>
              </li>`;
            });

            // Insert list Items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getItemInput: function() {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value
            }
        },

        addListItem: function(item) {
            // Show the list
            document.querySelector(UISelectors.itemList).style.display = 'Block';
            // Create li element
            const li = document.createElement('li');
            // Add Class
            li.className = 'collection-item';
            // Add ID
            li.id = `item-${item.id}`;
            // Add HTML
            li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
            </a>`;
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);

        },

        updateListItem: function(item) {
            let listItems = document.querySelectorAll(UISelectors.listItems);

            // Turn node list into array
            listItems = Array.from(listItems);

            listItems.forEach(function(listItem) {
                const itemID = listItem.getAttribute('id');

                if (itemID === `item-${item.id}`) {
                    document.querySelector(`#${itemID}`).innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                    <a href="#" class="secondary-content">
                      <i class="edit-item fa fa-pencil"></i>
                    </a>`
                }
            });
        },

        deleteListItem: function(id) {
            const itemID = `#item-${id}`
            const item = document.querySelector(itemID);
            item.remove();
        },

        clearInput: function() {
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },
        addItemToForm: function() {
            document.querySelector(UISelectors.itemNameInput).value = ItemCrtl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCaloriesInput).value = ItemCrtl.getCurrentItem().calories;
            UICrtl.showEditState();
        },

        removeItems: function() {
            let listItems = document.querySelectorAll(UISelectors.listItems);

            // Turn Node List Into Array

            listItems = Array.from(listItems);

            listItems.forEach(item => {
                item.remove();
            })
        },



        hideList: function() {
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },

        showTotalCalories: function(totalCalories) {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;

        },

        clearEditState: function() {
            UICrtl.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
        },

        showEditState: function() {
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
        },

        getSelectors: function() {
            return UISelectors;
        }
    }

})();

// App Controller
const App = (function(ItemCrtl, UICrtl, StorageCtrl) {
    // lOAD EVENT LISTERNERS

    const loadEventListeners = function() {
        const UISelectors = UICrtl.getSelectors();

        // Add Item event

        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

        // Disable submit on enter

        document.addEventListener('keypress', function(e) {
            if (e.keyCode === 13 || e.which === 13) {
                e.preventDefault();
                return false;
            }
        })

        // Edit icon click event
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

        document.querySelector(UISelectors.backBtn).addEventListener('click', UICrtl.clearEditState);

        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
    }

    // Add Item submit
    const itemAddSubmit = function(e) {
        // Get Form input from UI controller

        const input = UICrtl.getItemInput();

        // Check for name and calories

        if (input.name !== '' && input.calories !== '') {
            // Add Item
            const newItem = ItemCrtl.addItem(input.name, input.calories);

            // Add Item to UI List

            UICrtl.addListItem(newItem);

            // get Total calories
            const totalCalories = ItemCrtl.getTotalCalories();

            // Add total calories to UI
            UICrtl.showTotalCalories(totalCalories);

            // Store in local storage

            StorageCtrl.storeItem(newItem);

            // Clear fields

            UICrtl.clearInput();

        }

        e.preventDefault();
    }

    // Update Item Submit

    const itemEditClick = function(e) {
        if (e.target.classList.contains('edit-item')) {
            // Get list item id (item-0, item-1)

            const listId = e.target.parentNode.parentNode.id;

            // Break Into an Array

            const listIdArr = listId.split('-');

            // Get Actual ID

            const id = parseInt(listIdArr[1]);

            // Get Item

            const itemToEdit = ItemCrtl.getItemById(id);

            // Set Current Item

            ItemCrtl.setCurrentItem(itemToEdit);

            // Add Item to form

            UICrtl.addItemToForm();
        }

        e.preventDefault();
    }

    // Update item Submit

    const itemUpdateSubmit = function(e) {
        // Get Item input
        const input = UICrtl.getItemInput();

        // Update Item

        const updatedItem = ItemCrtl.updatedItem(input.name, input.calories);

        // Update UI

        UICrtl.updateListItem(updatedItem);

        // get Total calories
        const totalCalories = ItemCrtl.getTotalCalories();

        // Add total calories to UI
        UICrtl.showTotalCalories(totalCalories);

        // Update local Storage
        StorageCtrl.updateItemStorage(updatedItem);

        UICrtl.clearEditState();

        e.preventDefault();
    }

    // Delete Button Event

    const itemDeleteSubmit = function(e) {
        // Get Current Item

        const currentItem = ItemCrtl.getCurrentItem();


        // Delete fram Data Structure

        ItemCrtl.deleteItem(currentItem.id);

        // Delete From UI

        UICrtl.deleteListItem(currentItem.id);

        // get Total calories
        const totalCalories = ItemCrtl.getTotalCalories();

        // Add total calories to UI
        UICrtl.showTotalCalories(totalCalories);

        // Delete from local storage

        StorageCtrl.deleteItemFromStorage(currentItem.id);

        UICrtl.clearEditState();



        e.preventDefault();
    }

    // Clear Items Event

    const clearAllItemsClick = function() {
        // Delete all items from data structure
        ItemCrtl.clearAllItems();

        // get Total calories
        const totalCalories = ItemCrtl.getTotalCalories();

        // Add total calories to UI
        UICrtl.showTotalCalories(totalCalories);


        // Remove from UI
        UICrtl.removeItems();

        // Clear From Local Storage

        StorageCtrl.clearItemsFromStorage();

        // Hide UL

        UICrtl.hideList();
    }

    // Public Methods
    return {
        init: function() {
            // Clear edit state
            UICrtl.clearEditState();

            // Fetch Items from data struc
            const items = ItemCrtl.getItems();

            // Check if any item 

            if (items.length === 0) {
                UICrtl.hideList();
            } else {
                // Populate List with items
                UICrtl.populateItemList(items);
            }

            // get Total calories
            const totalCalories = ItemCrtl.getTotalCalories();

            // Add total calories to UI
            UICrtl.showTotalCalories(totalCalories);


            // Load Event Listeners
            loadEventListeners();
        }
    }

})(ItemCrtl, UICrtl, StorageCtrl);


// Init App

App.init();