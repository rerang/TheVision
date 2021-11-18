let willDoObject = {
    0:{title:"분야별 프로젝트 진행", desc:"동일한 분야의 구성원끼리 프로젝트를 해보며, 실무를 익힙니다.", img:"willDoProject.jpg"},
    1:{title:"알고리즘 문제 풀기", desc:"기간을 정하여 코딩테스트를 미리 준비해보는 시간을 갖습니다.", img:"willDoAlgorithm.jpg"},
    2:{title:"컨퍼런스 및 대회 참여 인증하기", desc:"참여를 촉진하기 위하여, 현황을 공유합니다.", img:"willDoCertify.jpg"}
}
let willDoObjectPresentIndex = 0;

let willDoContentTitle = document.querySelector("#willDoContentTitle");
let willDoContentDescription = document.querySelector("#willDoContentDescription");
let willDoContentImg = document.querySelector("#willDoContentImg");
let willDoChangeLeft = document.querySelector("#willDoChangeLeft");
let willDoChangeRight = document.querySelector("#willDoChangeRight");

let changeIndexDownAndPaint = ()=>{
    if(willDoObjectPresentIndex == 0){
        willDoObjectPresentIndex = Object.keys(willDoObject).length-1;
    }
    else{
        willDoObjectPresentIndex--;
    }
    paintWillDo(willDoObjectPresentIndex);
}
let changeIndexUpAndPaint = ()=>{
    if(willDoObjectPresentIndex == Object.keys(willDoObject).length-1){
        willDoObjectPresentIndex = 0;
    }
    else{willDoObjectPresentIndex++;}
    paintWillDo(willDoObjectPresentIndex);
}

let paintWillDo = (index)=>{
    let willDo = willDoObject[index];
    willDoContentImg.setAttribute('src', "/img/" + willDo["img"]);
    willDoContentTitle.innerHTML = willDo["title"];
    willDoContentDescription.innerHTML = willDo["desc"];
}

let beforeWillDoText = document.querySelector("#beforeWillDoText");
let typograpy = ()=>{
    let typewriter = new Typewriter(beforeWillDoText, {
        loop: false,
        cursor: " "
    });
    typewriter.typeString("나아가기 위해, 우리는...")
        .start()
    ;
    document.removeEventListener('scroll', typograpy);
}

document.addEventListener("scroll", typograpy);
willDoChangeLeft.addEventListener("click", changeIndexDownAndPaint);
willDoChangeRight.addEventListener("click", changeIndexUpAndPaint);