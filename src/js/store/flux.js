const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				{
					"fullname": "Dave Bradley",
					"email": "dave@gmail.com",
					"address":"47568 NW 34ST, 33434 FL, USA",
					"phone":"7864445566",
					"id": "345634553683578453455"
				},
				{
					"fullname": "Name Placeholder Zero",
					"email": "zero@zero.com",
					"address":"Zero City, Zero State, Zero Country",
					"phone":"000-000-0000",
					"id": "543456345674566268468"
				},
				{
					"fullname": "Name Placeholder One",
					"email": "one@one.com",
					"address":"One City, One State, One Country",
					"phone":"111-111-1111",
					"id": "345245783456623435855"
				},
				{
					"fullname": "Name Placeholder Two",
					"email": "two@two.com",
					"address":"Two City, Two State, Two Country",
					"phone":"222-222-2222",
					"id": "678536452385634563333"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			fetchAllContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/labs404")
				.then(response => response.json())
				.then(data => {
					setStore({contacts: data.contacts})})
			},

			deleteContact: (id) => {
				const store = getStore();
				let revisedContactList = store.contacts.filter(contact => contact.id !== id);
				getActions().fetchDeleteOneContact(id);
				setStore({ contacts: revisedContactList });
			},

			fetchDeleteOneContact: (id) => {
				fetch("https://playground.4geeks.com/contact/agendas/labs404/contacts/"+id, {
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
				fetch("https://playground.4geeks.com/contact/agendas/", {
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

			saveContact: (fullName, emailAddress, phoneNumber, mailingAddress ) => {
				fetch("https://playground.4geeks.com/contact/agendas/labs404/contacts", {
				    method: 'POST',
					body: JSON.stringify({
						name: fullName,
						email: emailAddress,
						address: mailingAddress,
						phone: phoneNumber
					}),
					headers: {'Content-Type': 'application/json'}
				})
				.then(response => {
					if (!response.ok) throw Error(response.statusText);
					getActions().fetchAllContacts();
					return response;
				})
				.then(() => console.log("Successfully added one contact"))
				.catch(error => console.error("Error", error))
			},

			editContact: (name, email, phone, mail, id) => {
				fetch("https://playground.4geeks.com/contact/agendas/labs404/contacts/"+id, {
					method: 'PUT',
					body: JSON.stringify({
						name: name,
						email: email,
						address: mail,
						phone: phone,
					}),
					headers: {'Content-Type': 'application/json'}
				})
				.then(response => {
					if (!response.ok) throw Error(response.statusText);
					getActions().fetchAllContacts();
					return response;
				})
				.then(() => console.log("Successfully added one contact"))
				.catch(error => console.error("Error", error))
			},	
		}
	};
};

export default getState;