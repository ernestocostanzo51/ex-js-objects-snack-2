const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

/* con la creazione di haburher si hanno 3 obj ovvero (hamburgher, maker , restaurant)
hamburgher che contiene dentro se maker che contiene detro se restaurant
quindi se andiamo a clonare per tre volte l'ogetto intero (hamburgher) con gli altri obj al suo interno
avremo in totale 9 obj

il risultato è NOVE OBJ */
