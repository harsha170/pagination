var xhr = new XMLHttpRequest()
xhr.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json", true)
xhr.send()


xhr.onload=function() {
    var data = JSON.parse(this.response);
    let final = document.createElement('div');
    final.setAttribute('id','final1');
    document.body.append(final);
    const choosePerson = (details) => {
        console.log(details, 'details');
        const checkPerson=document.getElementsByClassName('personDetails')
        console.log( checkPerson[0], final, typeof checkPerson, typeof final);
        if( checkPerson[0]){
            document.getElementById('final1').removeChild(checkPerson[0]);
        }
        let page = document.createElement('div');
        page.setAttribute('class','personDetails');
        page.innerHTML= `${details.id}. Name: ${details.name} Email: ${details.email}`;
        final.append(page)
    }
    let wrap = document.createElement('div');
        document.body.append(wrap);
        wrap.setAttribute('class','wrapperStyle');
        const prev = document.createElement('span')
    prev.innerHTML='<<'
    wrap.appendChild(prev)
    prev.setAttribute('class','person') 
    let maxLimit = 24 ;
    let previousLimit = 0;

    function pagination(previousLimit, maxLimit) {
      // previousLimit = previousLimit;
      // maxLimit = maxLimit;

       // const check = nextPage ? index >  : previousLimit <= limit;
        data.length > 0 && data.map(( details, index ) => {
            if ( index > previousLimit &&  index <= maxLimit ) {
               // previousLimit = previousLimit+1;
                let person = document.createElement('span');
                person.innerHTML = details.id;
                person.setAttribute('class', 'person');
                wrap.appendChild(person);
                person.onclick = function() {
                    choosePerson(details);
                };
            }   
             // console.log(details.id, 'id');
        })
        console.log(previousLimit, maxLimit);
        previousLimit = previousLimit;
        maxLimit = maxLimit
    }


    pagination(previousLimit, maxLimit);


    const next = document.createElement('span')
    next.innerHTML='>>'
    wrap.appendChild(next)
    next.setAttribute('class','person')
    next.onclick = function() {
        pagination(previousLimit + 25, maxLimit + 25);
    }
    // var first = createElement('first')
    // createElement.innerHTML = '1'
    // var res = getElementById("id")
    // var res= res.slice(0,20)
	
};