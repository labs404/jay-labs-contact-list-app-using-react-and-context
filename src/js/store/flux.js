const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				{
					"name": "This is a placeholder contact.",
					"address":"We have created a new agenda for you.",
					"phone":"Please add a new contact to continue.",
					"email": "This contact will automatically be deleted.",
					"id": "345634553683578453455"
				}
			]
		},
		actions: {

			fetchAllContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/labs404")
					.then(response => {
						if (!response.ok) {
							getActions().createAgenda();
						}
						else {
							return response.json()
						};
					})
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
			
			createAgenda: () => {
				console.log("No such Agenda found! \n...Creating a new agenda.");
				fetch("https://playground.4geeks.com/contact/agendas/labs404", {
					method: 'POST',
				})
					.then(response => {
						if (!response.ok) throw Error(response.statusText);
						return response;
					})
					.then(() => {
						console.log("Successfully created an agenda! \n...Generating placeholder contact.");
						getActions().generatePlaceholderContact();
					
					})
					.catch(error => console.error("Error", error))
			},

			generatePlaceholderContact: () => {
				fetch("https://playground.4geeks.com/contact/agendas/labs404/contacts", {
				    method: 'POST',
					body: JSON.stringify({
						"name": "Hi there! I'm your first contact!",
						"address":"Please add more contacts to continue.",
						"phone":"Feel free to delete or update me at any time!",
						"email": "Thanks for using Jay's Contact List"
					}),
					headers: {'Content-Type': 'application/json'}
				})
					.then(response => {
						if (!response.ok) throw Error(response.statusText);
						getActions().fetchAllContacts();
						return response;
					})
					.then(() => console.log("Successfully generated one placeholder contact!"))
					.catch(error => console.error("Error", error))
			}
		}
	};
};

export default getState;