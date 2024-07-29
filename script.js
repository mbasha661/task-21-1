var container=document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.classList.add("row","m-3");

container.append(row);

var res=fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
res.then((data)=>data.json()).then((data1)=>foo(data1));

function foo(data1){
    for(var i=0; i<data1.length; i++){
        row.innerHTML+=`
        <div class="card" style="width: 18rem;padding:15px;margin:20px;)">
        <h5 class="card-title">${data1[i].name}</h5>
        <div class="imgdiv">
  <img src="${data1[i].image_link}" class="card-img-top" alt="..." style="width:257px;height:238px;>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">brand Name:${data1[i].brand}</li>
    <li class="list-group-item">product Price:${data1[i].price}</li>
    <li class="list-group-item">description:${data1[i].description}</li>
  </ul>
  <div class="card-body">
    <a href="${data1[i].product_link}" class="card-link">Add To Cart</a>
  </div>
</div>

      `;
      document.body.append(container);
    }
}
