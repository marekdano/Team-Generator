//varaibles
box = []

//shuffling role
const shuffling = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        console.log(j)
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        console.log(array)
    }
    return array
}

//sorting people
const groupPlayers = function (array, groupNum) {
    const groups = {};
    const peopleLeftOut = array.length % groupNum
    const peopleEven = array.length - peopleLeftOut
    const remainderPeople = array.slice(-peopleLeftOut)

    if (array.length % groupNum === 0) {
        for (let i = 1; i <= groupNum; i++) {
            groups[i] = array.slice(
                ((i - 1) * array.length) / groupNum,
                (array.length / groupNum) * i
            );
        }
    } else {
        for (let i = 1; i <= groupNum; i++) {
            groups[i] = array.slice(
                ((i - 1) * peopleEven) / groupNum,
                peopleEven / groupNum * i
            );
        }

        for (let j = 1; j <= remainderPeople.length; j++) {

            groups[j].push(remainderPeople[j - 1]

            );
        }

    }


    // let str = "<ol>"
    // Object.entries(groups).forEach(([key, value]) => {
    //     console.log(key, value)
    //     str += "<li>"
    //     for (let person of value) {
    //         str += "<p>" + person + "</p>"
    //     }
    //     str += "</li>"
    // });
    // str += "</ol>"
    // document.getElementById(" inputArray").innerHTML = str

    // let olElement = document.createElement("ol")
    // Object.entries(groups).forEach(([key, value]) => {
    //     let liElement = document.createElement("li")
    //     for (let person of value) {
    //         let pElement = document.createElement("p")
    //         pElement.innerHTML = person
    //         liElement.appendChild(pElement)
    //     }
    //     olElement.appendChild(liElement)

    // })
    // document.getElementById(" inputArray").replaceChildren(olElement)

    let str = "<ol>"
    Object.entries(groups).forEach(([key, value], index) => {
        console.log(key, value)
        str += "<li>"
        for (let person of value) {
            str += "<p>" + person + "</p>"
        }
        str += "</li>"
    });
    str += "</ol>"
    document.getElementById(" inputArray").innerHTML = str

};


document.getElementById("generate-button").addEventListener("click", sendToArray);

function sendToArray() {
    const areaContent = document.getElementById("outArray").value
    console.log(areaContent)

    const prepareContent = areaContent.replaceAll("\r", " ").replaceAll("\n", " ").split(' ').filter(item => item !== '')
    box = prepareContent

    const groupNum = document.getElementById(" inputGroupNumber").value;

    const shuffled = shuffling(box);



    groupPlayers(shuffled, groupNum);

}


//#1 check index from shuffles
//#2 tidy up function: check return of groupPlayers
//when list in textarea is updated, plan to add it as new by delete the previous array
//error handling: groupNUm > group.length
//accidental space inbetween words like "pa blo"
//list as API

//tidy up input list and auto reprint it
