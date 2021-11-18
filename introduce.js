let memberObject={//학번, 이름순.
    0:{name:"김효진", position:"회장"},
    1:{name:"나상철", position:"부회장"},
    2:{name:"조민혁", position:"동아리원"},
    3:{name:"김민경", position:"동아리원"},
    4:{name:"김다빈", position:"동아리원"},
    5:{name:"정재욱", position:"동아리원"},
    6:{name:"함형빈", position:"동아리원"},
    7:{name:"황선규", position:"동아리원"},
    8:{name:"서유나", position:"동아리원"},
    9:{name:"신지혜", position:"동아리원"},
    10:{name:"윤혜지", position:"동아리원"},
    11:{name:"이흥재", position:"동아리원"}
}

let memberCard1= document.querySelector("#memberCard1");
let memberCard2= document.querySelector("#memberCard2");
let memberCard3= document.querySelector("#memberCard3");
let memberCard4= document.querySelector("#memberCard4");

let memberObjectPresentIndex = 0;

let memberChangeLeft = document.querySelector("#memberChangeLeft");
let memberChangeRight = document.querySelector("#memberChangeRight");

let changeMemberDownAndPaint = ()=>{
    if(memberObjectPresentIndex == 0){
        memberObjectPresentIndex = Object.keys(memberObject).length-1;
    }
    else{
        memberObjectPresentIndex--;
    }
    paintMember(memberObjectPresentIndex);
}
let changeMemberUpAndPaint = ()=>{
    if(memberObjectPresentIndex == Object.keys(memberObject).length-1){
        memberObjectPresentIndex = 0;
    }
    else{memberObjectPresentIndex++;}
    
    paintMember(memberObjectPresentIndex);
}

let paintMember = (index)=>{
    console.log(index);
    let member1 = memberObject[index];
    let member2, member3, member4;
    if(index >  Object.keys(memberObject).length-1-3){
        if(index == Object.keys(memberObject).length-1-2){
            member2 = memberObject[index+1];
            member3 = memberObject[index+2];
            member4 = memberObject[0];
        }
        if(index == Object.keys(memberObject).length-1-1){
            member2 = memberObject[index+1];
            member3 = memberObject[0];
            member4 = memberObject[1];
        }
        if(index == Object.keys(memberObject).length-1){
            member2 = memberObject[0];
            member3 = memberObject[1];
            member4 = memberObject[2];
        }
    }
    else{
        member2 = memberObject[index+1];
        member3 = memberObject[index+2];
        member4 = memberObject[index+3];
    }
    memberCard1.firstElementChild.innerText = member1.name;
    memberCard2.firstElementChild.innerText = member2.name;
    memberCard3.firstElementChild.innerText = member3.name;
    memberCard4.firstElementChild.innerText = member4.name;

    memberCard1.lastElementChild.innerText = member1.position;
    memberCard2.lastElementChild.innerText = member2.position;
    memberCard3.lastElementChild.innerText = member3.position;
    memberCard4.lastElementChild.innerText = member4.position;
}

let basicload = ()=>{
    memberCard1.firstElementChild.innerText = memberObject[0].name;
    memberCard2.firstElementChild.innerText = memberObject[1].name;
    memberCard3.firstElementChild.innerText = memberObject[2].name;
    memberCard4.firstElementChild.innerText = memberObject[3].name;

    memberCard1.lastElementChild.innerText = memberObject[0].position;
    memberCard2.lastElementChild.innerText = memberObject[1].position;
    memberCard3.lastElementChild.innerText = memberObject[2].position;
    memberCard4.lastElementChild.innerText = memberObject[3].position;

}

basicload();
memberChangeLeft.addEventListener("click",  changeMemberDownAndPaint);
memberChangeRight.addEventListener("click",changeMemberUpAndPaint);
