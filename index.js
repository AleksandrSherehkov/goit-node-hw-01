const contactsService = require('./contacts');

const invokerAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await contactsService.listContacts();
      return console.log(allContacts);

    case 'getById':
      const contact = await contactsService.getContactById(id);
      return console.log(contact);

    case 'create':
      const newContact = await contactsService.addContact({ name, email, phone });
      return console.log(newContact);

    case 'remove':
      const removeContact = await contactsService.removeContact(id);
      return console.log(removeContact);

    default:
      break;
  }
};

//invokerAction({ action: 'list' });
//invokerAction({ action: 'getById', id: 'C9sjBfCo4UJCWjzBnOtxl' });
// invokerAction({
//   action: 'create',
//   name: 'Wednesday Addams',
//   email: 'Wednesday@addams.com',
//   phone: '(009) 999-9999',
// });
invokerAction({ action: 'remove', id: 'k4WYHCdAICcOsfHKuPQCt' });
