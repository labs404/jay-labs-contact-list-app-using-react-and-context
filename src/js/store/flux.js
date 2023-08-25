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
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/labs404")
				.then(response => response.json())
				.then(data => {
					setStore({contacts: data})})
			},

			deleteContact: (id) => {
				const store = getStore();
				let revisedContactList = store.contacts.filter(contact => contact.id !== id);
				getActions().fetchDeleteOneContact(id);
				setStore({ contacts: revisedContactList });
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

			saveContact: (fullName, emailAddress, phoneNumber, mailingAddress ) => {
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: 'POST',
					body: JSON.stringify({
						full_name: fullName,
						email: emailAddress,
						agenda_slug: "labs404",
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
				fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
					method: 'PUT',
					body: JSON.stringify({
						full_name: name,
						email: email,
						agenda_slug: "labs404",
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