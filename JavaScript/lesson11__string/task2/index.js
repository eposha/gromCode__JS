const sortContacts = (contacts, isAsc = true) => {
        if (!Array.isArray(contacts)) return null;

        return contacts.sort((a, b) => {
            if (isAsc) {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });
    }
    // const text = [
    //     { name: 'Tom', phoneNumber: '777-77-77' },
    //     { name: 'Ann', phoneNumber: '777-77-77' },
    //     { name: 'Ivan', phoneNumber: '777-77-77' },
    //     { name: 'Andrei', phoneNumber: '777-77-77' },
    //     { name: 'Petro', phoneNumber: '777-77-77' },
    //     { name: 'Vasia', phoneNumber: '777-77-77' },
    // ];
    // console.log(sortContacts(text));