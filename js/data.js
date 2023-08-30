const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json()
    const trimData = data.data.tools.slice(0,5)
    // console.log(data.data.tools[0])
    

    const itemContainer = document.getElementById('product-container');
    trimData?.forEach(element => {
        console.log(element);
        const newDIV = document.createElement('div');
        newDIV.innerHTML = `
        <div class="card w-96 border-2 border-[#CFCFCF] p-5">
        <figure>
          <img
            src="${element.image}"
            alt="Loading Img"
          />
        </figure>
        <div class="card-body border-b-2 border-[#CFCFCF]">
          <h2 class="card-title">Features</h2>
          <ul class="list-decimal">
            <li>Natural language processing</li>
            <li>Contextual understanding</li>
            <li>Text generation</li>
          </ul>
        </div>
        <div class="flex justify-between py-4 items-center">
          <div class="card-description">
            <h4>Chat GPT</h4>
            <span>11/01/2022</span>
          </div>
          <img class="w-14 rounded-full block" src="avatar2.png" alt="" />
        </div>
      </div>
        `

        itemContainer.appendChild(newDIV)

    });

}

// const gettingData = async () => {
//     const itemContainer = document.getElementById('product-container');



// }

loadData()