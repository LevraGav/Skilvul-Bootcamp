import Item1 from '../images/avocado.jpg'
import Item2 from '../images/carrot.jpg'
import Item3 from '../images/corn.jpg'
import Item4 from '../images/garlic.jpg'
import Item5 from '../images/red-chili.jpg'
import Item6 from '../images/tomato.jpg'
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, SUB_SHIPPING } from '../actions/action-types/cartActions'


const initState = {
  items: [
    { id: 1, title: 'Avocado', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110, img: Item1 },
    { id: 2, title: 'Carrot', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80, img: Item2 },
    { id: 3, title: 'Corn', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, img: Item3 },
    { id: 4, title: 'Garlic', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260, img: Item4 },
    { id: 5, title: 'Red Chili', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160, img: Item5 },
    { id: 6, title: 'Tomato', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90, img: Item6 }
  ],
  addedItems: [],
  total: 0

}
const cartReducer = (state = initState, action) => {

  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    // Add code here
    let addedItem = state.items.find(item => item.id === action.id)
    
    let existed_item = state.addedItems.find(item => action.id === item.id)
    if (existed_item) {
      addedItem.quantity += 1
      return {
        ...state,
        total: state.total + addedItem.price
      }
    }
    else {
      addedItem.quantity = 1;
      let newTotal = state.total + addedItem.price

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      }
    }
  }

  if (action.type === REMOVE_ITEM) {
    // Add code here
    let itemToRemove = state.addedItems.find(item => action.id === item.id)
    let new_items = state.addedItems.filter(item => action.id !== item.id)

    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
    console.log(itemToRemove)
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    }
  }

  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    // Add code here
    let addedItem = state.items.find(item => item.id === action.id)
    addedItem.quantity += 1
    let newTotal = state.total + addedItem.price
    return {
      ...state,
      total: newTotal
    }
  }

  if (action.type === SUB_QUANTITY) {
    // Add code here
    let addedItem = state.items.find(item => item.id === action.id)
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id)
      let newTotal = state.total - addedItem.price
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      }
    }
    else {
      addedItem.quantity -= 1
      let newTotal = state.total - addedItem.price
      return {
        ...state,
        total: newTotal
      }
    }

  }

  if (action.type === ADD_SHIPPING) {
    // Add code here
    return {
      ...state,
      total: state.total + 6
    }
  }

  if (action.type === SUB_SHIPPING) {
    // Add code here
    return {
      ...state,
      total: state.total - 6
    }
  }

  else {
    return state
  }

}

export default cartReducer
