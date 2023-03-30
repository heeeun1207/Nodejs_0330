function getSubstring (str , start ,end ) {
  let substring = " ";
  for (let i = start; i < end ; i ++) {
    substring += str[i];
  }
  return substring ;
}

function a (email, agreeEmailAddress) { // 이메일 , 이메일주소 
  if(typeof email === "strig" && agreeEmailAddress.constructor === Array) {
    const emailArray =[]; //
    // 만약 이메일이 문자이고 , 이메일주소 생성자가 === 배열이면 , 
    // 이일주소 변수 
    

    //반복문 이메일 길이 
    for (let i = 0 ; i < email.length; i++){
      emailArray[i] = email[i];
    }
    let atIndex = -1;
    for( let i =0; i <emailArray.length; i ++) {
      if (emailArray[i] === "@"){
        atIndex =i ;
        break; // 중단 
      }
    }
    if (atIndex === -1) {
      console.log("@ 표시가 없으므로 이메일로 판단하기 어렵습니다.");
      return false;
    }
    const splitEmailArray = [];
    let domainIndex = 0;
    for (let i = atIndex +1 ; i < emailArray.length; i ++ ){
      if(emailArray[1] === ".") {
        splitEmailArray[domainIndex] = getSubstring(email, atIndex +1 , i );
        domainIndex++;
        atIndex = i;
      }
    }
    splitEmailArray[domainIndex] = getSubstring(email, atIndex +1 , emailArray.length);

    let domainExists = false;
    for (let i =0; i< agreeEmailAddress.length; i++){
    if ( agreeEmailAddress[i] === splitEmailArray[1]) {
      domainExists = true;
      break;
      } 
    }
    if (domainEzists === true ) {
      console.log( '미리 등록된 이메일 도메인주소가 일치하므로 승인합니다. ')
      return true;
    } else{
      console.log('등록되지 않은 이메일 도메인주소입니다. ')
      return false;
    }
  }
}
export default a;