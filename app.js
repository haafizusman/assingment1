var a = {
    mobiles: {
      samsung: {
        a30: {
          name: "a30",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 2000,
        },
        note10: {
          name: "note10",
          ram: "6gb",
          rom: "128gb",
          camera: "50px",
          price: 4000,
        },
        s10: {
          name: "s10",
          ram: "3gb",
          rom: "128gb",
          camera: "10px",
          price: 5000,
        },
      },
      iphone: {
        iphone4: {
          name: "iphone4",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 10000,
        },
        iphone4s: {
          name: "iphone4s",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 20000,
        },
        iphone5: {
          name: "iphone5",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 30000,
        },
        iphone6: {
          name: "iphone6",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 30000,
        },
      },
      xiaomi: {
        redminote10: {
          name: "redminote10",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 10000,
        },
        redminote11: {
          name: "redminote11",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 10000,
        },
        redmi10: {
          name: "redmi10",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 10000,
        },
        redmi10pro: {
          name: "redmi10pro",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 10000,
        },
      },
    },
  };
  


let brand = document.getElementById("brand");

let model = document.getElementById("model");

let button = document.getElementById("find");


let brandName = Object.keys(a.mobiles);
brandName.map((item)=>{
    brand.innerHTML = brand.innerHTML + `<option>${item}</option>`
});

brand.addEventListener("change" , ()=>{
    model.innerHTML = ""
    let phoneName = Object.keys(a.mobiles[brand.value]);
    // console.log(phoneName);
    phoneName.map((item)=>{
        model.innerHTML = model.innerHTML + `<option>${item}</option>`
    });
})


button.addEventListener("click" , ()=>{
    brand.value === "Select brand Name" ? 
    console.log("please select brand Name")
    :
    console.log(a.mobiles[brand.value][model.value]);
})


      