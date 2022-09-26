$.ajax({
    url : "https://pokeapi.co/api/v2/pokemon/", //Menginput url data api pokemon
}).done(res => {
    let text = "";
    let name = "";
    $.each(res.results,function(key,val){
        // template
        name = val.name[0].toUpperCase() + val.name.slice(1);
        text +=  
        `<tr>
            <td>${key+1}</td>
            <td>${name}</td>
            <td><button type="button" onclick="detail('${val.url}')" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modalDetailsPk">
            Detail
            </button></td>
        </tr>`
        // "<li>"+ val.name +"</li>";
    })
    $("#tbodyPk").html(text);
}).fail((error) => {
    console.log(error);
})

//Function yang mengambil habitat
const pokeSpecies = $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon-species/`,
  }).done(res=>{
    console.log(res.results);
    $.each(res.results.habitat,function(key,val){
        val.name;
    })
  }).fail((error)=>{
    console.log(error);
  });

// Isi Detail
function detail(urlPk){
    $.ajax({
        url : urlPk, //Menginput url detail pokemon
    }).done(res => {
        console.log(urlPk);
        let name = res.name.toUpperCase();
        let pkType = res.types;
        let hp = res.stats[0].base_stat;
        let attack = res.stats[1].base_stat;
        let defense = res.stats[2].base_stat;
        let speed = res.stats[5].base_stat; 
        let detail = `
        <div class="container-fluid card">
            <div class="row">
            <div class="col-md-12">
                <ul class="list-group text-center">
                    <li class="list-group-item border-0"><img src="../Assets/Pokedex.png" alt="..." class="img-fluid"></li>        
                </ul>
                <ul class="list-group-item mt-1 pt-1 text-center">   
                    <li class="list-group-item"><h3><u>${name}</u></h3></li>    
                </ul>
                </div>
                <div class="col text-center pb-5">
                    <img src="` + res.sprites.other.home.front_default +`" alt="..." class="img-fluid">
                </div>   
            </div>

            <div class="row">
                <div class="col">          
                </div>
                <div class="col-md-12">
                    <ul class="list-group-item text-center">
                        <li class="list-group-item"><h7><strong>Types</strong></h7></li>    
                    </ul>
                </div>
                <div class="col-md-12">
                    <ul class="list-group-item text-center">
                        <li class="list-group-item text-capitalize"><span><h7>${tipe(pkType)}</h7></span></h7></li>    
                    </ul>
                </div>
                <div class="col-md-6">
                    <ul class="list-group-item text-center text-capitalize">
                        <li class="list-group-item"><h5>abilities</h5></li>
                        <li class="list-group-item"><span class="badge text-bg-warning">${skill(res.abilities)} </span></li>       
                    </ul>
                </div>
                <div class="col-md-6">
                    <ul class="list-group-item text-center">
                        <li class="list-group-item"><h5>Info</h5></li> 
                        <li class="list-group-item">Height : ${res.height} m</li>      
                        <li class="list-group-item">Weight : ${res.weight} kg</li>      
                        <li class="list-group-item">Habitat : ${pokeSpecies}</li>      
                    </ul>
                </div>
                <div class="col-md-12 text-center">Status
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" aria-label="Success example" style="width: ${hp}% " aria-valuenow="${hp}" aria-valuemin="0" aria-valuemax="100">Hp : ${hp}</div>
                    </div>
                    <div class="progress">
                    <div class="progress-bar bg-info" role="progressbar" aria-label="Info example" style="width: ${attack}%" aria-valuenow="${attack}" aria-valuemin="0" aria-valuemax="100">Attack : ${attack}</div>
                    </div>
                    <div class="progress">
                    <div class="progress-bar bg-warning" role="progressbar" aria-label="Warning example" style="width: ${defense}%" aria-valuenow="${defense}" aria-valuemin="0" aria-valuemax="100">Defense : ${defense}</div>
                    </div>
                    <div class="progress">
                    <div class="progress-bar bg-danger" role="progressbar" aria-label="Danger example" style="width: ${speed}%" aria-valuenow="${speed}" aria-valuemin="0" aria-valuemax="100">Speed : ${speed}</div>
                    </div>
                </div>    
            </div>
        </div>
        ` 
    $(".modal-body").html(detail);
    })
    .fail((error) => {
        console.log(error);
    })

    //Function yang mengambil ability dari array abilities
    function skill(abilities){
        text="";
        for (const item of abilities) {
            text += "| " + item.ability.name + " | ";
        }
        return text;
    }

    // Function yang mengambil value dari array types
    function tipe(types){
        text="";
        for (const item of types) {
          //console.log(item);
          text+=badge(item.type.name);
        }
        return text;
      }

      //Function yang mengubah warna badge
      function badge(typePoke){
        switch (typePoke) {
          case "normal":
            return `<span class="badge text-bg-light pb-2" >${typePoke}</span>`;
            break;
          case "fighting":
            return `<span class="badge text-bg-danger pb-2">${typePoke}</span>`;
            break;
          case "flying":
            return `<span class="badge text-bg-info pb-2">${typePoke}</span>`;
            break;
          case "poison":
            return `<span class="badge text-bg-secondary pb-2">${typePoke}</span>`;
            break;
          case "rock":
            return `<span class="badge text-bg-secondary pb-2">${typePoke}</span>`;
            break;
          case "bug":
            return `<span class="badge text-bg-warning pb-2">${typePoke}</span>`;
            break;
          case "ghost":
            return `<span class="badge text-bg-dark pb-2">${typePoke}</span>`;
            break;
          case "steel":
            return `<span class="badge text-bg-secondary pb-2">${typePoke}</span>`;
            break;
          case "fire":
            return `<span class="badge text-bg-danger pb-2">${typePoke}</span>`;
            break;
          case "water":
            return `<span class="badge text-bg-primary pb-2">${typePoke}</span>`;
            break;
          case "grass":
            return `<span class="badge text-bg-success pb-2 shadow">${typePoke}</span>`;
            break;
          case "electric":
            return `<span class="badge text-bg-warning pb-2 shadow">${typePoke}</span>`;
            break;
          case "psychic":
            return `<span class="badge text-bg-light pb-2 shadow">${typePoke}</span>`;
            break;
          case "ice":
            return `<span class="badge text-bg-primary pb-2 shadow">${typePoke}</span>`;
            break;
          case "dragon":
            return `<span class="badge text-bg-danger pb-2 shadow">${typePoke}</span>`;
            break;
          case "dark":
            return `<span class="badge text-bg-dark pb-2 shadow">${typePoke}</span>`;
            break;
          case "fairy":
            return `<span class="badge text-bg-light pb-2 shadow">${typePoke}</span>`;
            break;
          case "unknown":
            return `<span class="badge text-bg-info pb-2 shadow">${typePoke}</span>`;
            break;
          case "shadow":
            return `<span class="badge text-bg-secondary pb-2 shadow">${typePoke}</span>`;
            break;
          case "ground":
            return `<span class="badge text-bg-secondary pb-2 shadow">${typePoke}</span>`;
            break;
        
          default:
            break;
        }
      }

}   

$(document).ready(function(){
    //akan dijalankan saat DOCUMENT/HTML selesai di load (ready)
    $("#datatableSW").DataTable({
        "ajax": { 
            url: "https://pokeapi.co/api/v2/pokemon/", 
            type: "GET",
            dataSrc: "results",
            dataType: "JSON"
        },
        "columns": [
            {
                "data": null,
                "render": function (data, type, row, meta) {
                    return meta.row + meta.settings._iDisplayStart + 1;
                }
            },
            {
                "data": "",
                "render": function ( data, type, row ) {
                    return  `Rp. ${row.name} ${row.gender}`;
                }
            },
            {"data" : "height"},
            {"data" : "gender"},
            {
                "data": "",
                "render": function ( data, type, row ) {
                    return  `<button type="button" onclick="detail('${row.url}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalDetailSW">Detail</button>`;
                }
            }
        ]
    });

    $("#testingEdefault").on("click",e => {
        e.preventDefault();
    })

});