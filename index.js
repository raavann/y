let dataExec = dataHeads = [
  {
    img:'./1.jpg',
    innerhtml : "<sub style='font-size:100px'>Presi-dent</sub>",
    name : "1",
    Handles : {
      Email : "itsraavann@gmail.com",
      LinkedIn : "https://www.linkedin.com/1",
      Instagram : "https://www.instagram.com/1",
    }
  },
  {
    img:'./2.jpg',
    innerhtml : "<sub style='font-size:50px'>Operations Executive</sub>",
    name : "John Doe2",
    Handles : {
      Email : "itsraavann@gmail.com",
      LinkedIn : "https://www.linkedin.com/2",
      Instagram : "https://www.instagram.com/2",
    }  
  },
  {
    img:'./3.jpg',
    innerhtml : "<sub style='font-size:50px'>Marketing Executive</sub>",
    name : "John Doe3",
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

td(sull1,dataExec,'07');
td(sull2,dataHeads,'11');

function td(sull,data,f){
  let bg = document.createElement('div');
  let fg = document.createElement('div');
  bg.classList.add('appendclass');
  fg.classList.add('appendclass');

  sull.appendChild(bg);
  sull.appendChild(fg);

  let len = data.length,
    current = len-1,
    closedWidth = Math.floor(window.innerWidth/Number(f))
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
      innerHTML:data[i].innerhtml,
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

      namehead = document.querySelector('#nameHeads'),
      nameexec = document.querySelector('#nameExecutives')
    ;
    if(f>10){   // if f>10 then it is for heads
      headEmail.href = data[len-1].Handles.Email;
      headLinkedin.href = data[len-1].Handles.LinkedIn;
      headInstagram.href = data[len-1].Handles.Instagram;
      namehead.innerHTML = data[len-1].name;
    } else {
      ExecEmail.href = data[len-1].Handles.Email;
      ExecLinkedIn.href = data[len-1].Handles.LinkedIn;
      ExecInstagram.href = data[len-1].Handles.Instagram;
      nameexec.innerHTML = data[len-1].name;
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
        headEmail.href = data[current].Handles.Email;
        headLinkedin.href = data[current].Handles.LinkedIn;
        headInstagram.href = data[current].Handles.Instagram;
        namehead.innerHTML = data[current].name;

      } else {
        ExecEmail.href = data[current].Handles.Email;
        ExecLinkedIn.href = data[current].Handles.LinkedIn;
        ExecInstagram.href = data[current].Handles.Instagram;
        nameexec.innerHTML = data[current].name;
      }
    }
  }
}

// (document.querySelectorAll('sub')).forEach((e)=>{window.fitText(e); console.log(e)})
// console.log(fittext)
// fitText(document.querySelector('sub'), 10000000000);