name = "jeff besos"
name = name.toUpperCase()

function displayposition(company_name, job_title, description){
    console.log(`* ${job_title} at ${company_name} - ${description}`);
}
    
function displaySkill(skill, cool){
    console.log(`* ${(cool) ? 'BAM: ' : ''}${skill}`);
    
}
console.log(`Name: ${name}`)
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