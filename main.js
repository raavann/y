let dataExec = [
  {
    img:'./1.jpg',
    designation : "President",
    name : "Anurudh",
    Handles : {
      Email : "itsraavann@gmail.com",
      LinkedIn : "https://www.linkedin.com/1",
      Instagram : "https://www.instagram.com/1",
    }
  },
  {
    img:'./2.jpg',
    designation : "Operations Executive",
    name : "John",
    Handles : {
      Email : "itsraavann@gmail.com",
      LinkedIn : "https://www.linkedin.com/2",
      Instagram : "https://www.instagram.com/2",
    }  
  },
  {
    img:'./3.jpg',
    designation : "Marketing Executive",
    name : "Marry",
    Handles : {
      Email : "itsraavann@gmail.com",
      LinkedIn : "https://www.linkedin.com/3",
      Instagram : "https://www.instagram.com/3",
    }  
  }
];

let dataHeads = [
  {
    img:'./1.jpg',
    designation : "Head of Operations",
    name : "Anurudh",
    Handles : {
      Email : "itsraavann@gmail.com",
      LinkedIn : "https://www.linkedin.com/1",
      Instagram : "https://www.instagram.com/1",
    }
  },
  {
    img:'./2.jpg',
    designation : "Tech Head",
    name : "John",
    Handles : {
      Email : "itsraavann@gmail.com",
      LinkedIn : "https://www.linkedin.com/2",
      Instagram : "https://www.instagram.com/2",
    }  
  },
  {
    img:'./3.jpg',
    designation : "Head of Marketing",
    name : "Marry",
    Handles : {
      Email : "itsraavann@gmail.com",
      LinkedIn : "https://www.linkedin.com/3",
      Instagram : "https://www.instagram.com/3",
    }  
  },
  {
    img:'./1.jpg',
    designation : "Head of Operations",
    name : "Anurudh",
    Handles : {
      Email : "itsraavann@gmail.com",
      LinkedIn : "https://www.linkedin.com/1",
      Instagram : "https://www.instagram.com/1",
    }
  },
  {
    img:'./2.jpg',
    designation : "Head of Operations",
    name : "John",
    Handles : {
      Email : "itsraavann@gmail.com",
      LinkedIn : "https://www.linkedin.com/2",
      Instagram : "https://www.instagram.com/2",
    }  
  },
  {
    img:'./3.jpg',
    designation : "Head of Operations",
    name : "Marry",
    Handles : {
      Email : "itsraavann@gmail.com",
      LinkedIn : "https://www.linkedin.com/3",
      Instagram : "https://www.instagram.com/3",
    }  
  }
];

// let imagesH = ['./1.jpg','./2.jpg','./3.jpg','./1.jpg','./2.jpg','./3.jpg','./1.jpg','./2.jpg','./3.jpg','./1.jpg','./2.jpg','./3.jpg']

let sull1 = document.getElementById('sull1');
let sull2 = document.getElementById('sull2');

td(sull1,dataExec,'10');
td(sull2,dataHeads,'11');

document.querySelectorAll('.gradient-box').forEach( element =>{
  element.addEventListener('mousemove', (e)=>{
    mouseX = e.pageX - element.offsetLeft;
    mouseY = e.pageY - element.offsetTop;
    const midx = window.innerWidth/2;
    const midy = window.innerHeight/2;
    const angle = Math.atan2(midy - mouseY, midx - mouseX);
    const angleDeg = angle* 180 / Math.PI;
    element.style.setProperty('background', `linear-gradient(${angleDeg}deg, #262262 6.24%, #52af5d 91.17%, #48af55 91.17%)`);
  })
})

function td(sull,data,f){
  let bg = document.createElement('div');
  let fg = document.createElement('div');
  bg.classList.add('appendclass');
  fg.classList.add('appendclass');

  sull.appendChild(bg);
  sull.appendChild(fg);

  let len = data.length,
    current = len-1,
    closedWidth = Math.floor(window.innerWidth/(f>10)?sull1.offsetWidth/10 : sull2.offsetWidth/10)
  ;

  for (var i=0; i<len; i++){
    var bgImg = document.createElement('div'); 
    bg.appendChild(bgImg);

    gsap.set(bgImg, {
      attr:{id:'bgImg'+f+i, class:'bgImg'+f},
      width:'100%',
      height:'100%',
      backgroundImage:'url('+data[i].img+')',
      backgroundSize:'cover',
      backgroundPosition:'center'
    })

    var b = document.createElement('div');
    fg.appendChild(b); 

    gsap.fromTo(b, {
      attr:{id:'b'+f+i, class:'box'+f},
      innerHTML:`<sub class=${(f>10)?"headdesg":"execdesg"}>${data[i].designation}</sub>`,
      width:'100%',
      height:'100%',
      borderLeft:(i>0)?'solid 4px #1e1e1e':'',
      backgroundColor:'rgba(250,250,250,0)',
      left:i*closedWidth,
      transformOrigin:'100% 100%',
      x:'100%'
    },{
      duration:i*0.15,
      x:0,
      ease:'expo.inOut'
    })  

    let headEmail = document.querySelector('#handlesHeads .email'),
      headLinkedin = document.querySelector('#handlesHeads .linkedin'),
      headInstagram = document.querySelector('#handlesHeads .instagram'),

      ExecEmail = document.querySelector('#handlesExecutives .email'),
      ExecLinkedIn = document.querySelector('#handlesExecutives .linkedin'),
      ExecInstagram = document.querySelector('#handlesExecutives .instagram'),

      DesignationExec = document.querySelector('#designationExecutives'),
      DesignationHeads = document.querySelector('#designationHeads'),

      namehead = document.querySelector('#nameHeads'),
      nameexec = document.querySelector('#nameExecutives')
    ;

    if(f>10){   // if f>10 then it is for heads
      headEmail.href = "mailto:"+data[len-1].Handles.Email;
      headLinkedin.href = data[len-1].Handles.LinkedIn;
      headInstagram.href = data[len-1].Handles.Instagram;
      namehead.innerHTML = data[len-1].name;
      DesignationHeads.innerHTML = data[len-1].designation;
      // allheaddesg[len-1].classList.add('active');
    } else {
      ExecEmail.href = "mailto:"+data[len-1].Handles.Email;
      ExecLinkedIn.href = data[len-1].Handles.LinkedIn;
      ExecInstagram.href = data[len-1].Handles.Instagram;
      nameexec.innerHTML = data[len-1].name;
      DesignationExec.innerHTML = data[len-1].designation;
      // allexecdesg[len-1].classList.add(sub'active');

    }
    b.onmouseenter = b.onclick = (e)=>{    
      if (Number(e.currentTarget.id.substr(3))==current) return;
      
      var staggerOrder = !!(current < Number(e.currentTarget.id.substr(3)));
      current = Number(e.currentTarget.id.substr(3));
      gsap.to('.box'+f, {
        duration:0.5,
        ease:'elastic.out(0.3)',
        left:(i)=>(i<=current)? i*closedWidth: ((f<=10)? sull1.offsetWidth:sull2.offsetWidth) -((len-i)*closedWidth),
        x:0,
        stagger: staggerOrder? 0.05:-0.05
      })
      
      bg.appendChild( document.getElementById('bgImg'+f+current) )
      gsap.fromTo('#bgImg'+f+current, {opacity:0}, {opacity:1, duration:0.3, ease:'power1.inOut'})

      if(f>10){
        headEmail.href = "mailto:"+data[current].Handles.Email;
        headLinkedin.href = data[current].Handles.LinkedIn;
        headInstagram.href = data[current].Handles.Instagram;
        namehead.innerHTML = data[current].name;
        DesignationHeads.innerHTML = data[current].designation;

        let allheaddesg = document.querySelectorAll('.headdesg');
        allheaddesg.forEach((e)=>{ e.classList.remove('active') });
        allheaddesg[current].classList.add('active');

      } else {
        ExecEmail.href = "mailto:"+data[current].Handles.Email;
        ExecLinkedIn.href = data[current].Handles.LinkedIn;
        ExecInstagram.href = data[current].Handles.Instagram;
        nameexec.innerHTML = data[current].name;
        DesignationExec.innerHTML = data[current].designation;

        let allexecdesg = document.querySelectorAll('.execdesg');
        allexecdesg.forEach((e)=>{ e.classList.remove('active') });
        allexecdesg[current].classList.add('active');      }
    }

  }
}

// (document.querySelectorAll('sub')).forEach((e)=>{window.fitText(e); console.log(e)})
// console.log(fittext)
// fitText(document.querySelector('sub'), 10000000000);