let myName = "jeff besos"
myName = myName.toUpperCase()

function displayposition(company_name: string, job_title: string, description: string){
    console.log(`* ${job_title} at ${company_name} - ${description}`);
}
    
function displaySkill(skill: string, cool: boolean){
    console.log(`* ${(cool) ? 'BAM: ' : ''}${skill}`);
    
}
console.log(`Name: ${myName}`)
console.log(`Career: Aeroplane Pilot`);
console.log(`Description: I fly planes`);
console.log();
console.log(`Interests`);
displaySkill('dabbing',false);
displaySkill('flying',false);
displaySkill('falling',false);
displaySkill('skiing',false);
console.log();
console.log(`My Previous Experience:`);
displayposition(`trucks-r-us`, `truck driver`, `drive trucks around`)