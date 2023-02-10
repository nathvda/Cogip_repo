<script>      

async function idk(){

      try {
let infos = await fetch('http://localhost:8080/companies/4/edit', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
            name: "idk",
            type: 1,
            country: "something",
            tva: "something"
      })
})
let data = await infos.json();
return data;

} catch (error){
      console.log(error);
}
}

idk();

</script>