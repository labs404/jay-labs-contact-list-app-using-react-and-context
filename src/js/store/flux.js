const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				{
					"full_name": "Dave Bradley",
					"email": "dave@gmail.com",
					"agenda_slug": "my_super_agenda",
					"address":"47568 NW 34ST, 33434 FL, USA",
					"phone":"7864445566"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			fetchAllContacts: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/labs404")
				.then(response => response.json())
				.then(data => {
					setStore({contacts: data})})
			},
			fetchDeleteOneContact: (id) => {
				fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
					method: 'DELETE',
					body: JSON.stringify(id),
					headers: {'Content-Type': 'application/json'}
				})
					.then(response => {
						if (!response.ok) throw Error(response.statusText);
						return response;
					})
					.then(response => console.log("Successfully Deleted a Contact", response))
			},
			fetchAddOneContact: (newContact) => {
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: 'POST',
					body: JSON.stringify(newContact),
					headers: {'Content-Type': 'application/json'}
				})
					.then(response => {
						if (!response.ok) throw Error(response.statusText);
						return response;
					})
					.then(response => console.log("Successfully Added a Contact", response))
			},
			deleteContact: (id) => {
				const store = getStore();
				let revisedContactList = store.contacts.filter(contact => contact.id !== id);
				getActions().fetchDeleteOneContact(id);
				setStore({ contacts: revisedContactList });
			},
			saveContact: () => {
				// let newContact = {
				// 	"full_name": fullName,
				// 	"email": email,
				// 	"agenda_slug": "labs404",
				// 	"address": address,
				// 	"phone": phone
				// };
				let newContact = {
					full_name: "John Dough",
					email: "John@Dough.Com",
					agenda_slug: "labs404",
					address: "This is an address",
					phone: "123-456-7890"
				};
				getActions().addContact(newContact);
			},
			addContact: (newContact) => {
				const store = getStore();
				let revisedStore = [...store.contacts, newContact];
				getActions().fetchAddOneContact(newContact);
				setStore({ contacts: revisedStore });
			}
		}
	};
};

export default getState;
