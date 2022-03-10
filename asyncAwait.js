const catPicture = document.createElement('img')
document.body.appendChild(catPicture)

function showOneCat() {

async function catAsync() {
    let response = await fetch('https://api.thecatapi.com/v1/images/search');
    let data = await response.json();
    console.log(data)
    catPicture.src = data[0].url
    return data
}

catAsync().then(data => console.log(data, data[0].url))
    .catch(error => console.error(error))

}

// async function print() {
//     console.info("🚀 Onclic: let's go, SECOND print!!!")


// const activity = document.createElement('h1')
// document.body.appendChild(activity)

// // This ASYNCH code is read appart and will appear aftet line 47
// fetch( 'https://www.boredapi.com/api/activity' )
//     .then( response => {
//         console.log( response );
//     return response.json();
//     // ASYNCH
//     }).then( json => {
//         let completeActivity = json
//     console.log( completeActivity );

//         let oneActivity = json.activity
//     console.log( oneActivity );

//     activity.innerHTML = `🕺🏼 Well done! Now go🤘🏼😃👉🏼 >  ${oneActivity}! 💡`;

//     // ASYNCH
//     }).catch( error => {
//     console.error( error )
//     })
// // This SYNCHRONOUS code will appear in the console before the fetch result
// console.info("✅ done, THIRD print!!")
// alert("✅ done!! just AFTER NUMBER 3: Alert stops the script; so just before fetch is finished ASYNCHRONOUSLY. 👇🏼 Press 🆗 to see the response 👉🏼")
    
// }

// async function getData() {
//     const response = await fetch('https://www.boredapi.com/api/activity')
//     const data = await response.json()
//     return data
// }


// getData().then(data => console.log(data))
// .catch(error => console.error(error))

// async function print3() {
//     console.log("i have been printed")
//     return "I have been printeed"  
    
// }

// const print2 = async () => {
//     console.log("i have been printeeed FIRST on first rendering")

// }
// print2()

