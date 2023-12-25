
let body = document.body;
body.style.color = "#190482";
body.style.fontSize ="15px"  
body.style.backgroundColor = "#000";
body.style.background = "#52D3D8";
body.style.boxShadow = "0 8px 32px 0 rgba(31, 38, 135, 0.37)";
body.style.backdropFilter = "blur(12px)";
body.style.webkitBackdropFilter = "blur(12px)";
body.style.borderRadius = "10px";
body.style.border = "1px solid rgba(255, 255, 255, 0.18)";

let container = document.createElement("div");
container.style.height="90vh";
container.style.border = "1px solid rgba(255, 255, 255, 0.18)";
container.style.marginLeft = "100px";
container.style.display="flex";
container.style.flexDirection="column"
container.style.justifyContent="center";
container.style.alignItems="center";
container.setAttribute("class","Container")


let form = document.createElement("form")

let formele = ["First Name","Last Name","Gender","Address","Pincode","State","Country"]

for(let i=0;i<formele.length;i++){
    let lb = document.createElement("label");
    lb.innerText=formele[i];
    let br=document.createElement("br");
    form.appendChild(lb);
    form.appendChild(br)
    let element = document.createElement("input");
    element.style.padding="5px 20px";
    element.style.borderRadius="12px"
    element.style.marginBottom="10px"
    if(formele[i]=="Gender:"){
        let male = document.createElement("input");
        male.setAttribute("type","radio");
        male.setAttribute("id","Male");
        male.setAttribute("name","Gender")
        male.style.paddingLeft="10px"
        form.appendChild(male)
        let mlable = document.createElement("label");
        mlable.style.paddingLeft="10px"
        mlable.innerText="Male";
        form.appendChild(mlable);

        let female = document.createElement("input");
        female.setAttribute("type","radio");
        female.setAttribute("id","Female");
        female.setAttribute("name","Gender");
        female.style.marginLeft="10px";
        form.appendChild(female)
        let felable = document.createElement("label");
        felable.innerText="Female";
        felable.style.paddingLeft="10px"
        form.appendChild(felable);
        
        let br = document.createElement("br");
        form.appendChild(br);
    }else{
    element.setAttribute("id",formele[i])
    element.setAttribute("class","inpt")
    element.setAttribute("placeholder",`Enter ${formele[i]}`);
    element.setAttribute("name",formele[i]);
   
    form.appendChild(element);
    let br=document.createElement("br");
    form.appendChild(br);
    }
}

let foodlabel=document.createElement("p");
foodlabel.innerText="Choose your favourite food";
form.appendChild(foodlabel) 
let fooddiv=document.createElement("div");
fooddiv.style.marginBottom="40px";

let foods=["IndianCuisine","ItalianCuisine","ThailandCuisine","JuiceItems","Milk"]
for(let i=0;i<foods.length;i++){
    let food = document.createElement("input");
    food.setAttribute('type','checkbox');
    food.setAttribute("id","food");
    food.setAttribute("name","food");
    food.setAttribute("value",foods[i]);
    food.style.marginLeft="10px"
    

    if(foods[i]==="IndianCuisine" || foods[i]==="ThailandCuisine"){
        food.setAttribute("checked","checked")
    }

    let label = document.createElement("label");
    label.innerText= foods[i];

    fooddiv.appendChild(food)
    fooddiv.appendChild(label)
    form.appendChild(fooddiv);
}

let submit = document.createElement("button");
submit.setAttribute("type","button");
submit.innerText="Submit";
submit.style.marginLeft="30px";
submit.style.marginBottom="30px";
submit.style.marginLeft="50px";
 submit.style.borderRadius="10px";
 submit.style.color="white";
 submit.style.backgroundColor="black";

submit.style.padding="10px";
submit.style.width="130px"
submit.addEventListener("click",function(){
    updateTable(form)
})

form.appendChild(submit)

container.appendChild(form);

document.body.appendChild(container);

form.appendChild(submit)

container.appendChild(form);

document.body.appendChild(container);


function updateTable(form) {
    let table = document.querySelector("table");
    if (!table) {
        formele.push("Food Preference");
        table = document.createElement("table");
        table.classList.add("table", "table-bordered", "table-striped");

        let tablerow = document.createElement("tr");
        for (let i = 0; i < formele.length; i++) {
            let tablecell = document.createElement("th");
            tablecell.innerText = formele[i];
            tablerow.appendChild(tablecell);
        }
        table.appendChild(tablerow);
    }

    let datarow = document.createElement("tr");
    for (let i = 0; i < formele.length; i++) {
        let datacell = document.createElement("td");

        if (formele[i] === "Gender:") {
            let gender = form.querySelector('input[name="Gender"]:checked');
            datacell.textContent = gender ? gender.id || gender.innerText : '';
        } else if (formele[i] === "Food Preference") {
            let foods = form.querySelectorAll('input[name="food"]:checked');
            let foodsarray = Array.from(foods).map(food => { return food.value });
            datacell.textContent = foodsarray.join(", ");
        } else {
            let element = document.getElementById(formele[i]);
            datacell.textContent = element ? element.value : '';
        }

        datarow.appendChild(datacell);
    }

    table.appendChild(datarow);


    if (!document.contains(table)) {
        document.body.appendChild(table);
    }
}
