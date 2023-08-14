const contactsService = require('./contacts');

const invokerAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await contactsService.listContacts();
      return console.log(allContacts);

    case 'get':
      const contact = await contactsService.getContactById(id);
      return console.log(contact);

    case 'add':
      const newContact = await contactsService.addContact({ name, email, phone });
      return console.log(newContact);

    case 'remove':
      const removeContact = await contactsService.removeContact(id);
      return console.log(removeContact);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

//invokerAction({ action: 'list' });
//invokerAction({ action: 'get', id: 'C9sjBfCo4UJCWjzBnOtxl' });
// invokerAction({
//   action: 'create',
//   name: 'Wednesday Addams',
//   email: 'Wednesday@addams.com',
//   phone: '(009) 999-9999',
// });
invokerAction({ action: 'remove', id: 'k4WYHCdAICcOsfHKuPQCt' });
