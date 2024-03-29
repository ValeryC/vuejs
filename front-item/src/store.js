import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        title: 'Tomate',
        url: '/assets/tomate.jpg',
        description: 'La tomate colore les étals de nos marchés et nos assiettes tout au long de l’année. Elle se prête à une infinité de préparations. Très riche au niveau nutritionnel, elle a de véritables atouts bien-être. Toutes ses qualités en font le légume le plus consommé.',
        price: 2.40,
        // ratings: 3,
        // reviews: 5,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 0
      },
      {
        id: 2,
        title: 'Salade',
        url: '/assets/salade.jpeg',
        description: 'La salade est une plante potagère dont on consomme les feuilles le plus souvent crues. De la saveur douce de la laitue en passant par le poivré naturel de la roquette ou l’amertume délicate de l’endive, les salades nous en font voir de toutes les saveurs !',
        price: 0.60,
        // ratings: 5,
        // reviews: 10,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 0
      },
      {
        id: 3,
        title: 'Morille',
        url: '/assets/morille.jpg',
        description: 'Plaisir printanier exclusif, la morille sort du commun avec son chapeau alvéolé. Ce champignon sauvage embaume les plats avec un parfum unique, très subtil. Reconnue sur le plan gustatif, elle présente également de vrais arguments nutritionnels.',
        price: 46.50,
        // ratings: 2,
        // reviews: 3,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 0
      },
      // {
      //   id: 4,
      //   title: 'Product 4',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      //   price: 50,
      //   ratings: 1,
      //   reviews: 0,
      //   isAddedToCart: false,
      //   isAddedBtn: false,
      //   isFavourite: false,
      //   quantity: 1
      // },
      // {
      //   id: 5,
      //   title: 'Product 5',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      //   price: 35,
      //   ratings: 4,
      //   reviews: 2,
      //   isAddedToCart: false,
      //   isAddedBtn: false,
      //   isFavourite: false,
      //   quantity: 1
      // },
      // {
      //   id: 6,
      //   title: 'Product 6',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      //   price: 110,
      //   ratings: 5,
      //   reviews: 1,
      //   isAddedToCart: false,
      //   isAddedBtn: false,
      //   isFavourite: false,
      //   quantity: 1
      // },
      // {
      //   id: 7,
      //   title: 'Product 7',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      //   price: 50,
      //   ratings: 5,
      //   reviews: 7,
      //   isAddedToCart: false,
      //   isAddedBtn: false,
      //   isFavourite: false,
      //   quantity: 1
      // },
      // {
      //   id: 8,
      //   title: 'Product 8',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      //   price: 35,
      //   ratings: 3,
      //   reviews: 0,
      //   isAddedToCart: false,
      //   isAddedBtn: false,
      //   isFavourite: false,
      //   quantity: 1
      // },
      // {
      //   id: 9,
      //   title: 'Product 9',
      //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      //   price: 110,
      //   ratings: 4,
      //   reviews: 2,
      //   isAddedToCart: false,
      //   isAddedBtn: false,
      //   isFavourite: false,
      //   quantity: 1
      // }
    ],
    userInfo: {
      isLoggedIn: false,
      isSignedUp: false,
      hasSearched: false,
      name: '',
      productTitleSearched: ''
    },
    systemInfo: {
      openLoginModal: false,
      openSignupModal: false,
      openCheckoutModal: false
    }
  },
  
  getters: {
    productsAdded: state => {
      return state.products.filter(el => {
        return el.isAddedToCart;
      });
    },
    productsAddedToFavourite: state => {
      return state.products.filter(el => {
        return el.isFavourite;
      });
    },
    getProductById: state => id => {
      return state.products.find(product => product.id == id);
    },
    isUserLoggedIn: state => {
      return state.userInfo.isLoggedIn;
    },
    isUserSignedUp: state => {
      return state.userInfo.isSignedUp;
    },
    getUserName: state => {
      return state.userInfo.name;
    },
    isLoginModalOpen: state => {
      return state.systemInfo.openLoginModal;
    },
    isSignupModalOpen: state => {
      return state.systemInfo.openSignupModal;
    },
    isCheckoutModalOpen: state => {
      return state.systemInfo.openCheckoutModal;
    },
    quantity: state => {
      return state.products.quantity;
    }
  },
  
  mutations: {
    addToCart: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isAddedToCart = true;
        }
      });
    },
    setAddedBtn: (state, data) => {
      state.products.forEach(el => {
        if (data.id === el.id) {
          el.isAddedBtn = data.status;
        }
      });
    },
    removeFromCart: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isAddedToCart = false;
        }
      });
    },
    removeProductsFromFavourite: state => {
      state.products.filter(el => {
        el.isFavourite = false;
      });
    },
    isUserLoggedIn: (state, isUserLoggedIn) => {
      state.userInfo.isLoggedIn = isUserLoggedIn;
    },
    isUserSignedUp: (state, isSignedUp) => {
      state.userInfo.isSignedUp = isSignedUp;
    },
    setHasUserSearched: (state, hasSearched) => {
      state.userInfo.hasSearched = hasSearched;
    },
    setUserName: (state, name) => {
      state.userInfo.name = name;
    },
    setProductTitleSearched: (state, titleSearched) => {
      state.userInfo.productTitleSearched = titleSearched;
    },
    showLoginModal: (state, show) => {
      state.systemInfo.openLoginModal = show;
    },
    showSignupModal: (state, show) => {
      state.systemInfo.openSignupModal = show;
    },
    showCheckoutModal: (state, show) => {
      state.systemInfo.openCheckoutModal = show;
    },
    addToFavourite: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isFavourite = true;
        }
      });
    },
    removeFromFavourite: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isFavourite = false;
        }
      });
    },
    quantity: (state, data) => {
      state.products.forEach(el => {
        if (data.id === el.id) {
          el.quantity = data.quantity;
        }
      });
    }
  },
  
  actions: {

  }
});
