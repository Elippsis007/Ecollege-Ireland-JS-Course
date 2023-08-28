// initialization --> let i = 0;
        // Condition --> i < 5;
        // Counter --> i++ (i = 0 'index')
        
        
        for (let i = 0; i < 5; i++) {
            console.log('Loop' + i);
        if (i === 3) break;
        }


        const names = ['john', 'mary', 'tom', 'paul'];

        for (let i = 0; i < names.length; i++) {
            console.log(names[i]);
        }

        // Creating an object of user --> contains a key and value pair
        // Looping through each key and logging the value first by order
        const user = {'firstName': 'John', 'lastName': 'Doe'}
        for(key in user) console.log(user[key]);