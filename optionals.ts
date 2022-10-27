interface User {
    name: string;
    personalData? : {
        email?: string;
    }
}

function returnUserEmail(user: User):string {
    return user?.personalData?.email ?? "";
}

console.log(returnUserEmail({name: 'john', personalData: {email: 'john@'}}));
console.log(returnUserEmail({name: 'john', personalData: {}}));