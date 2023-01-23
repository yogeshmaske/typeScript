type person1={
    name:string;
}
type Email={
 email:string;
}
type phone ={
    phone:number;
}

type  contactDetails = 
&person1
&Email
&phone;

function contact(details:contactDetails) {
    console.log(`${details.name},${details.email},${details.phone}`);
};

contact();